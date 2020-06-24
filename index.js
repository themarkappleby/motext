/* global motext */

const options = {
  color: '#000000',
  colors: ['#0dafb7', '#eabc36', '#e154ed', '#62d628'],
  revealProperty: 'y',
  revealAmount: -6,
  revealDuration: 0.8,
  revealEase: 'elastic',
  strokeWidth: 8,
  strokeDuration: 1,
  strokeEase: 'slow',
  offsetDuration: 0.15,
  staggerAmount: 0.1,
  staggerEase: 'none'
}

window.addEventListener('load', () => {
  document.getElementById('target').style.opacity = 1
  play()
})

Array.from(document.querySelectorAll('.controls input, .controls select')).forEach(input => {
  input.addEventListener('change', e => {
    const id = e.target.id
    const val = e.target.value
    if (id === 'text') {
      document.getElementById('target').innerHTML = e.target.value
    } else if (id === 'color1') {
      options.colors[0] = val
    } else if (id === 'color2') {
      options.colors[1] = val
    } else if (id === 'color3') {
      options.colors[2] = val
    } else if (id === 'color4') {
      options.colors[3] = val
    } else {
      options[id] = val
    }
    play()
  })
})

function play () {
  document.getElementById('target').innerHTML = document.querySelector('#text').value
  motext('#target', options)[0].play()
}
