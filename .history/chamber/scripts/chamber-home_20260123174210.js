const details = './data/members.json';
const cards = document.querySelector('#directory-entries');

let allMembers = [];

// FETCH DATA ONCE
async function getDetails() {
    const response = await fetch(details);
    const data = await response.json();
    allMembers = data.members;
    displayDetails(allMembers);
}

getDetails();

function displayDetails(members) {
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
displayDetails();