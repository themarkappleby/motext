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

document.querySelector('#text').addEventListener('change', e => {
  document.getElementById('target').innerHTML = e.target.value
  play()
})

Array.from(document.querySelectorAll('.controls input, .controls select')).forEach(input => {
  input.addEventListener('change', e => {
    const id = e.target.id
    const val = e.target.value
    options[id] = val
    play()
  })
})

function play () {
  document.getElementById('target').innerHTML = document.querySelector('#text').value
  motext('#target', options)[0].play()
}
