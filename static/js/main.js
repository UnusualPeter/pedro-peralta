const barsButton = document.getElementById('mobile-menu-button');
const closeButton = document.getElementById('mobile-menu-close');
const mobileMenu = document.getElementById('menu')

barsButton.addEventListener('click', e => {
    e.preventDefault();

    mobileMenu.classList.add('open-nav');
});

closeButton.addEventListener('click', e => {
    e.preventDefault();

    mobileMenu.classList.remove('open-nav');
});

hljs.initHighlightingOnLoad();