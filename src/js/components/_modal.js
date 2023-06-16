const modalBtn = document.querySelectorAll('.modal-btn')
const modalOverlay = document.querySelector('.overlay')
const modalCloseBtn = document.querySelectorAll('.modal__close-btn')
const modalForm = document.querySelector('.form-2')
const modalMain = document.querySelector('.modal__main')
const modalThank = document.querySelector('.modal__thank')
const modalBack = document.querySelector('.modal__back')
const form = document.querySelector('.form-1')

function showModal() {
  modalOverlay.classList.add('open')
  document.querySelector('body').style.overflow = 'hidden'
}
function hideModal() {
  modalOverlay.classList.remove('open')
  document.querySelector('body').style.overflow = 'visible'
}

form.addEventListener('submit', (e) => {
  e.preventDefault()
  form.reset()
  showModal()
  modalMain.classList.add('hidden')
  modalThank.classList.add('active')
})

modalBtn.forEach(el => {
  el.addEventListener('click', () => {
    showModal()
  })
})
modalCloseBtn.forEach(el => {
  el.addEventListener('click', () => {
    hideModal()
  })
})
modalOverlay.addEventListener('click', (e) => {
  if(e.target === modalOverlay) {
    hideModal()
  }
})

modalForm.addEventListener('submit', (e) => {
  e.preventDefault()
  modalMain.classList.add('hidden')
  modalThank.classList.add('active')
  modalForm.reset()
  console.log(('sent'))
})

modalBack.addEventListener('click', () => {
  hideModal()
  modalMain.classList.remove('hidden')
  modalThank.classList.remove('active')
  modalForm.reset()
})
