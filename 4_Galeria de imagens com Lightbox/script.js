const galleryItems = document.querySelectorAll(".gallery-item");
const lightBox = document.querySelector(".lightbox");
const lightboxImage = document.querySelector(".lightbox-image");
const lightboxClose = document.querySelector(".lightbox-close");

galleryItems.forEach((item) => {
  item.addEventListener("click", () => {
    const imageUrl = item.querySelector(".gallery-image").getAttribute("data-src");
    lightboxImage.setAttribute("src", imageUrl);
    lightBox.style.display = "flex";
  });
});


lightboxClose.addEventListener("click", () => {
    lightBox.style.display = "none"
})