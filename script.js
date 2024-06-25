// task 1

document.getElementById('changeButton').addEventListener('click', () => {
    const textFieldValue = document.getElementById('textField').value;
    document.getElementById('changeButton').textContent = textFieldValue;
});

// task 2

document.getElementById('image').src = './images/new-image.jpg';

// task 3

document.getElementById('link').href = 'https://store.steampowered.com/?l=ukrain';
document.getElementById('image').alt = 'steam';

// task 4

const firstListItem = document.querySelector('ul li');
firstListItem.textContent = 'Новий текст першого елемента';