'use strict'
const buttonL = document.querySelector('.buttonL')
const buttonN = document.querySelector('.buttonN')
const buttonC = document.querySelector('.buttonC')
let submit = document.querySelector('#form')
let audio = document.getElementById('audio');
let audioU = document.getElementById('audioU');
let audioL = document.getElementById('audioL');
let audioS = document.getElementById('audioS');
let audioSV = document.getElementById('audioSV');
let body = document.querySelector('section')

body.addEventListener("click", function (e) {
  let body = document.querySelector('body')
  let bullet = document.createElement('span')
  let x = e.offsetX;
  let y = e.offsetY;
  bullet.style.left = x + 'px'
  bullet.style.top = y + 'px'
  body.appendChild(bullet)
  audio.play()

  buttonL.addEventListener('click', function () {
    bullet.style.background = "url('./image/heart.png')"
    bullet.style.width = '60px'
    bullet.style.height = '60px'
  });

  buttonL.addEventListener('mouseover', function () {
    audioL.play()
    buttonL.removeEventListener('mouseover', function () {
      audioL.play()
    })
  })

  buttonL.addEventListener('mouseleave', function () {
    audioL.pause();
    audioL.currentTime = 0;
  })

  buttonN.addEventListener('click', function () {
    bullet.style.background = ""
    audioS.play()
  })
  buttonN.addEventListener('mouseover', function () {
    audioS.play()
    buttonN.removeEventListener('mouseover', function () {
      audioS.play()
    })
  })
  buttonN.addEventListener('mouseleave', function () {
    audioS.pause();
    audioS.currentTime = 0;
  })

  buttonC.addEventListener('click', function () {
    bullet.remove()
  })
});

buttonC.addEventListener('mouseover', function () {
  audioU.play()
  buttonC.removeEventListener('mouseover', function () {
    audioU.play()
  })
})

buttonC.addEventListener('mouseleave', function () {
  audioU.pause();
  audioU.currentTime = 0;
})

submit.addEventListener('submit', function (e) {
  e.preventDefault()
  let body = document.querySelector('#section')
  let input = document.querySelector('#input')
  body.src = input.value
  input.value = ''
  audioSV.play()
})
