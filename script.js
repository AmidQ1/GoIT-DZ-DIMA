// task 1
const gallery = document.querySelector('.gallery');
const fullImageContainer = document.querySelector('.full-image-container');
const fullImage = document.querySelector('.full-image');
let currentIndex = 0;

gallery.addEventListener('click', (event) => {
  if (event.target.tagName === 'IMG') {
    currentIndex = Array.from(gallery.children).indexOf(event.target.parentElement);
    showImage(currentIndex);
  }
});

const fullImag = fullImageContainer.addEventListener('click', () => { 
  fullImageContainer.style.display = 'none';
});

const keyDown =document.addEventListener('keydown', (event) => {
  if (fullImageContainer.style.display === 'flex') {
    if (event.key === 'ArrowRight') {
      currentIndex = (currentIndex + 1) % gallery.children.length;
      showImage(currentIndex);
    } else if (event.key === 'ArrowLeft') {
      currentIndex = (currentIndex - 1 + gallery.children.length) % gallery.children.length;
      showImage(currentIndex);
    }
  }
});

function showImage(index) {
  const img = gallery.children[index].querySelector('img');
  fullImage.src = img.src;
  fullImage.alt = img.alt;
  fullImageContainer.style.display = 'flex';
}

// task 2
const controls = document.getElementById('controls');
const boxesContainer = document.getElementById('boxes');
const input = controls.querySelector('input');
const renderButton = controls.querySelector('button[data-action="render"]');
const destroyButton = controls.querySelector('button[data-action="destroy"]');

renderButton.addEventListener('click', () => {
  const amount = parseInt(input.value, 10);
  if (!isNaN(amount) && amount > 0) {
    createBoxes(amount);
  } else {
    alert("Please enter a valid number greater than 0");
  }
});

destroyButton.addEventListener('click', () => {
  destroyBoxes();
});

function createBoxes(amount) {
  destroyBoxes();
  const boxesFragment = document.createDocumentFragment();
  let size = 30;
  for (let i = 0; i < amount; i++) {
    const box = document.createElement('div');
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    box.style.backgroundColor = getRandomRgbColor();
    box.style.marginBottom = '10px';
    boxesFragment.appendChild(box);
    size += 10;
  }
  boxesContainer.appendChild(boxesFragment);
}

function destroyBoxes() {
  boxesContainer.innerHTML = '';
}

function getRandomRgbColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}
