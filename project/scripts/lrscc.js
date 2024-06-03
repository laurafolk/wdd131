//select HTML elements and assign to constants
const hamButton = document.querySelector('#button');
const navigation = document.querySelector('nav');
const page = document.querySelector('main');
const heading = document.querySelector('#header-title');
// const bottom = document.querySelector('footer');

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

// bottom.addEventListener('click', () => {
//     hamButton.classList.remove('open');
//     navigation.classList.remove('open');
// });

// projects object array
const projects = [

    {
        itemName: "",
        description: "",
        designer: "Laura M. Folk",
        imageSrc: "images/.webp",
        imgWidth: "",
        imgHeight: "",
        projectUrl: "#",
        description: "",
    }
]

// get the feedback div element so we can do something with it.
const feedbackElement = document.getElementById('feedback');
// get the form so we can read what was entered in it.
const formElement = document.forms[0];
// add a 'listener' to wait for a submission of our form. When that happens run the code below.
formElement.addEventListener('submit', function(e) {
// stop the form from doing the default action.
e.preventDefault();
// set the contents of our feedback element to a message letting the user know the form was submitted successfully. Notice that we pull the name that was entered in the form to personalize the message!
feedbackElement.innerHTML = 'Hello '+ formElement.user_name.value +'! Thank you for your message. We will get back with you as soon as possible!';
// make the feedback element visible.
feedbackElement.style.display = "block";
// add a class to move everything down so our message doesn't cover it.
document.body.classList.toggle('moveDown');
});