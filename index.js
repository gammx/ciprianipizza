/** Update copyright year automatically */
const copyYear = document.getElementById('copy-year')
copyYear.innerHTML = new Date().getFullYear()

/** Listen for the button at the top which scrolls the page to the favorite-picks section */
document.getElementById("take-ride").addEventListener("click", function () {
    document.getElementById("favorite-picks").scrollIntoView({
        behavior: "smooth",
        block: "nearest",
    });
})

/**
 * It creates a parallax effect on the requested element
 * 
 * @param {string} selector - The selector of the element to apply the effect
 * @param {number} distance - It controls the aggressiveness of the effect
 */
function createParallaxItem(selector, distance) {
    const parallaxItem = document.querySelector(selector);
    let parallaxItemPosition = parallaxItem.offsetTop - window.scrollY;
    let top = this.window.getComputedStyle(parallaxItem).getPropertyValue("top");
    let parallaxItemPositionPercent = parallaxItemPosition / (parallaxItem.offsetHeight + parseInt(top));

    parallaxItem.style.transform = "translateY(" + parallaxItemPositionPercent * distance + "px)";
}

window.addEventListener("scroll", function () {
    createParallaxItem("#fresh_ingredient_1", 8);
    createParallaxItem("#fresh_ingredient_2", 15);
    createParallaxItem("#delivering_pizza", 15);
    createParallaxItem("#pizza_bg", 64);
});

