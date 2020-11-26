import images  from './gallery-items.js';

const createGalleryElement = image => {
    const li = document.createElement('li');
    li.classList.add('gallery__item')
      
    const a = document.createElement('a')
    a.classList.add('gallery__link')
    a.href = image.preview

    const img = document.createElement('img');
    img.classList.add('gallery__image');
    img.alt = 'Tulips'
    img.src = image.preview;
    img.setAttribute('data-source', image.original);

 
    a.appendChild(img)
    li.appendChild(a)

    return li;
}

const imageGallery = images.map((image, id) => createGalleryElement(image))

const galleryEl = document.querySelector('.js-gallery')
galleryEl.append(...imageGallery)
 
const openModalRef = document.querySelector('.lightbox');
const modalImage = document.querySelector('.lightbox__image')

galleryEl.addEventListener('click', clickInImage);

const closerModalBtn = document.querySelector('button[data-action="close-lightbox"]');
closerModalBtn.addEventListener('click', closeModalWindow);


const overlayEl = document.querySelector('.lightbox__overlay');
overlayEl.addEventListener('click', closeOverlay);

function clickInImage(event){
    event.preventDefault()

    const { dataset, nodeName } = event.target;

    if(nodeName === 'IMG'){
        openModalRef.classList.add('is-open')
        const {source, id} = dataset;
        openModalImage(source)
    }
}

function openModalImage(sourse){
    modalImage.src = sourse;
}

function closeModalWindow(){
    closeModal();
};

function closeOverlay(){
    closeModal(); // закрытие модального окна по клику на овэрлэй
}

window.addEventListener("keydown", closeEsc);

function closeEsc(){
    closeModal(); // закрытие модалього окна по нажатию на клавишу ESC
}

function closeModal(){
    openModalRef.classList.remove('is-open');
    modalImage.src = '';
}