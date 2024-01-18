const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Sample products
const products = [
  { id: 1, name: 'Product A', price: 10.99 },
  { id: 2, name: 'Product B', price: 24.99 },
  { id: 3, name: 'Product C', price: 14.49 }
];

// Cart to store selected items
const cart = [];

// Function to display products
function displayProducts() {
  console.log('\nAvailable Products:');
  products.forEach(product => {
    console.log(`${product.id}. ${product.name} - $${product.price}`);
  });
}

// Function to display the cart
function displayCart() {
  console.log('\nShopping Cart:');
  cart.forEach(item => {
    console.log(`${item.name} - $${item.price}`);
  });
}

// Function to start the application
function startApp() {
  console.log('Welcome to the Simple E-Commerce Console App!');
  displayProducts();

  rl.question('\nEnter the product ID you want to add to the cart (or type "checkout" to complete your purchase): ', (answer) => {
    if (answer.toLowerCase() === 'checkout') {
      displayCart();
      console.log('Thank you for shopping with us!');
      rl.close();
    } else {
      const selectedProduct = products.find(product => product.id === parseInt(answer));

      if (selectedProduct) {
        cart.push({ name: selectedProduct.name, price: selectedProduct.price });
        console.log(`${selectedProduct.name} added to the cart.`);
        displayCart();
      } else {
        console.log('Invalid product ID. Please try again.');
      }

      startApp();
    }
  });
}

// Start the application
console.log(startApp());
