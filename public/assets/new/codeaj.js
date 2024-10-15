// JavaScript code to rotate the circle based on mouse wheel scroll when hovered
const rotatingCircle = document.getElementById('rotatingCircle');
let isHovered = false;
let currentRotation = 0;

if (rotatingCircle) {
    rotatingCircle.addEventListener('mouseenter', () => {
        isHovered = true;
    });

    rotatingCircle.addEventListener('mouseleave', () => {
        isHovered = false;
    });

    window.addEventListener('wheel', (event) => {
        if (isHovered) {
            currentRotation += event.deltaY;
            rotatingCircle.style.transform = `rotate(${currentRotation}deg)`;
            event.preventDefault(); // Prevent default scrolling behavior
        }
    });
}

// Wait for the DOM content to be fully loaded before executing the code
document.addEventListener('DOMContentLoaded', function () {

    // Popup close button functionality
    const closeButton = document.getElementById('close');
    const popup = document.getElementById('popup');

    if (closeButton && popup) {
        closeButton.addEventListener('click', () => {
            popup.style.display = 'none';
        });
    }

    // Generate user ID
    function generateUserId() {
        return 'user_' + Math.random().toString(36).substr(2, 9);
    }

    // Check if the popup has been shown using sessionStorage
    function hasPopupBeenShown() {
        return sessionStorage.getItem('popupShown') !== null;
    }

    // Display popup after 10 seconds if not shown before
    function displayPopup() {
        if (popup && !hasPopupBeenShown()) {
            popup.style.display = 'block';
            sessionStorage.setItem('popupShown', 'true');
        }
    }

    setTimeout(displayPopup, 10000);

    // Social media and settings panel toggle
    let contentVisible = true;
    const settingButton = document.getElementById('setting');
    const settingPanel = document.querySelector('.setting');
    const socialMediaPanel = document.querySelector('.social-media');

    if (settingButton && settingPanel && socialMediaPanel) {
        settingButton.addEventListener('click', () => {
            if (contentVisible) {
                settingPanel.style.left = '290px';
                socialMediaPanel.style.left = '0px';
            } else {
                settingPanel.style.left = '0px';
                socialMediaPanel.style.left = '-290px';
            }
            contentVisible = !contentVisible; // Toggle the flag
        });
    }

    // Navbar background color change on scroll
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (navbar) {
            if (window.scrollY > 50) {
                navbar.style.backgroundColor = 'var(--color9)';
            } else {
                navbar.style.backgroundColor = 'var(--color1)';
            }
        }
    });

    // Mobile menu toggle
    const menuButton = document.getElementById('menu');
    const closeMenuButton = document.getElementById('close-menu');
    const mobileMenu = document.getElementById('mobile-menu');

    if (menuButton && closeMenuButton && mobileMenu) {
        closeMenuButton.style.display = 'none';

        menuButton.addEventListener('click', () => {
            mobileMenu.style.display = 'block';
            closeMenuButton.style.display = 'block';
            menuButton.style.display = 'none';
        });

        closeMenuButton.addEventListener('click', () => {
            mobileMenu.style.display = 'none';
            closeMenuButton.style.display = 'none';
            menuButton.style.display = 'block';
        });
    }

    // Hide preloader once the page has fully loaded
    const loader = document.getElementById('preloader');
    if (loader) {
        window.addEventListener('load', function () {
            loader.style.display = 'none';
        });
    }

});
