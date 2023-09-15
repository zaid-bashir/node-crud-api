const products = [
    { name: "Product 1", price: 10 },
    { name: "Product 2", price: 20 },
    { name: "Product 3", price: 30 },
    { name: "Product 4", price: 40 },
    { name: "Product 5", price: 50 },
];

const productList = document.getElementById('product-list');

products.forEach(product => {
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');

    productCard.innerHTML = `
        <h2>${product.name}</h2>
        <p>Price: $${product.price}</p>
        <button class="buy-button">Buy Now</button>
    `;

    productList.appendChild(productCard);
});
