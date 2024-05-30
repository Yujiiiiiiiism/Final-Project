document.addEventListener('DOMContentLoaded', () => {
    const cartItemsContainer = document.querySelector('.cart-items');
    const totalPriceElement = document.getElementById('total-price');
    const clearCartButton = document.getElementById('clear-cart');
    let cart = [];

    const products = document.querySelectorAll('.product');
    products.forEach(product => {
        product.querySelector('.add-to-cart').addEventListener('click', () => {
            const id = product.getAttribute('data-id');
            const name = product.getAttribute('data-name');
            const price = parseFloat(product.getAttribute('data-price'));
            addToCart(id, name, price);
        });
    });

    clearCartButton.addEventListener('click', () => {
        cart = [];
        updateCart();
    });

    function addToCart(id, name, price) {
        const existingProduct = cart.find(item => item.id === id);
        if (existingProduct) {
            existingProduct.quantity++;
        } else {
            cart.push({ id, name, price, quantity: 1 });
        }
        updateCart();
    }

    function updateCart() {
        cartItemsContainer.innerHTML = '';
        let totalPrice = 0;
        cart.forEach(item => {
            const cartItem = document.createElement('div');
            cartItem.classList.add('cart-item');
            cartItem.innerHTML = `
                <span>${item.name} (x${item.quantity})</span>
                <span>$${(item.price * item.quantity).toFixed(2)}</span>
            `;
            cartItemsContainer.appendChild(cartItem);
            totalPrice += item.price * item.quantity;
        });
        totalPriceElement.textContent = totalPrice.toFixed(2);
    }
});
