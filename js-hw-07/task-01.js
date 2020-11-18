/*
Напиши скрипт, который выполнит следующие операции:
Посчитает и выведет в консоль количество категорий в ul#categories, 
то есть элементов li.item. Получится 'В списке 3 категории.'.

Для каждого элемента li.item в списке ul#categories, 
найдет и выведет в консоль текст заголовка элемента (тега h2) 
и количество элементов в категории (всех вложенных в него элементов li).

Например для первой категории получится:
Категория: Животные
Количество элементов: 4
*/


const categoriesRef = document.querySelector('#categories').children;

const categoriesLength = categoriesRef.length;
console.log(`В списке ${categoriesLength} категории.`);

const itemRef = document.querySelectorAll('.item')
itemRef.forEach((el) => {
    const titleRef = el.querySelector('h2').textContent
    const listChildRef = el.querySelector('ul').children.length
    console.log(`Категория: ${titleRef} \nКоличество элементов: ${listChildRef}`)
})






 