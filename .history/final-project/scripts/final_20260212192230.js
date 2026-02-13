
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


const details = './data/final.json';
const cards = document.querySelector('#directory-entries');

let allGallery = [];

// FETCH DATA ONCE
async function getDetails() {
    const response = await fetch(details);
    const data = await response.json();
    all = data.gallery;
    displayDetails(allGallery);
}

getDetails()

// DISPLAY MEMBERS
function displayDetails(gallery) {
    cards.innerHTML = ''; // 🔥 clear cards before display

    gallery.forEach(member => {
        const card = document.createElement('section');
        card.classList.add('member-card'); // ✅ correct class

        const h2 = document.createElement('h2');
        h2.textContent = member.name;

        const img = document.createElement('img');
        img.src = member.imageUrl;
        img.alt = member.name;
        img.loading = 'lazy';

        const address = document.createElement('p');
        address.textContent = `description: ${member.description}`;

        card.append(h2, img, description);
        cards.appendChild(card);
    });
}

