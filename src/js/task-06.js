// Напиши скрипт, который бы при потере фокуса на инпуте,
// проверял его содержимое на правильное количество символов.
// Сколько символов должно быть в инпуте,
// указывается в его атрибуте data-length.
// Если введено подходящее количество,
// то border инпута становится зеленым, если неправильное - красным.
// Для добавления стилей, используй CSS-классы valid и invalid.

const refs = {
  validationInput: document.getElementById('validation-input'),
  inputLengthNumber: Number(
    document.getElementById('validation-input').getAttribute('data-length')
  ),
  // inputLengthNumber: Number(document.getElementById('validation-input').dataset.length),
}

refs.validationInput.addEventListener('blur', onInputCheck)

function onInputCheck () {
  // console.log(refs.validationInput.value.length)
  // console.log(refs.inputLengthNumber)
  // console.log(refs.validationInput.value.length === refs.inputLengthNumber)

  if (refs.validationInput.value.length === 0) {
    refs.validationInput.classList.remove('invalid')
    refs.validationInput.classList.remove('valid')
  } 
  else if (refs.validationInput.value.length === refs.inputLengthNumber) {
    refs.validationInput.classList.remove('invalid')
    refs.validationInput.classList.add('valid')
  } 
  else if (refs.validationInput.value.length != refs.inputLengthNumber) {
    refs.validationInput.classList.remove('valid')
    refs.validationInput.classList.add('invalid')
  }
}
