// task 1
const catLi = document.querySelectorAll("#categories .item");
console.log(`У списку ${catLi.length} категорії.`);

catLi.forEach(categoria => {
  const searcH2 = categoria.querySelector("h2").textContent;
  const searcUlLi = categoria.querySelectorAll("ul li").length;
  console.log(`Категорія: ${searcH2}`);
  console.log(`Кількість елементів: ${searcUlLi}`);
});

// task 2
const ingredients = [
  'Картопля',
  'Гриби',
  'Часник',
  'Помідори',
  'Зелень',
  'Приправи',
];

const searcIngr = document.querySelector("#ingredients");
const createLi = ingredients.map(ingredient => {
  const li = document.createElement("li");
  li.textContent = ingredient;
  return li;
})

searcIngr.append(...createLi);

// task 3

const images = [
  {
    url:
      'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url:
      'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url:
      'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const gallery = document.querySelector('#gallery');
const galleryItems = images.map(({ url, alt }) => `
  <li>
    <img src="${url}" alt="${alt}">
  </li>
`).join('');

gallery.insertAdjacentHTML('beforeend', galleryItems);

gallery.style.display = 'flex';
gallery.style.flexWrap = 'wrap';
gallery.style.gap = '10px';
gallery.querySelectorAll('img').forEach(img => {
  img.style.maxWidth = '100%';
  img.style.height = 'auto';
});

// task 4
let counterValue = 0;

const valueElement = document.querySelector('#value');
const decrementButton = document.querySelector('[data-action="decrement"]');
const incrementButton = document.querySelector('[data-action="increment"]');

const updateCounter = () => {
  valueElement.textContent = counterValue;
};

const increment = () => {
  counterValue += 1;
  updateCounter();
};

const decrement = () => {
  counterValue -= 1;
  updateCounter();
};

decrementButton.addEventListener('click', decrement);
incrementButton.addEventListener('click', increment);

updateCounter();