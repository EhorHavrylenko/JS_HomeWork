/*
В HTML есть пустой список ul#ingredients.
В JS есть массив строк.

Напиши скрипт, который для каждого элемента массива ingredients создаст отдельный li, 
после чего вставит все li за одну операцию в список ul.ingredients. 
Для создания DOM-узлов используй document.createElement().
*/

const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
  ];


const ingredientsEl = document.getElementById('ingredients')

const ingsCreateList = ingredients.map((element) => {
    const li = document.createElement('li')
    li.textContent = element
    return li
})

ingredientsEl.append(...ingsCreateList)
console.log(ingredientsEl); 