import restaurantImage from "../images/restaurant-image.jpg";

const loadPage = function () {
    const content = document.querySelector('#content');

    const headerContainer = document.createElement('div');
    const imageContainer = document.createElement('div');
    const paraContainer = document.createElement('div');

    const mainHeading = document.createElement('h1');
    mainHeading.textContent = "Welcome to my restaurant!";

    const image = document.createElement('img');
    image.src = restaurantImage;
    image.setAttribute('alt', 'restaurant-image');
    image.setAttribute('width', '400px');
    image.setAttribute('height', '250px');

    const para = document.createElement('p');
    para.textContent = "This is the best restaurant in town!";

    headerContainer.appendChild(mainHeading);
    imageContainer.appendChild(image);
    paraContainer.appendChild(para);

    content.appendChild(headerContainer);
    content.appendChild(imageContainer);
    content.appendChild(paraContainer);

};
export {loadPage};