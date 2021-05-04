// Напиши скрипт, который реагирует на изменение значения input#font-size-control 
// (событие input) и изменяет инлайн-стиль span#text обновляя свойство font-size. 
// В результате при перетаскивании ползунка будет меняться размер текста.


const refs = {
  inputSizeControl: document.getElementById('font-size-control'),
  changingText: document.getElementById('text'),
}

refs.inputSizeControl.addEventListener('input', onInputSizeControler)

function onInputSizeControler() {
  refs.changingText.style.fontSize = refs.inputSizeControl.value + 'px'
}