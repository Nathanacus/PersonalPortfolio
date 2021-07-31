/////////////////////////////////////////////////////////////////////////////////////////////////
// Return to Top Button

// Define button
const buttonToTop = document.getElementById('buttonToTop');

// Listens for window scrolling
window.onscroll = function() {

    // Activates when user scrolls at least 75px down
    if (document.body.scrollTop > 75 || document.documentElement.scrollTop > 75) {
        buttonToTop.style.display = 'block';
    } else {
        buttonToTop.style.display = 'none';
    }

}

// Triggered when button is clicked
function goToTop() {
    document.body.scrollTop = 0;            // Safari
    document.documentElement.scrollTop = 0; // Chrome, Firefox, IE, Opera
}

/////////////////////////////////////////////////////////////////////////////////////////////////
// Responsive Navbar Dropdown

// Toggle navbar display status
function toggleNavDropdown() {
    let items = document.getElementById('nav-dropdown-items');
    if (items.style.display === 'none') {
        items.style.display = 'block';
    } else {
        items.style.display = 'none';
    }

}
