import { galleryItems } from './gallery-items.js';
// Change code below this line


const gallery = document.querySelector('.gallery');

gallery.insertAdjacentHTML('afterbegin', createMarkup(galleryItems));
gallery.addEventListener('click', handlerClick);

function createMarkup(arr) {
  return arr.map(({ preview, original, description }) => `
    <li class="gallery__item">
      <a class="gallery__link" href="${original}">
        <img
          class="gallery__image"
          src="${preview}"
          data-source="${original}"
          alt="${description}"
        />
      </a>
    </li>
`).join("");
};

function handlerClick(e) {
  e.preventDefault()

  if (e.target === e.currentTarget) {
    return;
  }

  const currentItem = e.target.closest('.gallery__image');
  const url = currentItem.dataset.source;
  const image = galleryItems.find(({ original }) => original === url);
  console.log(image);

  const instance = basicLightbox.create(`
    <img src="${image.original}" width="800" height="600">
`)

instance.show()
}



// console.log(basicLightbox);
