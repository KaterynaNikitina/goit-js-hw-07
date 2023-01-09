import { galleryItems } from "./gallery-items.js";

console.log(galleryItems);

const galleryContainer = document.querySelector(".gallery");
const galleryMarkup = createGalleryMarkup(galleryItems);

function createGalleryMarkup(gallery) {
  return gallery
    .map(({ preview, original, description }) => {
      return `
        <div class="gallery__item">
        <a class="gallery__link" href="large-image.jpg">
            <img
                class="gallery__image"
                src="${preview}"
                data-source="${original}"
                alt="${description}"
            />
        </a>
        </div>`;
    })
    .join("");
}

galleryContainer.insertAdjacentHTML("beforeend", galleryMarkup);
galleryContainer.addEventListener("click", onGalleryItemsClick);

function onGalleryItemsClick(evt) {
  evt.preventDefault();
  if (evt.target.nodeName !== "IMG") {
    return;
  } 
  onModal(evt);
}

function onModal(evt) {
  const instance = basicLightbox.create(
    `<img src="${evt.target.dtaset.source}"/>`,
    {
      onShow: (instance) => {
        galleryContainer.addEventListener("keydown", onEscKeyPress);
      },
      onClose: (instance) => {
        galleryContainer.removeEventListener("keydown", onEscKeyPress);
      },
    },
    instance.show()
  );
  

  function onEscKeyPress(evt) {
    if (evt.code ==="Escape") {
    } instance.close();
    
  }
}

