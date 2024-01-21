const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


const skincareProducts = [
  { id: 1, name: 'Moisturizing Cream', price: 19.99 },
  { id: 2, name: 'Cleansing Foam', price: 12.99 },
  { id: 3, name: 'Sunscreen SPF 30', price: 15.49 }
];

const cart = [];

function displaySkincareProducts() {
  console.log('\nAvailable Skincare Products:');
  skincareProducts.forEach(product => {
    console.log(`${product.id}. ${product.name} - $${product.price}`);
  });
}


function displayCart() {
  console.log('\nShopping Cart:');
  cart.forEach(item => {
    console.log(`${item.name} - $${item.price}`);
  });
}

function startSkincareApp() {
  console.log('Welcome to the Skincare E-Commerce Console App!');
  displaySkincareProducts();

  rl.question('\nEnter the product ID you want to add to the cart (or type "checkout" to complete your purchase): ', (answer) => {
    if (answer.toLowerCase() === 'checkout') {
      displayCart();
      console.log('Thank you for shopping for skincare products with us!');
      rl.close();
    } else {
      const selectedProduct = skincareProducts.find(product => product.id === parseInt(answer));

      if (selectedProduct) {
        cart.push({ name: selectedProduct.name, price: selectedProduct.price });
        console.log(`${selectedProduct.name} added to the cart.`);
        displayCart();
      } else {
        console.log('Invalid product ID. Please try again.');
      }

      startSkincareApp();
    }
  });
}


startSkincareApp();

