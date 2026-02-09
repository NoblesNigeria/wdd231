
const ham = document.querySelector('#ham-btn');
const nav = document.querySelector('#navigation');
ham.addEventListener('click', () => {
    nav.classList.toggle('show');
    ham.classList.toggle('show');
});



const schedule = document.querySelector('.current-year');
schedule.textContent = new Date().getFullYear();

const updateDate = document.querySelector('.lastModified');
updateDate.textContent = `Last Modified: ${document.lastModified}`;


