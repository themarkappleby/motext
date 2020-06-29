(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = global || self, global.motext = factory());
}(this, (function () { 'use strict';

  /* global gsap fetch Node HTMLElement, NodeList */

  const DEFAULT_OPTIONS = {
    color: '#000000',
    colors: ['#0dafb7', '#eabc36', '#e154ed', '#62d628'],
    revealProperty: 'y',
    revealAmount: -6,
    revealDuration: 0.8,
    revealEase: 'elastic',
    strokeWidth: 8,
    strokeLinecap: 'square',
    strokeLinejoin: 'bevel',
    strokeDuration: 1,
    strokeEase: 'slow',
    offsetDuration: 0.15,
    staggerAmount: 0.1,
    staggerEase: 'none'
  };

  const SYMBOL_MAP = {
    '!': 'exclamation-mark',
    '?': 'question-mark',
    '.': 'period',
    ',': 'comma',
    '"': 'double-quote',
    '\'': 'apostrophe'
  };

  const DESCENDERS = ['Q', 'g', 'j', 'p', 'q', 'y', ','];
  const ASCENDERS = ['"', '\''];
  const instances = [];
  let prepped = false;
  let fetchPromise = null;

  function loadFont (path) {
    if (fetchPromise) {
      return fetchPromise
    } else {
      fetchPromise = fetch(path)
        .then(response => response.text())
        .then(text => {
          const fontWrapper = document.createElement('div');
          fontWrapper.innerHTML = text;
          fontWrapper.setAttribute('class', 'motext-font');
          document.body.appendChild(fontWrapper);
          addStyles();
        })
        .catch(err => {
          console.error(err);
        });
      return fetchPromise
    }
  }

  function init (el, options = {}) { // eslint-disable-line no-unused-vars
    options = { ...DEFAULT_OPTIONS, ...options };
    const timelines = [];
    const collection = getElementCollection(el);
    collection.forEach(target => {
      if (!prepped) {
        prepSVG(options);
      }
      target.setAttribute('aria-label', target.textContent);
      insertHTML(target, options);
      timelines.push(createTimeline(target, options));
    });
    const instance = {
      el,
      collection,
      options,
      timelines,
      play: function () {
        this.timelines.forEach(tl => {
          tl.play();
        });
      }
    };
    instances.push(instance);
    return instance
  }

  window.addEventListener('resize', e => {
    instances.forEach(instance => {
      instance.collection.forEach(target => {
        const fontSize = getFontSize(target);
        if (fontSize !== target.fontSize) {
          applyFontSize(target, fontSize);
        }
      });
    });
  });

  function prepSVG (options) {
    const font = document.getElementById('motext');
    prepFontStyles(font);
    layerCharacters(font, options);
    prepped = true;
  }

  function prepFontStyles (font, options) {
    const STROKE_LENGTH_BUFFER = 8;
    Array.from(font.children).forEach(char => {
      char.removeAttribute('transform');
      char.removeAttribute('opacity');
      char.removeAttribute('stroke-linecap');
      char.removeAttribute('stroke-linejoin');
      char.removeAttribute('stroke-width');
      char.setAttribute('class', 'motext-colored');

      const strokes = Array.from(char.children);
      strokes.forEach(stroke => {
        const length = stroke.getTotalLength() + STROKE_LENGTH_BUFFER;
        stroke.style.strokeDasharray = length;
        stroke.style.strokeDashoffset = length;
      });
    });
  }

  function layerCharacters (font, options) {
    Array.from(font.children).forEach(char => {
      const charLayer = char.cloneNode(true);
      charLayer.setAttribute('class', 'motext-solid');
      charLayer.setAttribute('id', char.id + 'l');
      charLayer.setAttribute('stroke', options.color);
      font.appendChild(charLayer);
    });
  }

  function insertHTML (target, options) {
    let html = '<span class="motext"><span class="motext-word">';
    target.textContent.trim().split('').forEach(char => {
      if (char === ' ') {
        html += '</span><span class="motext-word">';
      } else {
        const symbol = SYMBOL_MAP[char];
        let selector = 'mo-' + char;
        if (symbol) selector = 'mo-' + symbol;
        const svgChar = document.getElementById(selector);
        const svgLayer = document.getElementById(selector + 'l');
        if (svgChar && svgLayer) {
          const size = svgChar.getBBox();
          let offset = '';
          if (DESCENDERS.includes(char)) {
            offset = 'descend';
          } else if (ASCENDERS.includes(char)) {
            offset = 'ascend';
          }
          html += openSVG(size.width + 10, size.height + 10, offset, options);
          html += svgChar.outerHTML;
          html += svgLayer.outerHTML;
          html += '</g></svg>';
        } else {
          console.warn(`motext.js does not support the character "${char}". This character has been omitted.`);
        }
      }
    });
    html += '</span></span>';
    target.innerHTML = html;
    applyColors(target, options);
    const fontSize = getFontSize(target);
    applyFontSize(target, fontSize);
  }

  function applyColors (target, options) {
    let color = options.colors[0];
    Array.from(target.querySelectorAll('.motext-colored')).forEach(char => {
      char.setAttribute('stroke', color);
      let index = options.colors.indexOf(color) + 1;
      if (index >= options.colors.length) {
        index = 0;
      }
      color = options.colors[index];
    });
    Array.from(target.querySelectorAll('.motext-solid')).forEach(char => {
      char.setAttribute('stroke', options.color);
    });
  }

  function getFontSize (target) {
    let fontSize = window.getComputedStyle(target, null).getPropertyValue('font-size');
    fontSize = parseFloat(fontSize);
    return fontSize
  }

  function applyFontSize (target, fontSize) {
    target.fontSize = fontSize;
    const BASE_SVG_FONT_SIZE = 55;
    const scale = fontSize / BASE_SVG_FONT_SIZE;
    Array.from(target.querySelectorAll('.motext-letter')).forEach(letter => {
      const width = letter.getAttribute('data-base-width');
      const height = letter.getAttribute('data-base-height');
      letter.setAttribute('width', width * scale + 'px');
      letter.setAttribute('height', height * scale + 'px');
    });
  }

  function createTimeline (target, options) {
    const colored = target.querySelectorAll('.motext-colored path, .motext-colored polyline');
    const tl = gsap.timeline();
    tl.to(colored, {
      duration: options.strokeDuration,
      ease: options.strokeEase,
      strokeDashoffset: 0,
      stagger: {
        each: options.staggerAmount,
        ease: options.staggerEase,
        onStart: function () {
          revealCharacter.call(this, options);
        }
      }
    });
    const solid = target.querySelectorAll('.motext-solid path, .motext-solid polyline');
    tl.to(solid, {
      duration: options.strokeDuration,
      ease: options.strokeEase,
      strokeDashoffset: 0,
      stagger: {
        each: options.staggerAmount,
        ease: options.staggerEase
      }
    }, options.offsetDuration);
    tl.pause();
    return tl
  }

  function revealCharacter (options) {
    const target = this.targets()[0].closest('.motext-letter');
    if (!target.getAttribute('data-revealed')) {
      const revealParams = {
        ease: options.revealEase,
        duration: options.revealDuration
      };
      revealParams[options.revealProperty] = options.revealAmount;
      gsap.from(target, revealParams);
      target.setAttribute('data-revealed', true);
    }
  }

  function openSVG (width, height, offset, options) {
    let className = 'motext-letter';
    if (offset) {
      className += ` motext-letter--${offset}`;
    }
    return `<svg class="${className}" data-base-width="${width}" data-base-height="${height}" width="${width}px" height="${height}px" viewBox="0 0 ${width} ${height}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <g class="motext-letterInner" stroke-linecap="${options.strokeLinecap}" stroke-linejoin="${options.strokeLinejoin}" fill="none" transform="translate(${options.strokeWidth / 2}, ${options.strokeWidth / 2})" stroke-width="${options.strokeWidth}">`
  }

  function getElementCollection (el) {
    if (typeof el === 'string') {
      el = document.querySelectorAll(el);
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
    const style = document.createElement('style');
    document.head.prepend(style);
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

  .motext-letter {
    margin-right: 0.04em;
  }

  .motext-letter--descend {
    margin-bottom: -0.22em;
  }

  .motext-letter--ascend {
    vertical-align: top;
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
`;
  }

  var motext = {
    loadFont,
    init
  };

  return motext;

})));
