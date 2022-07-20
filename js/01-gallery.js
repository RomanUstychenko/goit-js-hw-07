import { galleryItems } from './gallery-items.js';
// Change code below this line
const creatLi = galleryItems
  .map((galleryItem) =>`<a class="gallery__link" href="${galleryItem.original}">
    <img
      class="gallery__image"
      src="${galleryItem.preview}"
      data-source="${galleryItem.original}"
      alt="${galleryItem.description}"
    />
  </a>`)
  .join("");
const gallery = document.querySelector(".gallery");
gallery.classList.add('gallery__item')
gallery.insertAdjacentHTML("afterbegin", creatLi); 

function clic (e) {
  console.log(e.target)
}
gallery.addEventListener('click', clic);

gallery.addEventListener("click", openModal);

function openModal (el) {
  el.preventDefault ()
  const instance = basicLightbox.create(`
  <img src=${el.target.src} width="800" height="600">
`)
onShow: () => window.addEventListener ()
instance.show()
function esc (e) {
  if (e.code === 'Escape')
  {instance.close()}
}
}
