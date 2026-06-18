// ==========================
// HERO IMAGE SLIDER
// ==========================

const heroSection = document.querySelector(".hero-section");

const heroImages = [
    "heroimage.jpg",
    "heroimage2.jpg",
    "heroimage3.jpg"
];

let currentImage = 0;

setInterval(() => {
    currentImage++;

    if (currentImage >= heroImages.length) {
        currentImage = 0;
    }

    heroSection.style.backgroundImage =
        `url(${heroImages[currentImage]})`;

}, 3000);


// ==========================
// SEARCH FUNCTIONALITY
// ==========================

const searchInput = document.querySelector(".search-input");
const searchButton = document.querySelector(".search-icon");

searchButton.addEventListener("click", () => {

    const query = searchInput.value.toLowerCase();

    const products = document.querySelectorAll(".box");

    products.forEach(product => {

        const title = product
            .querySelector("h2")
            .innerText
            .toLowerCase();

        if (title.includes(query)) {
            product.style.display = "block";
        }
        else {
            product.style.display = "none";
        }
    });
});


// ==========================
// CART SYSTEM
// ==========================

let cartCount = localStorage.getItem("cartCount") || 0;

const cartElement = document.querySelector(".nav-cart");

function updateCartDisplay() {
    cartElement.innerHTML =
        `<i class="fa-solid fa-cart-shopping"></i>
         Cart (${cartCount})`;
}

updateCartDisplay();

const allProducts = document.querySelectorAll(".box");

allProducts.forEach(product => {

    product.addEventListener("click", () => {

        cartCount++;

        localStorage.setItem(
            "cartCount",
            cartCount
        );

        updateCartDisplay();

        const productName =
            product.querySelector("h2").innerText;

        alert(productName + " added to cart!");
    });

});


// ==========================
// SIGN-IN GREETING
// ==========================

const signInSection =
    document.querySelector(".nav-signin");

let username =
    localStorage.getItem("username");

if (username) {

    signInSection.innerHTML = `
        <p><span>Hello,</span></p>
        <p class="nav-second">${username}</p>
    `;
}

signInSection.addEventListener("click", () => {

    const enteredName =
        prompt("Enter your name");

    if (
        enteredName &&
        enteredName.trim() !== ""
    ) {

        localStorage.setItem(
            "username",
            enteredName
        );

        signInSection.innerHTML = `
            <p><span>Hello,</span></p>
            <p class="nav-second">
                ${enteredName}
            </p>
        `;
    }

});


// ==========================
// BACK TO TOP
// ==========================

const backToTop =
    document.querySelector(".foot-panel1");

backToTop.style.cursor = "pointer";

backToTop.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});


// ==========================
// LIVE CLOCK
// ==========================

const clock =
    document.getElementById("clock");

if (clock) {

    setInterval(() => {

        const now = new Date();

        clock.innerText =
            now.toLocaleTimeString();

    }, 1000);

}


// ==========================
// PRODUCT DOUBLE CLICK INFO
// ==========================

allProducts.forEach(product => {

    product.addEventListener("dblclick", () => {

        const productName =
            product.querySelector("h2").innerText;

        alert(
            `Product: ${productName}\nPrice: ₹999`
        );

    });

});


// ==========================
// RESET SEARCH ON EMPTY BOX
// ==========================

searchInput.addEventListener("input", () => {

    if (searchInput.value === "") {

        allProducts.forEach(product => {

            product.style.display = "block";

        });

    }

});

const amazonLogo = document.querySelector(".nav-logo");

amazonLogo.addEventListener("click", () => {
    window.location.href = "index.html";
});