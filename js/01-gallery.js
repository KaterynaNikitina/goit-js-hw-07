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
  const instance = basicLightbox.create(`
        <div class="modal">
        <img src="${evt.target.dataset.source}"
        />
    </div>
`);

  instance.show();
  window.addEventListener("keydown", onEscKeyPress);

  function onEscKeyPress(evt) {
    if (evt.code !== "Escape") {
      return;
    }
    instance.close();
    window.removeEventListener("keydown", onEscKeyPress);
  }
}



