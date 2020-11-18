/*
Напиши скрипт который, 
при наборе текста в инпуте input#name-input (событие input), 
подставляет его текущее значение в span#name-output. 
Если инпут пустой, в спане должна отображаться строка 'незнакомец'.

<input type="text" placeholder='Ваше Имя?' id='name-input'>
<h1>Привет, <span id='name-output'>незнакомец</span>!</h1>
*/

// VERSION 1

const nameInputBtn = document.querySelector('#name-input');
const nameOutputEl = document.querySelector('#name-output');

nameInputBtn.addEventListener('input', handleChangeName)

function handleChangeName(event){
    nameOutputEl.textContent =  event.target.value;
    if(!event.target.value){
        nameOutputEl.textContent = 'незнакомец'
    }
}

// VERSION 2 (DIMA)

// const refs = {
//     input: document.querySelector('#name-input'),
//     output: document.querySelector('#name-output'),
// }

// const {input, output} = refs;

// const defaultName = 'незнакомец';

// input.addEventListener('input', changeHandleInput);

// function changeHandleInput({target}){
//    const value = target.value;

//    if(value){
//        output.textContent = value;
//    } else {
//        output.textContent = defaultName;
//    }
// }