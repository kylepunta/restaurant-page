import "./styles.css";
import { loadHomePage } from "./home-page";
import { loadMenuPage } from "./menu-page";
import { loadContactPage } from "./contact-page";

const content = document.querySelector('#content');
const buttons = document.querySelectorAll('button');
const homeBtn = buttons[0];
const menuBtn = buttons[1];
const contactBtn = buttons[2];

homeBtn.addEventListener('click', function() {
    content.innerHTML = '';
    loadHomePage();
});

menuBtn.addEventListener('click', function() {
    content.innerHTML = '';
    loadMenuPage();
});

contactBtn.addEventListener('click', function() {
    content.innerHTML = '';
    loadContactPage();
});

function initActiveButton(){
    homeBtn.classList.add('active');
};

function setActiveButton(button){
    buttons.forEach((button) => {
        button.classList.remove('active');
    });
    button.classList.add('active');
};

buttons.forEach((button) => {
    button.addEventListener('click', function() {
        setActiveButton(button);
    })
});

loadHomePage();
initActiveButton();