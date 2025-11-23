// Collect all gallery images
const galleryImages = Array.from(document.querySelectorAll('.clickable-img'));
const modal = document.getElementById('modal');
const modalImg = document.getElementById('modal-img');
let currentIndex = 0;

// Open modal
function showModal(index) {
  currentIndex = index;
  modalImg.src = galleryImages[index].src;
  modal.classList.add('open');   // fade-in
  document.body.style.overflow = 'hidden'; // prevent background scroll
}

// Close modal
function closeModal() {
  modal.classList.remove('open'); // fade-out
  document.body.style.overflow = ''; // restore scroll
  setTimeout(() => {
    modalImg.src = '';
  }, 300); // match CSS transition duration
}

// Initialize click handlers
galleryImages.forEach((img, idx) => {
  img.addEventListener('click', () => showModal(idx));
});

// Close button
document.getElementById('modal-close').addEventListener('click', closeModal);

// Arrows
function showPrev() {
  currentIndex = (currentIndex === 0) ? galleryImages.length - 1 : currentIndex - 1;
  modalImg.src = galleryImages[currentIndex].src;
}
function showNext() {
  currentIndex = (currentIndex === galleryImages.length - 1) ? 0 : currentIndex + 1;
  modalImg.src = galleryImages[currentIndex].src;
}
document.getElementById('modal-left').addEventListener('click', showPrev);
document.getElementById('modal-right').addEventListener('click', showNext);

// Keyboard navigation
document.addEventListener('keydown', (event) => {
  if (modal.classList.contains('open')) {
    if (event.key === 'ArrowLeft') showPrev();
    if (event.key === 'ArrowRight') showNext();
    if (event.key === 'Escape') closeModal();
  }
});

// Background click
modal.addEventListener('click', (event) => {
  if (event.target === modal) closeModal();
});
