const menuTrigger = document.querySelector('.menu-trigger');
const navigationDrawer = document.querySelector('.nav-drawer');

if (menuTrigger && navigationDrawer) {
    menuTrigger.innerHTML = '<button class="exp-hamburger" aria-expanded="false">Menu</button>';

    menuTrigger.addEventListener('click', function() {
        navigationDrawer.classList.toggle('is-open');
        const button = menuTrigger.querySelector('.exp-hamburger');
        if (button) {
            var isExpanded = button.getAttribute('aria-expanded') === 'true';
            button.setAttribute('aria-expanded', isExpanded ? 'false' : 'true');
        }
    });
}
