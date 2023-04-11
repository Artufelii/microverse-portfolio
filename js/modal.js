const buttons = document.getElementById('works').querySelectorAll('button')

const openModal = () => {
  document.getElementById('modal').classList.add('open')
}

buttons.forEach((button) => {
  button.addEventListener('click', openModal)
})

const closeModal = () => {
  document.getElementById('modal').classList.remove('open')
}
