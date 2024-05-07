const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('_________');  //on this you need to fill in hte blank to reference the HTML element that is a unordered list element.

const li = document.createElement('li');

const deleteButton = document.createElement('button');

li.textContent = input.value;

deleteButton.textContent = 'X';

li.append(deleteButton);

list.append(li);

button.addEventListener('click', Function() {
    
}); 