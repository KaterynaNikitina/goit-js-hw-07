import { galleryItems } from "./gallery-items.js";

const galleryContainer = document.querySelector(".gallery");
const galleryMarkup = createGalleryMarkup(galleryItems);

function createGalleryMarkup(gallery) {
  return gallery
    .map(({ preview, original, description }) => {
      return `
      <a class="gallery__item" href="${original}">
      <img class="gallery__image" 
           src="${preview}" 
           alt="${description}" 
        />
    </a>`;
    })
    .join("");
}

galleryContainer.insertAdjacentHTML("beforeend", galleryMarkup);
// galleryContainer.addEventListener("click", onGalleryItemsClick);

// function onGalleryItemsClick(evt) {
//   evt.preventDefault();
//   if (evt.target.nodeName !== "IMG") {
//     return;
//   }
  const gallery = new SimpleLightbox(".gallery a", {
    captions: true,
    captionsData: "alt",
    captionDelay: 250,
  });

