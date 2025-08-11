const mobileMenuButton = document.getElementById('mobile-menu-button');
const mobileCloseButton = document.getElementById('mobile-close-button');
const mobileMenu = document.getElementById('mobile-menu');
const menuIcon = document.getElementById('menu-icon');
const closeIcon = document.getElementById('close-icon');

function toggleMobileMenu() {
    mobileMenu.classList.toggle('hidden');
    menuIcon.classList.toggle('hidden');
    closeIcon.classList.toggle('hidden');
    
    if (!mobileMenu.classList.contains('hidden')) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = 'auto';
    }
}

function closeMobileMenu() {
    mobileMenu.classList.add('hidden');
    menuIcon.classList.remove('hidden');
    closeIcon.classList.add('hidden');
    document.body.style.overflow = 'auto';
}

mobileMenuButton.addEventListener('click', toggleMobileMenu);
mobileCloseButton.addEventListener('click', closeMobileMenu);

const mobileNavLinks = mobileMenu.querySelectorAll('a');
mobileNavLinks.forEach(link => {
    link.addEventListener('click', closeMobileMenu);
});

window.addEventListener('resize', () => {
    if (window.innerWidth >= 768) {
        closeMobileMenu();
    }
});

const mobileFeaturesToggle = document.getElementById('mobile-features-toggle');
const mobileFeaturesMenu = document.getElementById('mobile-features-menu');
const mobileFeaturesArrow = document.getElementById('mobile-features-arrow');

const mobileServicesToggle = document.getElementById('mobile-services-toggle');
const mobileServicesMenu = document.getElementById('mobile-services-menu');
const mobileServicesArrow = document.getElementById('mobile-services-arrow');

function toggleMobileDropdown(menu, arrow) {
    menu.classList.toggle('hidden');
    arrow.classList.toggle('rotate-180');
}

mobileFeaturesToggle.addEventListener('click', () => {
    toggleMobileDropdown(mobileFeaturesMenu, mobileFeaturesArrow);
});

mobileServicesToggle.addEventListener('click', () => {
    toggleMobileDropdown(mobileServicesMenu, mobileServicesArrow);
});