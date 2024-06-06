//select HTML elements and assign to constants
document.addEventListener('DOMContentLoaded', () => {
    const hamButton = document.querySelector('#button');
    const navigation = document.querySelector('nav');
    const page = document.querySelector('main');
    const heading = document.querySelector('#header-title');
    const feedbackElement = document.getElementById('feedback');
    const formElement = document.forms[0];

    //This makes sure the elements are found before adding event listenere
    if (hamButton && navigation && page && heading) {
        page.addEventListener('click', () => {
            hamButton.classList.remove('open');
            navigation.classList.remove('open');
        });

        heading.addEventListener('click', () => {
            hamButton.classList.remove('open');
            navigation.classList.remove('open');
        });
    } 
    

    if (formElement) {
        formElement.addEventListener('submit', function(e) {
            e.preventDefault();
            feedbackElement.innerHTML = 'Hello ' + formElement.user_name.value + '! Thank you for your message. We will get back with you as soon as possible!';
            feedbackElement.style.display = "block";
            document.body.classList.toggle('moveDown');
        });
    }
});    