// Dropdown Menu Functionality

// Get all dropdown toggle buttons
const dropdownToggles = document.querySelectorAll('.dropdown-toggle');
const dropdownItems = document.querySelectorAll('.nav-item.dropdown');

// Close dropdown when clicking outside
document.addEventListener('click', function(event) {
    const isClickInsideMenu = document.querySelector('.nav-menu').contains(event.target);
    
    if (!isClickInsideMenu) {
        dropdownItems.forEach(item => {
            item.classList.remove('active');
        });
    }
});

// Toggle dropdown on click (for mobile)
dropdownToggles.forEach(toggle => {
    toggle.addEventListener('click', function(e) {
        e.preventDefault();
        const parentItem = this.closest('.nav-item');
        
        // Close other dropdowns
        dropdownItems.forEach(item => {
            if (item !== parentItem) {
                item.classList.remove('active');
            }
        });
        
        // Toggle current dropdown
        parentItem.classList.toggle('active');
    });
});

// Prevent dropdown from closing when clicking inside it
const dropdownMenus = document.querySelectorAll('.dropdown-menu');
dropdownMenus.forEach(menu => {
    menu.addEventListener('click', function(e) {
        e.stopPropagation();
    });
});

// Smooth scroll for navigation links
const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        if (this.getAttribute('href').startsWith('#')) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
});

// Add active class to current page link
window.addEventListener('load', function() {
    const currentPage = window.location.pathname.split('/').pop() || 'home.html';
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentPage || (currentPage === '' && href === 'home.html')) {
            link.parentElement.classList.add('active');
        }
    });
});

// Form validation for login form
const loginForm = document.querySelector('.login-form');
if (loginForm) {
    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const username = document.getElementById('username');
        const password = document.getElementById('password');
        
        if (username && password) {
            if (!username.value || !password.value) {
                alert('Please fill in all fields');
                return;
            }
            
            console.log('Login attempt with:', username.value);
            alert('Login functionality would be implemented here');
        }
    });
}

console.log('School website loaded successfully');
