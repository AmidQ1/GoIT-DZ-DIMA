// task 1

const chBut = document.getElementById('changeButton').addEventListener('click', () => {
    const textFieldValue = document.getElementById('textField').value;
    document.getElementById('changeButton').textContent = textFieldValue;
});

// task 2

const img = document.getElementById('image').src = './images/new-image.jpg';

// task 3

const imgLink = document.getElementById('link').href = 'https://store.steampowered.com/?l=ukrain';
const imgAlt = document.getElementById('image').alt = 'steam';

// task 4

const firstListItem = document.querySelector('ul li');
const changeTextFirst = firstListItem.textContent = 'Новий текст першого елемента';