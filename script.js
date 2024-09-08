const galleryItems = [
    {
      preview: 'path-to-preview-image-1.jpg',
      original: 'path-to-original-image-1.jpg',
      description: 'Image 1 Description',
    },
    {
      preview: 'path-to-preview-image-2.jpg',
      original: 'path-to-original-image-2.jpg',
      description: 'Image 2 Description',
    },

  ];
  
  const galleryContainer = document.querySelector('.js-gallery');

  const galleryMarkup = galleryItems
    .map(({ preview, original, description }) => {
      return `
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
      `;
    })
    .join('');
  
  galleryContainer.innerHTML = galleryMarkup;

//   

galleryContainer.addEventListener('click', onGalleryItemClick);

function onGalleryItemClick(event) {
  event.preventDefault();

  if (event.target.nodeName !== 'IMG') {
    return;
  }

  const originalImageUrl = event.target.dataset.source;
  openModal(originalImageUrl);
}

// 

const modal = document.querySelector('.js-lightbox');
const modalImage = document.querySelector('.lightbox__image');

function openModal(imageUrl) {
  modal.classList.add('is-open');
  modalImage.src = imageUrl;
}

function closeModal() {
  modal.classList.remove('is-open');
  modalImage.src = ''; 
}

const closeButton = document.querySelector('button[data-action="close-lightbox"]');
closeButton.addEventListener('click', closeModal);

// 


window.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && modal.classList.contains('is-open')) {
      closeModal();
    }
  });
  

  const overlay = document.querySelector('.lightbox__overlay');
  overlay.addEventListener('click', closeModal);

  
// 

let currentImageIndex = null;

galleryContainer.addEventListener('click', (event) => {
  if (event.target.nodeName === 'IMG') {
    const originalImageUrl = event.target.dataset.source;
    currentImageIndex = galleryItems.findIndex(item => item.original === originalImageUrl);
    openModal(originalImageUrl);
  }
});

window.addEventListener('keydown', (event) => {
  if (!modal.classList.contains('is-open')) return;

  if (event.key === 'ArrowRight') {
    currentImageIndex = (currentImageIndex + 1) % galleryItems.length;
    modalImage.src = galleryItems[currentImageIndex].original;
  }

  if (event.key === 'ArrowLeft') {
    currentImageIndex = (currentImageIndex - 1 + galleryItems.length) % galleryItems.length;
    modalImage.src = galleryItems[currentImageIndex].original;
  }
});

  