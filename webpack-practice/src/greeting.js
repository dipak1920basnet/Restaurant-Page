// greeting.js

export function loadHome() {
  const container = document.createElement('div');

  const heading = document.createElement('h1');
  heading.textContent = 'Welcome to Our Restaurant';

  const paragraph = document.createElement('p');
  paragraph.textContent = 'Enjoy delicious food made with love. We serve fresh, local ingredients and offer a wide variety of dishes for everyone.';

  container.appendChild(heading);
  container.appendChild(paragraph);

  return container;
}

export function loadMenu() {
  const container = document.createElement('div');

  const heading = document.createElement('h1');
  heading.textContent = 'Our Menu';

  const list = document.createElement('ul');
  const items = [
    '🍕 Margherita Pizza - $10',
    '🍔 Classic Cheeseburger - $8',
    '🥗 Caesar Salad - $7',
    '🍝 Spaghetti Bolognese - $12',
    '🍰 Chocolate Cake - $6'
  ];

  items.forEach(item => {
    const li = document.createElement('li');
    li.textContent = item;
    list.appendChild(li);
  });

  container.appendChild(heading);
  container.appendChild(list);

  return container;
}

export function loadContact() {
  const container = document.createElement('div');

  const heading = document.createElement('h1');
  heading.textContent = 'Contact Us';

  const address = document.createElement('p');
  address.textContent = '📍 123 Food Street, Flavor Town';

  const phone = document.createElement('p');
  phone.textContent = '📞 Phone: (123) 456-7890';

  const email = document.createElement('p');
  email.textContent = '📧 Email: info@ourrestaurant.com';

  const form = document.createElement('form');

  form.innerHTML = `
    <h2>Send us a message</h2>
    <label for="name">Name:</label><br>
    <input type="text" id="name" required><br><br>
    
    <label for="email">Email:</label><br>
    <input type="email" id="email" required><br><br>
    
    <label for="message">Message:</label><br>
    <textarea id="message" rows="5" required></textarea><br><br>
    
    <button type="submit">Send</button>
  `;

  container.appendChild(heading);
  container.appendChild(address);
  container.appendChild(phone);
  container.appendChild(email);
  container.appendChild(form);

  return container;
}
