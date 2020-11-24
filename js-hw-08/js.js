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

const imageGallery = images.map(image => createGalleryElement(image))

const galleryEl = document.querySelector('.js-gallery')
galleryEl.append(...imageGallery)
 
const openModalRef = document.querySelector('.lightbox');
const modalImage = document.querySelector('.lightbox__image')

galleryEl.addEventListener('click', clickInImage);

function clickInImage(event){
    event.preventDefault()

    if(event.target.nodeName === 'IMG'){
        openModalRef.classList.add('is-open')
        (function openModalImage(){
            modalImage.src = event.target.dataset.source;
        }())
    }
}

const closerModalBtn = document.querySelector('button[data-action="close-lightbox"]').addEventListener('click', closeModalWindow);
const lightboxOverlay = document.querySelector('.lightbox__overlay')

function closeModalWindow(){
    openModalRef.classList.remove('is-open');
};



