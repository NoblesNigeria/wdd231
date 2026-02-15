
const details = './data/final.json';
const cards = document.querySelector('#directory-entries');

let allGallery = [];

// Wait for DOM to load
document.addEventListener('DOMContentLoaded', () => {
    getDetails();
});

// Fetch data
async function getDetails() {
    try {
        const response = await fetch(details);

        // Check if request was successful
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();

        // Make sure gallery exists
        if (!data.gallery || !Array.isArray(data.gallery)) {
            throw new Error('Invalid JSON format: "gallery" not found');
        }

        allGallery = data.gallery;

        displayDetails(allGallery);

    } catch (error) {
        console.error('Error loading gallery:', error);
        cards.innerHTML = '<p>Failed to load gallery data.</p>';
    }
}

// Display members
function displayDetails(gallery) {
    cards.innerHTML = ''; // Clear cards

    gallery.forEach(member => {
        const card = document.createElement('section');
        card.classList.add('member-card');

        const h2 = document.createElement('h2');
        h2.textContent = member.name || 'No Name';

        const img = document.createElement('img');
        img.src = member.image || 'images/placeholder.jpg';
        img.alt = member.name || 'Gallery image';
        img.loading = 'lazy';

        const description = document.createElement('p');
        description.textContent = member.description

        card.append(h2, img, description);
        cards.appendChild(card);
    });
}

const ham = document.querySelector('#ham-btn');
const nav = document.querySelector('#navigation');
ham.addEventListener('click', () => {
    nav.classList.toggle('show');
    ham.classList.toggle('show');
});



const notify= document.getElementById('notification');
const inform= document.getElementById('info');
const signUp= document.getElementById('sign-up');

notify.addEventListener("click", () => {
    inform.showModal();
});

signUp.addEventListener("click", () => {
    inform.close();
});


