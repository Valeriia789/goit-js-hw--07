const refs = {
  renderBtn: document.querySelector('[data-action="render"]'),
  destroyBtn: document.querySelector('[data-action="destroy"]'),
  boxesContainer: document.querySelector('#boxes')
}

refs.renderBtn.addEventListener('click', getAmount)
refs.destroyBtn.addEventListener('click', destroyBoxes)

function getAmount () {
  let amount = document.querySelector('#controls input').value
  createBoxes(amount)
}

function createBoxes (amount) {
  let basicSize = 30
  let fragment = document.createDocumentFragment()

  for (let i = 0; i < boxesAmountInput; i++) {
    let size = basicSize + i * 10
    let boxEl = document.createElement('div')
    boxEl.classList.add('box-element')
    boxEl.style.backgroundColor = `rgba( ${random()}, ${random()}, ${random()})`
    boxEl.style.width = `${size}px`
    boxEl.style.height = `${size}px`
    fragment.appendChild(boxEl)
  }
  refs.boxesContainer.appendChild(fragment)
}

function destroyBoxes () {
  refs.boxesContainer.innerHTML = ''
}

function random () {
  return Math.floor(Math.random() * 256)
}
