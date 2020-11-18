/*
Напиши скрипт, который бы при потере фокуса на инпуте, 
проверял его содержимое на правильное количество символов.

<input
  type="text"
  id="validation-input"
  data-length="6"
  placeholder="Введи 6 символов"
/>

- Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
- Если введено подходящее количество, то border инпута становится зеленым, 
если неправильное - красным.

*/ 

// VERSION 1

const inputEl = document.querySelector('#validation-input');
const rightLengthInput = inputEl.getAttribute('data-length');

inputEl.addEventListener('blur', checkRightInput)

function checkRightInput({target}){
    Number(target.value.length) ===  Number(rightLengthInput) 
    ? (inputEl.classList.add('valid'), inputEl.classList.remove('invalid'))
    : (inputEl.classList.add('invalid'), inputEl.classList.remove('valid'))  
}

// VERSION 2 (DIMA)

// const inputRef = document.querySelector('#validation-input');
// const dataLength = +inputRef.dataset.length; // приводим строку к числу за счет плюса в начале

// inputRef.addEventListener('blur', handleBlurInput)

// function handleBlurInput({currentTarget}){
//    const currentValueLength = currentTarget.value.length;
   
//    currentValueLength === dataLength 
//    ? (inputRef.classList.add('valid'), inputRef.classList.remove('invalid'))
//    : (inputRef.classList.add('invalid'), inputRef.classList.remove('valid'))
// }


