/* global fetch Node HTMLElement NodeList Element Document DocumentFragment */

import 'core-js/stable'
import 'regenerator-runtime/runtime'
import 'whatwg-fetch'
import gsap from 'gsap'

let cnt = 1

const DEFAULT_OPTIONS = {
  color: '#000000',
  colors: ['#0dafb7', '#eabc36', '#e154ed', '#62d628'],
  revealProperty: 'y',
  revealAmount: -10,
  revealDuration: 0.8,
  revealEase: 'elastic',
  strokeDuration: 1,
  strokeEase: 'slow',
  offsetDuration: 0.15,
  staggerAmount: 0.1,
  staggerEase: 'none',
  font: 'nunito'
}

const SYMBOL_MAP = {
  '!': 'exclamation-mark',
  '?': 'question-mark',
  '.': 'period',
  ',': 'comma',
  '"': 'double-quote',
  '\'': 'apostrophe',
  '&': 'ampersand'
};

(function (arr) {
  arr.forEach(function (item) {
    if (item.hasOwnProperty('prepend')) { // eslint-disable-line
      return
    }
    Object.defineProperty(item, 'prepend', {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function prepend () {
        var argArr = Array.prototype.slice.call(arguments)
        var docFrag = document.createDocumentFragment()

        argArr.forEach(function (argItem) {
          var isNode = argItem instanceof Node
          docFrag.appendChild(isNode ? argItem : document.createTextNode(String(argItem)))
        })

        this.insertBefore(docFrag, this.firstChild)
      }
    })
  })
})([Element.prototype, Document.prototype, DocumentFragment.prototype])

// closest() polyfill for IE 11
// Ref: https://developer.mozilla.org/en-US/docs/Web/API/Element/closest#Polyfill
if (!Element.prototype.matches) {
  Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector
}

if (!Element.prototype.closest) {
  Element.prototype.closest = function (s) {
    var el = this
    do {
      if (Element.prototype.matches.call(el, s)) return el
      el = el.parentElement || el.parentNode
    } while (el !== null && el.nodeType === 1)
    return null
  }
}

const DESCENDERS = ['Q', 'g', 'j', 'p', 'q', 'y', ',']
const ASCENDERS = ['"', '\'']
const UPPERCASE = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')
const LOWERCASE = 'abcdefghijklmnopqrstuvwxyz'.split('')
const instances = []
let prepped = false
let fetchPromise = null

function loadFont (path) {
  if (fetchPromise) {
    return fetchPromise
  } else {
    fetchPromise = fetch(path)
      .then(response => response.text())
      .then(text => {
        const fontWrapper = document.createElement('div')
        fontWrapper.innerHTML = text
        fontWrapper.setAttribute('class', 'motext-font')
        document.body.appendChild(fontWrapper)
        addStyles()
      })
      .catch(err => {
        console.error(err)
      })
    return fetchPromise
  }
}

function init (el, options = {}) { // eslint-disable-line no-unused-vars
  options = { ...DEFAULT_OPTIONS, ...options }
  const timelines = []
  const collection = getElementCollection(el)
  collection.forEach(target => {
    if (!prepped) {
      prepSVG(options)
    }
    target.setAttribute('aria-label', target.textContent)
    insertHTML(target, options)
    timelines.push(createTimeline(target, options))
  })
  const instance = {
    el,
    collection,
    options,
    timelines,
    play: function () {
      const promises = []
      this.timelines.forEach(tl => {
        promises.push(tl.play())
      })
      return Promise.all(promises)
    }
  }
  instances.push(instance)
  return instance
}

window.addEventListener('resize', e => {
  instances.forEach(instance => {
    instance.collection.forEach(target => {
      const fontSize = getFontSize(target)
      if (fontSize !== target.fontSize) {
        applyFontSize(target, fontSize)
      }
    })
  })
})

function prepSVG (options) {
  const font = document.getElementById(options.font)
  prepFontStyles(font, options)
  layerCharacters(font, options)
  prepped = true
}

function prepFontStyles (font, options) {
  const STROKE_LENGTH_BUFFER = 11
  Array.from(font.children).forEach(char => {
    if (char.nodeName !== 'g') return
    char.setAttribute('class', 'motext-colored')

    const strokes = Array.from(char.querySelectorAll('mask path'))
    strokes.forEach(stroke => {
      const length = stroke.getTotalLength() + STROKE_LENGTH_BUFFER
      stroke.style.strokeDasharray = length
      stroke.style.strokeDashoffset = length
    })
  })
}

function layerCharacters (font, options) {
  Array.from(font.children).forEach(char => {
    if (char.nodeName !== 'g') return
    const charLayer = char.cloneNode(true)
    charLayer.setAttribute('class', 'motext-solid')
    charLayer.setAttribute('id', char.id + 'l')
    font.appendChild(charLayer)
  })
}

function insertHTML (target, options) {
  let html = '<span class="motext"><span class="motext-word">'
  target.textContent.trim().split('').forEach(char => {
    if (char === ' ') {
      html += '</span><span class="motext-word">'
    } else {
      const symbol = SYMBOL_MAP[char]
      let selector = 'mo-' + char
      if (symbol) selector = 'mo-' + symbol
      const svgChar = document.getElementById(selector)
      const svgLayer = document.getElementById(selector + 'l')
      if (svgChar && svgLayer) {
        const size = svgChar.getBBox()
        let offset = ''
        if (DESCENDERS.includes(char)) {
          offset = 'descend'
        } else if (ASCENDERS.includes(char)) {
          offset = 'ascend'
        }
        html += openSVG({
          width: size.width + 11,
          height: size.height + 11,
          offset,
          options,
          character: symbol || char
        })
        html += svgChar.outerHTML
        html += svgLayer.outerHTML
        html += '</g></svg>'
      } else {
        console.warn(`motext.js does not support the character "${char}". This character has been omitted.`)
      }
    }
  })
  html += '</span></span>'
  target.innerHTML = html
  applyColors(target, options)
  uniqueMaskIds(target)
  const fontSize = getFontSize(target)
  applyFontSize(target, fontSize)
}

function applyColors (target, options) {
  let color = options.colors[0]
  Array.from(target.querySelectorAll('.motext-colored mask + g path')).forEach(char => {
    char.setAttribute('fill', color)
    let index = options.colors.indexOf(color) + 1
    if (index >= options.colors.length) {
      index = 0
    }
    color = options.colors[index]
  })
  Array.from(target.querySelectorAll('.motext-solid mask + g path')).forEach(char => {
    char.setAttribute('fill', options.color)
  })
}

function uniqueMaskIds (target) {
  let maskCnt = 1
  target.querySelectorAll('.motext-letterInner').forEach(letter => {
    letter.querySelector('.motext-colored > mask').setAttribute('id', `mo-mask-colored-${maskCnt}`)
    letter.querySelector('.motext-colored > g').setAttribute('mask', `url(#mo-mask-colored-${maskCnt})`)

    letter.querySelector('.motext-solid > mask').setAttribute('id', `mo-mask-solid-${maskCnt}`)
    letter.querySelector('.motext-solid > g').setAttribute('mask', `url(#mo-mask-solid-${maskCnt})`)
    maskCnt++
  })
}

function getFontSize (target) {
  let fontSize = window.getComputedStyle(target, null).getPropertyValue('font-size')
  fontSize = parseFloat(fontSize)
  return fontSize
}

function applyFontSize (target, fontSize) {
  target.fontSize = fontSize
  const BASE_SVG_FONT_SIZE = 55
  const scale = fontSize / BASE_SVG_FONT_SIZE
  Array.from(target.querySelectorAll('.motext-letter')).forEach(letter => {
    const width = letter.getAttribute('data-base-width')
    const height = letter.getAttribute('data-base-height')
    letter.setAttribute('width', width * scale + 'px')
    letter.setAttribute('height', height * scale + 'px')
  })
}

function createTimeline (target, options) {
  const colored = target.querySelectorAll('.motext-colored path, .motext-colored polyline')
  const tl = gsap.timeline()
  tl.to(colored, {
    duration: options.strokeDuration,
    ease: options.strokeEase,
    strokeDashoffset: 0,
    stagger: {
      each: options.staggerAmount,
      ease: options.staggerEase,
      onStart: function () {
        revealCharacter.call(this, options)
      }
    }
  })

  const solid = target.querySelectorAll('.motext-solid path, .motext-solid polyline')
  tl.to(solid, {
    duration: options.strokeDuration,
    ease: options.strokeEase,
    strokeDashoffset: 0,
    stagger: {
      each: options.staggerAmount,
      ease: options.staggerEase
    }
  }, options.offsetDuration)
  tl.pause()
  return tl
}

function revealCharacter (options) {
  const target = this.targets()[0].closest('.motext-letter')
  if (!target.getAttribute('data-revealed')) {
    const revealParams = {
      ease: options.revealEase,
      duration: options.revealDuration
    }
    revealParams[options.revealProperty] = options.revealAmount
    gsap.from(target, revealParams)
    target.setAttribute('data-revealed', true)
  }
}

function openSVG ({ width, height, offset, options, character }) {
  let className = 'motext-letter'
  if (offset) {
    className += ` motext-letter--${offset}`
  }
  if (character) {
    className += ` motext-letter--${character}`
  }
  if (UPPERCASE.includes(character)) {
    className += ' motext-letter--uppercase'
  } else if (LOWERCASE.includes(character)) {
    className += ' motext-letter--lowercase'
  }

  className += ` motext-letter--${cnt}`
  cnt++

  return `<svg class="${className}" data-base-width="${width}" data-base-height="${height}" width="${width}px" height="${height}px" viewBox="0 0 ${width} ${height}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g class="motext-letterInner" fill="none" transform="translate(0,0)">`
}

function getElementCollection (el) {
  if (typeof el === 'string') {
    el = document.querySelectorAll(el)
    return Array.from(el)
  } else if (isNodeList(el)) {
    return Array.from(el)
  } else if (isNode(el) || isElement(el)) {
    return [el]
  } else {
    return []
  }
}

function isNode (el) {
// ref: https://stackoverflow.com/a/384380/918060
  return (
    typeof Node === 'object' ? el instanceof Node
      : el && typeof el === 'object' && typeof el.nodeType === 'number' && typeof el.nodeName === 'string'
  )
}

function isElement (el) {
  return (
    typeof HTMLElement === 'object' ? el instanceof HTMLElement
      : el && typeof el === 'object' && el !== null && el.nodeType === 1 && typeof el.nodeName === 'string'
  )
}

function isNodeList (el) {
// ref: https://stackoverflow.com/a/36857902/918060
return NodeList.prototype.isPrototypeOf(el) // eslint-disable-line
}

function addStyles () {
  const style = document.createElement('style')
  document.head.prepend(style)
  style.textContent = `
  .motext {
    display: inline-block;
  }

  .motext-word {
    white-space: nowrap;
    display: inline-block;
    vertical-align: bottom;
    margin-right: 0.4em;
    margin-bottom: 0.4em;
  }

  .motext-word:last-child {
    margin-right: 0;
  }

  .motext-letter {
    margin-right: -0.08em;
  }

  .motext-letter--ascend {
    vertical-align: top;
  }

  .motext-letter--descend {
    margin-bottom: -0.19em;
  }

  .motext-font {
    position: absolute;
    top: -9999px;
    left: -9999px;
    width: 0;
    height: 0;
    overflow: hidden;
    visibility: hidden;
  }

  .motext-letter--T.motext-letter--uppercase + .motext-letter--o,
  .motext-letter--W.motext-letter--uppercase + .motext-letter--e,
  .motext-letter--W.motext-letter--uppercase + .motext-letter--o {
    margin-left: -0.15em;
  }
`
}

export default {
  loadFont,
  init
}
