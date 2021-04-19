const categories = document.querySelector('#categories')
console.log(`В списке ${categories.children.length} категории.`)

const items = document.querySelectorAll('.item')

items.forEach(item => {
  const title = item.firstElementChild.textContent
  const elements = item.lastElementChild.children.length

  console.log(`
  Категория: ${title} 
  Количество элементов: ${elements}
  `)
})
