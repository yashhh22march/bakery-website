const searchIcon = document.querySelector(".search-icon");
const searchForm = document.querySelector(".search-form");

searchIcon.addEventListener("click", () => {
    cartItemsContainer.classList.remove("active")
    searchForm.classList.add("active")
})

const cartIcon = document.querySelector(".cart-icon");
const cartItemsContainer = document.querySelector(".cart-items-container");

cartIcon.addEventListener("click", () => {
    cartItemsContainer.classList.add("active")
    searchForm.classList.remove("active")
})



