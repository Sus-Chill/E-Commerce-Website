document.addEventListener('DOMContentLoaded', () => {
    const cartItems = document.getElementById('cart-items');
    const totalPriceElement = document.getElementById('total-price');
    const cartCount = document.querySelector('.cart-count');
    let cart = [];
    let totalPrice = 0;

    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', () => {
            const product = button.parentElement;
            const name = product.getAttribute('data-name');
            const price = parseFloat(product.getAttribute('data-price'));

            cart.push({ name, price });
            updateCart();
        });
    });

    function updateCart() {
        cartItems.innerHTML = '';
        totalPrice = 0;

        cart.forEach(item => {
            const li = document.createElement('li');
            li.textContent = `${item.name} - $${item.price.toFixed(2)}`;
            cartItems.appendChild(li);
            totalPrice += item.price;
        });

        totalPriceElement.textContent = `Total: $${totalPrice.toFixed(2)}`;
        cartCount.textContent = cart.length;
    }

    document.getElementById('checkout').addEventListener('click', () => {
        alert('Checkout - Total: $' + totalPrice.toFixed(2));
    });
});
