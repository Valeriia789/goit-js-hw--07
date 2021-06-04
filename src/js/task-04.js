const refs = {
  counterValue: document.querySelector('#value'),
  decrementBtn: document.querySelector('[data-action="decrement"]'),
  incrementBtn: document.querySelector('[data-action="increment"]')
}

let currentValue = 0

refs.decrementBtn.addEventListener('click', decrement)
refs.incrementBtn.addEventListener('click', increment)

refs.decrementBtn.classList.add('counter-button')
refs.incrementBtn.classList.add('counter-button')

function decrement () {
  currentValue -= 1
  refs.counterValue.textContent = currentValue
  // refs.counterValue.textContent--
  // refs.counterValue.innerHTML--
}

function increment () {
  currentValue += 1
  refs.counterValue.textContent = currentValue
  // refs.counterValue.textContent++
  // refs.counterValue.innerHTML--
}
