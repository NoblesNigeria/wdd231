const hamButton = document.getElementById(`.hamburger`);
const navMenu = document.getElementById('better');
hamButton.addEventListener('click', () => {
    navMenu.classList.toggle('show');
    hamButton.classList.toggle('show');
});