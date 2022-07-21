import { galleryItems } from './gallery-items.js';
// Change code below this line
const creatList = galleryItems
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
gallery.insertAdjacentHTML("afterbegin", creatList); 

gallery.addEventListener("click", openModal);

function openModal (element) {
  element.preventDefault ()
  const instance = basicLightbox.create(`
  <img src=${element.target.dataset.source} width="800" height="600">`,
{
  onShow: ()=> window.addEventListener('keydown', onEscspeClick), 
  }
  )
instance.show()
function onEscspeClick (e) {
  if (e.code === 'Escape')
  {instance.close()}
}
}
