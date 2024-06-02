//select HTML elements and assign to constants
const hamButton = document.querySelector('#button');
const navigation = document.querySelector('nav');
const page = document.querySelector('main');
const heading = document.querySelector('#header-title');
const bottom = document.querySelector('footer');

//create event listener for the hamburger menu button
//toggle the open class on/off for the nav menu and button, when the button is clicked
hamButton.addEventListener('click', () => {
    hamButton.classList.toggle('open');
    navigation.classList.toggle('open');
});

page.addEventListener('click', () => {
    hamButton.classList.remove('open');
    navigation.classList.remove('open');
});

heading.addEventListener('click', () => {
    hamButton.classList.remove('open');
    navigation.classList.remove('open');
});

bottom.addEventListener('click', () => {
    hamButton.classList.remove('open');
    navigation.classList.remove('open');
});