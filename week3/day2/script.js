// Basic functionality for dark mode toggle and mobile menu
document.addEventListener('DOMContentLoaded', function() {
    // Fade in body
    document.body.style.opacity = '1';
    
    // Dark Mode Toggle
    const darkModeToggle = document.getElementById('darkModeToggle');
    const mobileDarkModeToggle = document.getElementById('mobileDarkModeToggle');
    
    function toggleDarkMode() {
        document.documentElement.classList.toggle('dark');
        const isDark = document.documentElement.classList.contains('dark');
        localStorage.setItem('darkMode', isDark);
        darkModeToggle.classList.toggle('active', isDark);
        mobileDarkModeToggle.classList.toggle('active', isDark);
    }
    
    // Initialize dark mode from localStorage
    if (localStorage.getItem('darkMode') === 'true') {
        document.documentElement.classList.add('dark');
        darkModeToggle.classList.add('active');
        mobileDarkModeToggle.classList.add('active');
    }
    
    darkModeToggle.addEventListener('click', toggleDarkMode);
    mobileDarkModeToggle.addEventListener('click', toggleDarkMode);
    
    // Mobile Menu Toggle
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const closeMobileMenu = document.getElementById('closeMobileMenu');
    const mobileMenu = document.querySelector('.mobile-menu');
    
    mobileMenuBtn.addEventListener('click', () => {
        mobileMenu.classList.add('active');
    });
    
    closeMobileMenu.addEventListener('click', () => {
        mobileMenu.classList.remove('active');
    });
});