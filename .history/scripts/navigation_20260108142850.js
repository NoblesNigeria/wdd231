const hamButton = document.getElementById(`hamburger`);
const navMenu = document.getElementById('beta');
hamButton.addEventListener('click', () => {
    navMenu.classList.toggle('show');
    hamButton.classList.toggle('show');
});