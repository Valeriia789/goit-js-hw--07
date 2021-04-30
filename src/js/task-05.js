// Напиши скрипт который, при наборе текста в инпуте input#name-input (событие input),
// подставляет его текущее значение в span#name-output.
// Если инпут пустой, в спане должна отображаться строка 'незнакомец'.

const refs = {
  nameInput: document.getElementById('name-input'),
  nameOutput: document.getElementById('name-output')
}

refs.nameInput.addEventListener('input', onInputChange)

function onInputChange (event) {
  if (event.currentTarget.value.length !== 0) {
    refs.nameOutput.textContent = event.currentTarget.value
    refs.nameOutput.classList.add('active-name')
  } else {
    refs.nameOutput.textContent = 'незнакомец'
    refs.nameOutput.classList.remove('active-name')
  }
}
