import { galleryItems } from './gallery-items.js';
// Change code below this line
const creatList = galleryItems
  .map((galleryItem) =>
  `<a class="gallery__item" href="${galleryItem.original}">
  <img 
  class="gallery__image" 
  src="${galleryItem.preview}" 
  alt="${galleryItem.description}" />
</a>`)
  .join("");
  const gallery = document.querySelector(".gallery");
gallery.classList.add('gallery__item')
gallery.insertAdjacentHTML("afterbegin", creatList); 


