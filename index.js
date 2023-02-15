'use strict'
const buttonLove = document.querySelector('.buttonLove')
const buttonHate = document.querySelector('.buttonHate')
const buttonProofs = document.querySelector('.buttonProofs')
const submit = document.querySelector('#form')
const audio1 = document.getElementById('audio-1');
const audio2 = document.getElementById('audio-2');
const audio3 = document.getElementById('audio-3');
const audio4 = document.getElementById('audio-4');
const audio5 = document.getElementById('audio-5');
const body = document.querySelector('section')

body.addEventListener("click", function (e) {
  let body = document.querySelector('body')
  let bullet = document.createElement('span')
  let x = e.offsetX;
  let y = e.offsetY;
  bullet.style.left = x + 'px'
  bullet.style.top = y + 'px'
  body.appendChild(bullet)
  audio1.play()

  buttonLove.addEventListener('click', function () {
    bullet.style.background = "url('./image/heart.png')"
    bullet.style.width = '60px'
    bullet.style.height = '60px'
  });

  buttonLove.addEventListener('mouseover', function () {
    audio2.play()
    buttonLove.removeEventListener('mouseover', function () {
      audio2.play()
    })
  })

  buttonLove.addEventListener('mouseleave', function () {
    audio2.pause();
    audio2.currentTime = 0;
  })

  buttonHate.addEventListener('click', function () {
    bullet.style.background = ""
    audio3.play()
  })
  buttonHate.addEventListener('mouseover', function () {
    audio3.play()
    buttonHate.removeEventListener('mouseover', function () {
      audio3.play()
    })
  })
  buttonHate.addEventListener('mouseleave', function () {
    audio3.pause();
    audio3.currentTime = 0;
  })

  buttonProofs.addEventListener('click', function () {
    bullet.remove()
  })
});

buttonProofs.addEventListener('mouseover', function () {
  audio5.play()
  buttonProofs.removeEventListener('mouseover', function () {
    audio5.play()
  })
})

buttonProofs.addEventListener('mouseleave', function () {
  audio5.pause();
  audio5.currentTime = 0;
})

submit.addEventListener('submit', function (e) {
  e.preventDefault()
  let body = document.querySelector('#section')
  let input = document.querySelector('#input')
  body.src = input.value
  input.value = ''
  audio4.play()
})
