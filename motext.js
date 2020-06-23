/* global gsap */

const DEFAULT_OPTIONS = {
  colors: ['#0dafb7', '#eabc36', '#e154ed', '#62d628'],
  dropAmount: 10,
  dropDuration: 0.3,
  dropEase: 'power2.out',
  strokeDuration: 0.4,
  offsetDuration: 0.08,
  staggerAmount: 0.05
}

function motext (selector, options = {}) { // eslint-disable-line no-unused-vars
  options = { ...DEFAULT_OPTIONS, ...options }
  const target = document.querySelector(selector)
  init()
  process(target)
  return createTimeline(target, options)
}

function init () {
  var font = document.querySelector('#font')
  prepFontStyles(font)
  layerCharacters(font)
}
function prepFontStyles (font) {
  Array.from(font.children).forEach(char => {
    char.removeAttribute('transform')
    char.setAttribute('class', 'base')
    var strokes = Array.from(char.children)
    strokes.forEach(stroke => {
      var length = stroke.getTotalLength() + 1
      stroke.style.strokeDasharray = length
      stroke.style.strokeDashoffset = length
    })
  })
}
function layerCharacters (font) {
  Array.from(font.children).forEach(char => {
    const charLayer = char.cloneNode(true)
    charLayer.setAttribute('class', 'layer')
    charLayer.setAttribute('id', char.id + 'l')
    charLayer.setAttribute('stroke', 'black')
    font.appendChild(charLayer)
  })
}

function process (target) {
  let html = '<span class="word">'
  target.textContent.split('').forEach(char => {
    if (char === ' ') {
      html += '</span><span class="word">'
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
  html += '</span>'
  target.innerHTML = html
}

function createTimeline (target, options) {
  let color = options.colors[0]
  Array.from(target.querySelectorAll('.base')).forEach(char => {
    char.setAttribute('stroke', color)
    let index = options.colors.indexOf(color) + 1
    if (index >= options.colors.length) {
      index = 0
    }
    color = options.colors[index]
  })

  var tl = gsap.timeline()
  tl.to('.base path, .base polyline', {
    duration: options.strokeDuration,
    strokeDashoffset: 0,
    stagger: {
      each: options.staggerAmount,
      onStart: function () {
        const target = this.targets()[0].parentNode.parentNode.parentNode.parentNode
        if (!gsap.isTweening(target)) {
          gsap.fromTo(target, {
            y: options.dropAmount * -1
          }, {
            y: 0,
            ease: options.dropEase,
            duration: options.dropDuration
          })
        }
      }
    }
  })
  tl.to('.layer path, .layer polyline', {
    duration: options.strokeDuration,
    strokeDashoffset: 0,
    stagger: {
      each: options.staggerAmount
    }
  }, options.offsetDuration)
  tl.pause()
  return tl
}

function openSVG (width, height) {
  return `<svg class="letter" width="${width}px" height="${height}px" viewBox="0 0 ${width} ${height}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" transform="translate(5, 5)">
        <g id="font" stroke-width="10">`
}
