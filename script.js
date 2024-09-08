const images = document.querySelectorAll('.image');
const fullImageContainer = document.querySelector('.full-image-container');
const fullImage = document.querySelector('.full-image');
let currentIndex = 0;

function showImage(index) {
  const src = images[index].src;
  fullImage.src = src;
  fullImageContainer.style.display = 'flex';
}

function closeImage() {
  fullImageContainer.style.display = 'none';
}

function handleKeyPress(event) {
  if (event.key === 'ArrowRight') {
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
  } else if (event.key === 'ArrowLeft') {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showImage(currentIndex);
  } else if (event.key === 'Escape') {
    closeImage();
  }
}

images.forEach((img, index) => {
  img.addEventListener('click', () => {
    currentIndex = index;
    showImage(index);
  });
});

fullImageContainer.addEventListener('click', closeImage);
document.addEventListener('keydown', handleKeyPress);

// 

const boxesContainer = document.getElementById('boxes');
const renderButton = document.getElementById('render-button');
const destroyButton = document.getElementById('destroy-button');
const amountInput = document.getElementById('amount-input');

function getRandomColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}

function createBoxes(amount) {
  const boxSizeStart = 30;
  const boxSizeIncrement = 10;

  let boxSize = boxSizeStart;

  for (let i = 0; i < amount; i++) {
    const box = document.createElement('div');
    box.classList.add('box');
    box.style.width = `${boxSize}px`;
    box.style.height = `${boxSize}px`;
    box.style.backgroundColor = getRandomColor();
    boxesContainer.appendChild(box);

    boxSize += boxSizeIncrement;
  }
}

function destroyBoxes() {
  boxesContainer.innerHTML = '';
}

renderButton.addEventListener('click', () => {
  const amount = Number(amountInput.value);
  createBoxes(amount);
});

destroyButton.addEventListener('click', destroyBoxes);
