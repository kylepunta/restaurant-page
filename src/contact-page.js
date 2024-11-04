const loadPage = function () {
    const content = document.querySelector('#content');
    const headerContainer = document.createElement('div');
    headerContainer.classList.add('header-container');
    content.appendChild(headerContainer);
    const mainHeading = document.createElement('h1');
    mainHeading.textContent = 'Contact Us';
    headerContainer.appendChild(mainHeading);

    const contactContainer = document.createElement('div');
    contactContainer.classList.add('contact-container');
    content.appendChild(contactContainer);

    const nameHeading = document.createElement('h3');
    nameHeading.textContent = 'Name:';
    const name = document.createElement('p');
    name.textContent = 'Kyle Purcell';
    const phoneNoHeading = document.createElement('h3');
    phoneNoHeading.textContent = 'Contact Number:';
    const phoneNo = document.createElement('p');
    phoneNo.textContent = '087-3513813';
    const emailHeading = document.createElement('h3');
    emailHeading.textContent = 'Email Address:';
    const email = document.createElement('p');
    email.textContent = 'kylepurcell1998@gmail.com';

    contactContainer.appendChild(nameHeading);
    contactContainer.appendChild(name);
    contactContainer.appendChild(phoneNoHeading);
    contactContainer.appendChild(phoneNo);
    contactContainer.appendChild(emailHeading);
    contactContainer.appendChild(email);
};

export {loadPage as loadContactPage};