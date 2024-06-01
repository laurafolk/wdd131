//Selects the HTML elements and assign to constants
const hambutton = document.querySelector('#menu');
const navigation = document.querySelector('navigation');

//Below is for selecting the menu buttons
const homeButton = document.querySelector('#home-button');
const oldButton = document.querySelector('#old-button');
const newButton = document.querySelector('#new-button');
const largeButton = document.querySelector('#large-button');
const smallButton = document.querySelector('#small-button');
//page heading
const pageHeading = document.querySelector('#page-heading');  //corrected id reference
// const containerGrid = document.querySelector('.container-grid'); //added reference to container grid
//below is the event listner for the hamburger button
hambutton.addEventListener('click', () => {
  navigation.classList.toggle('open');
  hambutton.classList.toggle('open');
});

//enent listeners for nnavigation buttons below
homeButton.addEventListener('click', () => {
  pageHeading.textContent = "Home";
  generateContainerCards();
});

oldButton.addEventListener('click', () => {
  pageHeading.textContent = "Old";
  generateContainerCards();
});

newButton.addEventListener('click', () => {
  pageHeading.textContent = "New";
  generateContainerCards();
});

largeButton.addEventListener('click', () => {
  pageHeading.textContent = "Large";
  generateContainerCards();
});

smallButton.addEventListener('click', () => {
  pageHeading.textContent = "Small";
  generateContainerCards();
});

//call to generateContainerCards to display all temples for correct page.
document.addEventListener('DOMContentLoaded', () => {
  generateContainerCards();
});

//list of temple objects array copied plus three that I had to do below.

const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  {
    templeName: "Saint Louis Missouri",
    location: "Town and Country, Missouri, United States",
    dedicated: "1997, June. 1",
    area: 58749,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/st-louis-missouri/400x250/st-louis-temple-lds-903353-wallpaper.jpg"
  },
  {
    templeName: "Idaho Falls Idaho",
    location: "Idaho Falls, Idaho, United States",
    dedicated: "1945, September, 23",
    area: 116250,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/idaho-falls-idaho/2019/400x250/1-Idaho-Falls-Temple-2097425.jpg"
  },
  {
    templeName: "Bentonville Arkansas",
    location: "Bentonville, Arkansas, Unitied States",
    dedicated: "2023, September, 17",
    area: 28472,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/bentonville-arkansas/400x400/34410870d7d011ed8402eeeeac1ec672bdc0ce45.jpeg"
  },
];

function generateContainerCards() {
  const containerGrid = document.querySelector('.container-grid');
  containerGrid.innerHTML = "";  //this will clear previous cards

  temples.forEach(temple => {
    let card = document.createElement("div");
    card.className = "image-container";
    let name = document.createElement("h3");
    let location = document.createElement("p");
    let dedication = document.createElement("p");
    let area = document.createElement("p");
    let img = document.createElement("img");

    name.textContent = temple.templeName;
    location.innerHTML = `<span class="label">Location:</span> ${temple.location}`;
    dedication.innerHTML = `<span class="label">Dedicaed:</span> ${temple.dedicated}`;
    area.innerHTML = `<span class="label">Size:</span> ${temple.area} sq ft`;
    img.setAttribute("src", temple.imageUrl);
    img.setAttribute("alt", `${temple.templeName} Temple`);
    img.setAttribute("loading", "lazy");

    card.appendChild(name);
    card.appendChild(location);
    card.appendChild(dedication);
    card.appendChild(area);
    card.appendChild(img);

    containerGrid.appendChild(card);
  });
}