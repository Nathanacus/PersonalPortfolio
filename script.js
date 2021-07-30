/////////////////////////////////////////////////////////////////////////////////////////////////
// Return to Top Button

// Define button
const buttonToTop = document.getElementById('buttonToTop');

// Listens for window scrolling
window.onscroll = function() {
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
// Responsive Nav Bar

function expandNavBar() {
    let navbar = document.getElementById('navbar');
    if (navbar.class === '') {
        navbar.class += 'responsive';
        console.log('Added responsive class');
    } else {
        navbar.class = '';
        console.log('Removed responsive class');
    }
}