/*
Напиши скрипт, который реагирует на изменение значения input#font-size-control 
(событие input) и изменяет инлайн-стиль span#text обновляя свойство font-size. 
В результате при перетаскивании ползунка будет меняться размер текста.

<input id="font-size-control" type="range" />
<br />
<span id="text">Абракадабра!</span>
*/

const fontSizeBtn = document.querySelector('#font-size-control');
const textEl = document.querySelector('#text')
console.log(fontSizeBtn.value);

fontSizeBtn.addEventListener('input', changeFontSize);

function changeFontSize(){
    textEl.style.fontSize = fontSizeBtn.value + 'px';
}
