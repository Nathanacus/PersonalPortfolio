/////////////////////////////////////////////////////////////////////////////////////////////////
// Return to Top Button

// define button
const buttonToTop = document.getElementById('buttonToTop');

// listens for window scrolling
window.onscroll = function() {

    // activates when user scrolls at least 75px down
    if (document.body.scrollTop > 75 || document.documentElement.scrollTop > 75) {
        buttonToTop.style.display = 'block';
    } else {
        buttonToTop.style.display = 'none';
    }

}

// triggered when button is clicked
function goToTop() {
    document.body.scrollTop = 0;            // Safari
    document.documentElement.scrollTop = 0; // Chrome, Firefox, IE, Opera
}

/////////////////////////////////////////////////////////////////////////////////////////////////
// Toggle Responsive Navbar Dropdown Menu

// display dropdown menu
function toggleNavDropdown() {
    document.getElementById('nav-dropdown-items').style.display = 'block';
}

// close dropdown menu when user clicks elsewhere
window.onclick = function(event) {
    if (!event.target.matches('.nav-dropdown-button')) {
        document.getElementById('nav-dropdown-items').style.display = 'none';
    }
}