const refs = {
  counterValue: document.querySelector('#value'),
  decrementBtn: document.querySelector('[data-action="decrement"]'),
  incrementBtn: document.querySelector('[data-action="increment"]')
}

refs.decrementBtn.addEventListener('click', decrement)
refs.incrementBtn.addEventListener('click', increment)

refs.decrementBtn.classList.add('counter-button')
refs.incrementBtn.classList.add('counter-button')

function decrement () {
  refs.counterValue.textContent--
  // refs.counterValue.innerHTML--
}

function increment () {
  refs.counterValue.textContent++
  // refs.counterValue.innerHTML--
}
