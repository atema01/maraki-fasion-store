// JavaScript for Shopping Cart
document.addEventListener("DOMContentLoaded", () => {
    const cartIcon = document.querySelector(".cart");
    const cartCount = document.querySelector(".cart-count");
    const cartPage = document.querySelector(".cart-page");
    const cartItemsList = document.querySelector(".cart-items");
    const closeCartButton = document.querySelector(".close-cart");

    let cart = [];

    // Update cart count
    function updateCartCount() {
        cartCount.textContent = cart.length;
    }

    // Render cart items
    function renderCartItems() {
        cartItemsList.innerHTML = ""; // Clear previous items
        cart.forEach(item => {
            const li = document.createElement("li");
            li.innerHTML = `
                <span>
                    <img src="${item.image}" alt="${item.name}" width="30">
                    ${item.name} - ${item.price} ETB
                </span>
                <button class="remove-item" data-id="${item.id}">Remove</button>
            `;
            cartItemsList.appendChild(li);
        });
    }

    // Add product to cart
    document.querySelectorAll(".add-to-cart").forEach(button => {
        button.addEventListener("click", (e) => {
            const product = e.target.closest(".product");
            const productData = {
                id: product.dataset.id,
                name: product.dataset.name,
                price: product.dataset.price,
                image: product.dataset.image
            };

            // Check if item is already in cart
            if (!cart.some(item => item.id === productData.id)) {
                cart.push(productData);
                updateCartCount();
            } 
            else {
                alert("Item is already in the cart!");
            }
        });
    });

    // Show cart page
    cartIcon.addEventListener("click", () => {
        renderCartItems();
        cartPage.classList.remove("hidden");
    });

    // Close cart page
    closeCartButton.addEventListener("click", () => {
        cartPage.classList.add("hidden");
    });

    // Remove item from cart
    cartItemsList.addEventListener("click", (e) => {
        if (e.target.classList.contains("remove-item")) {
            const itemId = e.target.dataset.id;
            cart = cart.filter(item => item.id !== itemId);
            updateCartCount();
            renderCartItems();
        }
    });
});
