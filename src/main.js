import './style.css'

const buttonContact = document.querySelector('.btn1')
const buttonLinkedIn = document.querySelector('.btn2')
const buttonCV = document.querySelector('.btn3')
let slider = document.getElementById('slider')
let touchStartX = 0
let touchEndX = 0

function moveSlide(direction) {
  slider.style.transform = `translateX(${direction * -100}vw)`
}

function contactar() {
  window.location.href = 'tel:610028822'
}

function irLinkedIn() {
  window.open(
    'https://www.linkedin.com/in/auroraram%C3%ADrezfern%C3%A1ndez',
    '_blank'
  )
}
function downloadPDF() {
  const aDownload = document.createElement('a')
  aDownload.href = 'ARF_cv.pdf'
  aDownload.download = 'ARF_cv.pdf'
  aDownload.setAttribute('target', '_blank')
  document.body.appendChild(aDownload)
  aDownload.click()
  document.body.removeChild(aDownload)
}
buttonContact.addEventListener('click', contactar)
buttonLinkedIn.addEventListener('click', irLinkedIn)
buttonCV.addEventListener('click', downloadPDF)

document.addEventListener('touchstart', function (event) {
  touchStartX = event.touches[0].clientX
})

document.addEventListener('touchend', function (event) {
  touchEndX = event.changedTouches[0].clientX
  if (touchStartX - touchEndX > 50) {
    moveSlide(1)
  } else if (touchEndX - touchStartX > 50) {
    moveSlide(0)
  }
})

function checkScreenSize() {
  const container = document.querySelector('.container')
  const deslice = document.querySelector('.desliza')
  if (!container) return

  if (window.innerWidth >= 845) {
    container.style.width = '100vw'
    container.style.display = 'flex'
    container.style.flexDirection = 'row'
    deslice.style.display = 'none'
  } else {
    container.style.width = '200vw'
    container.style.display = 'flex'
    container.style.flexDirection = 'row'
    deslice.style.display = 'flex'
  }
}

window.addEventListener('resize', checkScreenSize)
document.addEventListener('DOMContentLoaded', checkScreenSize)
