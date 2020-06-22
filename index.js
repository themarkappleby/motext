function init () {
  var font = document.querySelector('#font')
  prepFontStyles(font)
  layerCharacters(font)
}
function prepFontStyles (font) {
  Array.from(font.children).forEach(char => {
    char.removeAttribute('transform')
    // char.setAttribute('transform', 'translate(5, 5)')
    console.dir(char)
    var strokes = Array.from(char.children)
    strokes.forEach(stroke => {
      var length = stroke.getTotalLength()
      stroke.style.strokeDasharray = length
      stroke.style.strokeDashoffset = length
      stroke.style.animationDuration = length / 100 + 's'
    })
  })
}
function layerCharacters (font) {

}
init()

function process (target) {
  let html = '<span class="word">'
  target.textContent.split('').forEach(char => {
    if (char === ' ') {
      html += '</span><span class="word">'
    } else {
      const svgChar = document.querySelector('#' + char)
      const size = svgChar.getBBox()
      html += openSVG(size.width + 10, size.height + 10)
      html += svgChar.outerHTML
      html += '</g></g></svg>'
    }
  })
  html += '</span>'
  target.innerHTML = html
}

function openSVG (width, height) {
  return `<svg class="letter" width="${width}px" height="${height}px" viewBox="0 0 ${width} ${height}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" transform="translate(5, 5)">
        <g id="font" stroke-width="10" stroke="#FF9F9F">`
}
process(document.querySelector('#foo'))
