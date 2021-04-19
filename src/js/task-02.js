const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Лук',
  'Оливки',
  'Приправы'
]

const ingredientsContainer = document.querySelector('#ingredients')
ingredientsContainer.style.backgroundColor = 'orange'
ingredientsContainer.style.maxWidth = '250px'

const ingredientsList = ingredients.map(ingredient => {
  const listEl = document.createElement('li')
  const listElText = document.createElement('p')
  listEl.appendChild(listElText)

  listElText.style.backgroundColor = 'yellow'
  listElText.style.fontSize = 'larger'
  listElText.textContent = ingredient

  return listEl
})

ingredientsContainer.append(...ingredientsList)
