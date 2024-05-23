//Selects the HTML elements and assign to constants
const hambutton = document.querySelector('#menu');
const navigation = document.querySelector('nav');

//Below is for selecting the menu buttons
const homButton = document.querySelector('#home-button');
const oldButton = document.querySelector('#old-button');
const newButton = document.querySelector('#new-button');
const largeButton = document.querySelector('#large-button');
const smallButton = document.querySelector('#small-button');
//page heading
const pageHeading = document.querySelector('#page-heaging');

//below is the event listner for the hamburger button
hambutton.addEventListener('click', () => {
  navigation.classList.toggle('open');
  hambutton.classList.toggle('open');
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

  createTempleCard();

  function createTempleCard() {
    temples.forEach(temple => {
      let card = document.createElement("image-container");
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

      document.querySelector(".container-grid").appendChild(card);
    });
  }

  let filteredTemples = [];

  document.addEventListener('DOMContentLoaded', function () {
    generate_temple_cards("home");
  }, false);

  function changeActive(activePhrase) {
    //this is on the nav buttons for the home, old, new, large and small.
    homeButton.classList.remove('active');
    oldButton.classList.remove('active');
    newButton.classList.remove('active');
    largeButton.classList.remove('active');
    smallButton.classList.remove('active');

    switch (activePhrase) {
      case "home":
        homeButton.classList.add('active');
        break;
      case "old":
        oldButton.classList.add('active');
        break;
      case "large":
        largeButton.classList.add('active');
        break;
      case "small":
        smallButton.classList.add('active');
        break;
      default:
    }
  }

  // below is to reorder date format
  function reorderDate(dateString) {
    const parts = dateString.split(',').map(part => part.trim()); //example ['1965', 'April', '4']

    const day = parts[2];
    const month = parts[1];
    const year = parts[0];

    return `${day} ${month} ${year}`;
  }

  function generate_temple_cards(filterPhrase) {
    // Below will filter the temple array by Home - displays all temples, Old - displays temples built before 1990,
    // New - displays temples built after 2000, Large - displays temples larger than 90000 sq ft, Small - displays
    // temples smaller than 10000 sq ft.
    switch (filterPhrase) {
      case "home":
        filteredTemples = temples;
        pageHeading.textContent = "Home";
        break;
      case "Old":
        filteredTemples = temples.filter((temple) => parseInt(temple.dedicated.split(",", 1)) < 1900);
        pageHeading.textContent = "Old | Built Before 1900";
        break;
      case "new":
        filteredTemples = temples.filter((temple) => parseInt(temple.dedicated.split(",", 1)) > 2000);
        pageHeading.textContent = "New | Buile before 2000";
        break;
      case "large":
        filteredTemples = temples.filter((temple) => temple.area > 90000);
        pageHeading.textContent = "Large | Bigger than 90000 sq ft";
        break;
      case "small":
        filteredTemples = temples.filter((temple) => temple.area < 10000);
        pageHeading.textContent = "Small | Smaller than 10000 sq ft";
        break;
      default:
        filteredTemples = temples;
        pageHeading.textContent = "Home";
    };
    changeActive(filterPhrase);
    const htmlTemples = filteredTemples.map(
      (temple) =>
        `<div class="container-grid">
            <"image-container">
              <h3>${temple.templeName}</h3>
              <p>
                <span class="label">Locatioin:</span>
                ${temple.location}
              </p>
              <p>
                <span class="label">Dedicated:</span>
                ${temple.dedicated}
              </P>
              <p>
                <span class="lable">Size:</span>
                ${temple.size}
              <img class="temple-img" data-src="${temple.imageUrl}" alt="${temple.templeName}" loading="lazy" width=400">
              </image-container>`
    );
    document.getElementById("temples").innerHTML = htmlTemples.join('');

    [].forEach.call(document.querySelectorAll('img[data-src]'), function (img) {
        img.setAttribute('src', img.getAttribute('data-src'));
        img.onload = function () {
          img.removeAttribute('data-src');
        };
    });
  }