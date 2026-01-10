const hamButton = document.getElementById(`ham-btn`);
const navMenu = document.getElementById('better');
const navList = document.getElementById('nav-list');
hamButton.addEventListener('click', () => {
    navMenu.classList.toggle('show');
    hamButton.classList.toggle('show');
    
});