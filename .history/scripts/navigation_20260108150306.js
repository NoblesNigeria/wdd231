const hamButton = document.getElementById(`ham-btn`);
const navMenu = document.getElementById('nav-list');

hamButton.addEventListener('click', () => {
    navMenu.classList.toggle('show');
    
});