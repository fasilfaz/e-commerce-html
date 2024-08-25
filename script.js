// JavaScript for Mobile Menu Toggle
document.addEventListener("DOMContentLoaded", function () {
  const mobileMenuToggle = document.querySelector(".mobile-menu-toggle");
  const navbar = document.querySelector(".navbar");

  mobileMenuToggle.addEventListener("click", function () {
    navbar.classList.toggle("active");
  });

  // Example JavaScript for updating the cart count (replace with actual logic)
  const cartCountElement = document.getElementById("cart-count");
  let cartCount = 0; // This should be fetched from your backend or local storage

  // Function to update cart count
  function updateCartCount() {
    cartCountElement.textContent = cartCount;
  }

  // Example function to simulate adding to cart
  function addToCart() {
    cartCount++;
    updateCartCount();
  }

  // Simulate adding items to the cart
  document.querySelectorAll(".add-to-cart-button").forEach((button) => {
    button.addEventListener("click", addToCart);
  });
});
// JavaScript for Featured Products and Categories
document.addEventListener("DOMContentLoaded", function () {
  const featuredProductsContainer =
    document.getElementById("featured-products");
  const categoriesContainer = document.getElementById("categories");

  // Function to fetch and display featured products
  async function loadFeaturedProducts() {
    try {
      const response = await fetch("https://fakestoreapi.com/products"); 
      const products = await response.json();

      products.forEach((product) => {
        const productItem = document.createElement("div");
        productItem.classList.add("product-item");
        productItem.innerHTML = `
            <img src="${product.image}" alt="${product.title}">
            <h3>${product.title}</h3>
            <p>$${product.price}</p>
            <button class="add-to-cart" data-id="${product.id}">Add to Cart</button>
          `;
        featuredProductsContainer.appendChild(productItem);
      });
    } catch (error) {
      console.error("Error loading featured products:", error);
    }
  }

 // Function to fetch and display categories
async function loadCategories() {
    try {
      const response = await fetch(
        "https://fakestoreapi.com/products/categories"
      );
      const categories = await response.json();
  
      categories.forEach(async (category) => {
        const categoryItem = document.createElement("div");
        categoryItem.classList.add("category-item");
  
        // Fetch image for the category
        const imageResponse = await fetch(
          `https://source.unsplash.com/random/150x150?${category}`
        );
        const imageUrl = imageResponse.url;
  
        categoryItem.innerHTML = `
          <img src="${imageUrl}" alt="${category}">
          <h3>${category}</h3>
        `;
        categoriesContainer.appendChild(categoryItem);
      });
    } catch (error) {
      console.error("Error loading categories:", error);
    }
  }

  // Call functions to load data
  loadFeaturedProducts();
  loadCategories();

  // JavaScript for Newsletter Signup
  const newsletterForm = document.getElementById("newsletter-form");
  newsletterForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const email = newsletterForm.querySelector('input[type="email"]').value;
    alert(`Thank you for subscribing with ${email}!`);
    newsletterForm.reset();
  });
});
