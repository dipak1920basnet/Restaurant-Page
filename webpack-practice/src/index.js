// index.js
import './styles.css';
import { loadHome, loadMenu, loadContact } from './greeting.js';

// Cache DOM elements
const contentDiv = document.getElementById('content');
const homeBtn = document.getElementById('home');
const menuBtn = document.getElementById('menu');
const contactBtn = document.getElementById('contact');

function call(button, loadFunction) {
  button.addEventListener("click", () => {
    contentDiv.innerHTML = '';
    contentDiv.appendChild(loadFunction()); // <--- add parentheses to call the function
  });
}

call(homeBtn, loadHome);
call(menuBtn, loadMenu);
call(contactBtn, loadContact);


// Load default page
contentDiv.appendChild(loadHome());
