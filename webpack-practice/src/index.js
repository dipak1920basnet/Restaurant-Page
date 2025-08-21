// index.js
import './styles.css';
import { loadHome, loadMenu, loadContact } from './greeting.js';

// Cache DOM elements
const contentDiv = document.getElementById('content');
const homeBtn = document.getElementById('home');
const menuBtn = document.getElementById('menu');
const contactBtn = document.getElementById('contact');

// Event listeners
homeBtn.addEventListener('click', () => {
  contentDiv.innerHTML = '';
  contentDiv.appendChild(loadHome());
});

menuBtn.addEventListener('click', () => {
  contentDiv.innerHTML = '';
  contentDiv.appendChild(loadMenu());
});

contactBtn.addEventListener('click', () => {
  contentDiv.innerHTML = '';
  contentDiv.appendChild(loadContact());
});

// Load default page
contentDiv.appendChild(loadHome());
