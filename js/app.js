/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/

const sectionList = document.querySelectorAll("section");
const navBar = document.querySelector("#navbar__list");

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/




/** *
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
function buildNavbar () {
    for (let section of sectionList) {
        navBar.innerHTML += `<li><a class='menu__link' href='#${section.id}'>${section.id}</a></li>`;
    }

}


// Add class 'active' to section when near top of viewport
function addActiveClass() {
    sectionList.forEach(section => {
        if (window.scrollY> (section.getBoundingClientRect().top+ window.scrollY) && window.scrollY < (section.
            getBoundingClientRect().bottom+ window.scrollY)) {
                section.classList.add("your-active-class");
                document.querySelector(`a[href^="#${section.id}"]`).parentElement.classList.add("active");
            }else {
                section.classList.remove("your-active-class");
                document.querySelector(`a[href^="#${section.id}"]`).parentElement.classList.remove("active");
            }
            
    })
}

// Scroll to anchor ID using scrollTO event
function smoothScroll () {
    navBar.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
}


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 
buildNavbar();
// Scroll to section on link click
smoothScroll();
// Set sections as active
document.addEventListener('scroll',addActiveClass);