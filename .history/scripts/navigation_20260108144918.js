const hamButton = document.getElementById(`ham-btn`);
const navMenu = document.getElementById('');

hamButton.addEventListener('click', () => {
    navMenu.classList.toggle('show');
    hamButton.classList.toggle('show');
});