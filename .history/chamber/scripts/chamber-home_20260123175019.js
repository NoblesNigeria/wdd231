const details = './data/members.json';
const cards = document.querySelector('#directory-entries');

let allMembers = [];

// FETCH DATA ONCE
async function getDetails() {
    const response = await fetch(details);
    const data = await response.json();
    allMembers = data.members;
    
    // Shuffle members randomly
    const shuffledMembers = shuffleArray(allMembers);
    displayDetails(shuffledMembers);
}
getDetails();

// FUNCTION TO SHUFFLE AN ARRAY
function shuffleArray(array) {
    return array
        .map(value => ({ value, sort: Math.random() }))
        .sort((a, b) => a.sort - b.sort)
        .map(({ value }) => value);
}

// DISPLAY MEMBERS
function displayDetails(members) {
    cards.innerHTML = ''; // Clear existing cards
    members.forEach(member => {
        const card = document.createElement('section');

        // RANDOM membership level on each page load
        const membershipLevel = Math.random() < 0.5 ? 'Gold' : 'Silver';

        card.classList.add('member-card', membershipLevel.toLowerCase());

        card.innerHTML = `
            <h2>${member.name}</h2>
            <p>${member.company}</p>
            <p class="membership">${membershipLevel} Member</p>
        `;

        cards.appendChild(card);
    });
}