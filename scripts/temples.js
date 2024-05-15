//select HTML elements and assign to constants
const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

//create event listener for the hamburger menu button
//toggle the show class on/off for the nav menu and button, when the button is clicked
hamButton.addEventListener('click', function(){
    navigation.classList.toggle('show');
    hamButton.classList.toggle('show');
});
