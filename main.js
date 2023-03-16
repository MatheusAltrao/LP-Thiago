const menu = document.querySelector('.menu')
const close = document.querySelector('.close')
const list = document.querySelector('.list')

menu.addEventListener('click', () => {
  list.classList.add('active')
})


close.addEventListener('click', () => {
  list.classList.remove('active')
})



