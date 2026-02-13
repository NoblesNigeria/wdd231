
const ham = document.querySelector('#ham-btn');
const nav = document.querySelector('#navigation');
ham.addEventListener('click', () => {
    nav.classList.toggle('show');
    ham.classList.toggle('show');
});




