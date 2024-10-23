import milkshakeImage from "../images/milkshakes2.jpg";

const loadPage = function () {
    const content = document.querySelector('#content');

    const headerContainer = document.createElement('div');
    headerContainer.classList.add('header-container');
    const imageContainer = document.createElement('div');
    imageContainer.classList.add('image-container');
    const paraContainer = document.createElement('div');
    paraContainer.classList.add('para-container');

    const mainHeading = document.createElement('h1');
    mainHeading.textContent = "Kyle's Milkshake Bar";

    const image = document.createElement('img');
    image.src = milkshakeImage;
    image.setAttribute('alt', 'restaurant-image');
    image.setAttribute('width', '450px');
    image.setAttribute('height', '250px');

    const para = document.createElement('p');
    para.textContent = "Kyle's has the best milkshakes in town! Whether it's the strawberry, chocolate, or vanilla flavour, Kyle's will not disappoint. On top of that, they have so many more flavours to choose from and you will feel right at home in this lovely milkshake bar. Seriously, try one of Kyle's milkshakes today!";

    headerContainer.appendChild(mainHeading);
    imageContainer.appendChild(image);
    paraContainer.appendChild(para);

    content.appendChild(headerContainer);
    content.appendChild(imageContainer);
    content.appendChild(paraContainer);

    const hoursContainer = document.createElement('div');
    hoursContainer.classList.add('hours-container');
    const locationContainer = document.createElement('div');
    locationContainer.classList.add('location-container');

    const hoursHeading = document.createElement('h2');
    hoursHeading.textContent = "Opening Hours";
    hoursContainer.appendChild(hoursHeading);

    const locationHeading = document.createElement('h2');
    locationHeading.textContent = "Location";
    locationContainer.appendChild(locationHeading);

    const monday = document.createElement('p');
    const tuesday = document.createElement('p');
    const wednesday = document.createElement('p');
    const thursday = document.createElement('p');
    const friday = document.createElement('p');
    const saturday = document.createElement('p');
    const sunday = document.createElement('p');

    monday.textContent = "Monday: 8am - 6pm";
    tuesday.textContent = "Tuesday: 8am - 6pm";
    wednesday.textContent = "Wednesday: 8am - 6pm";
    thursday.textContent = "Thursday: 8am - 6pm";
    friday.textContent = "Friday: 8am - 6pm";
    saturday.textContent = "Saturday: 8am - 8pm";
    sunday.textContent = "Sunday: 8am - 8pm";

    hoursContainer.appendChild(monday);
    hoursContainer.appendChild(tuesday);
    hoursContainer.appendChild(wednesday);
    hoursContainer.appendChild(thursday);
    hoursContainer.appendChild(friday);
    hoursContainer.appendChild(saturday);
    hoursContainer.appendChild(sunday);

    const address = document.createElement('p');
    address.textContent = "The Square, Castlecomer, Co. Kilkenny, Ireland";
    locationContainer.appendChild(address);

    content.appendChild(hoursContainer);
    content.appendChild(locationContainer);
};
export {loadPage};