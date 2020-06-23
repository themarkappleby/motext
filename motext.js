/* global gsap fetch */

const DEFAULT_OPTIONS = {
  color: '#000000',
  colors: ['#0dafb7', '#eabc36', '#e154ed', '#62d628'],
  revealProperty: 'y',
  revealAmount: -6,
  revealDuration: 0.8,
  revealEase: 'elastic',
  strokeDuration: 1,
  strokeEase: 'slow',
  offsetDuration: 0.15,
  staggerAmount: 0.03,
  staggerEase: 'none'
}

function motext (selector, cb, options = {}) { // eslint-disable-line no-unused-vars
  options = { ...DEFAULT_OPTIONS, ...options }
  const target = document.querySelector(selector)
  loadSVG('/motext.svg', () => {
    prepSVG(options)
    insertHTML(target)
    cb(createTimeline(target, options))
  })
}

function loadSVG (path, cb) {
  fetch(path)
    .then(response => response.text())
    .then(text => {
      const fontWrapper = document.createElement('div')
      fontWrapper.innerHTML = text
      fontWrapper.setAttribute('class', 'motext-font')
      document.body.appendChild(fontWrapper)
      cb()
    })
    .catch(err => {
      console.log(err)
    })
}

function prepSVG (options) {
  var font = document.querySelector('.motext-font #font')
  prepFontStyles(font, options)
  layerCharacters(font, options)
}

function prepFontStyles (font, options) {
  Array.from(font.children).forEach(char => {
    char.removeAttribute('transform')
    char.setAttribute('class', 'motext-colored')
    var strokes = Array.from(char.children)
    strokes.forEach(stroke => {
      var length = stroke.getTotalLength() + 1
      stroke.style.strokeDasharray = length
      stroke.style.strokeDashoffset = length
    })
  })
}

function layerCharacters (font, options) {
  Array.from(font.children).forEach(char => {
    const charLayer = char.cloneNode(true)
    charLayer.setAttribute('class', 'motext-solid')
    charLayer.setAttribute('id', char.id + 'l')
    charLayer.setAttribute('stroke', options.color)
    font.appendChild(charLayer)
  })
}

function insertHTML (target) {
  let html = '<span class="motext"><span class="motext-word">'
  target.textContent.split('').forEach(char => {
    if (char === ' ') {
      html += '</span><span class="motext-word">'
    } else {
      const svgChar = document.querySelector('#' + char)
      const svgLayer = document.querySelector('#' + char + 'l')
      const size = svgChar.getBBox()
      html += openSVG(size.width + 10, size.height + 10)
      html += svgChar.outerHTML
      html += svgLayer.outerHTML
      html += '</g></g></svg>'
    }
  })
  html += '</span></span>'
  target.innerHTML = html
}

function createTimeline (target, options) {
  let color = options.colors[0]
  Array.from(target.querySelectorAll('.motext-colored')).forEach(char => {
    char.setAttribute('stroke', color)
    let index = options.colors.indexOf(color) + 1
    if (index >= options.colors.length) {
      index = 0
    }
    color = options.colors[index]
  })
  var tl = gsap.timeline()
  tl.to('.motext-colored path, .motext-colored polyline', {
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
  tl.to('.motext-solid path, .motext-solid polyline', {
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
  const target = this.targets()[0].parentNode.parentNode.parentNode.parentNode
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

function openSVG (width, height) {
  return `<svg class="motext-letter" width="${width}px" height="${height}px" viewBox="0 0 ${width} ${height}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" transform="translate(5, 5)">
        <g id="font" stroke-width="10">`
}
