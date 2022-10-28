const scrollToAboutUsSection = () => closeMobileMenu(() => scrollToSection("about-us"));
const scrollToContactSection = () => closeMobileMenu(() => scrollToSection("contact"));

/**
 * It scrolls to the requested section
 * 
 * @param {string} section - The id of the section to scroll to
 */
function scrollToSection(section) {
    document.getElementById(section).scrollIntoView({
        behavior: "smooth",
        block: "end",
    });
}

/** It opens the mobile menu */
function openMobileMenu() {
    document.querySelector(".mobile-menu").classList.toggle("active");
    document.body.classList.toggle("hide-overflow");
}

/**
 * It closes the mobile menu
 * 
 * @param {function} onComplete - The function to execute after closing the menu
*/
function closeMobileMenu(onComplete) {
    document.querySelector(".mobile-menu").classList.toggle("closing");
    // Wait for the animation to finish
    setTimeout(() => {
        document.querySelector(".mobile-menu").classList.toggle("closing");
        document.querySelector(".mobile-menu").classList.toggle("active");
        document.body.classList.toggle("hide-overflow");
        if (onComplete) onComplete();
    }, 200);
}