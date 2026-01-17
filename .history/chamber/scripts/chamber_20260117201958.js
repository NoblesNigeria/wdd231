const details = '/data/members.json';
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

// DISPLAY MEMBERS
function displayDetails(members) {
    cards.innerHTML = ''; // 🔥 clear cards before display

    members.forEach(member => {
        const card = document.createElement('section');
        card.classList.add('member-card'); // ✅ correct class

        const h2 = document.createElement('h2');
        h2.textContent = member.name;

        const img = document.createElement('img');
        img.src = member.imageUrl;
        img.alt = member.name;
        img.loading = 'lazy';

        const address = document.createElement('p');
        address.textContent = `Address: ${member.address}`;

        const phone = document.createElement('p');
        phone.textContent = `Phone: ${member.phone}`;

        const membershipLevel = document.createElement('p');
        membershipLevel.textContent = `Membership Level: ${member.membershipLevel}`;

        card.append(h2, img, address, phone, membershipLevel);
        cards.appendChild(card);
    });
}

// FILTER BUTTONS
document.querySelectorAll('button[data-level]').forEach(button => {
    button.addEventListener('click', () => {
        const level = button.dataset.level;

        if (level === 'All') {
            displayDetails(allMembers);
        } else {
            const filtered = allMembers.filter(
                member => member.membershipLevel === level
            );
            displayDetails(filtered);
        }
    });
});


const ham = document.querySelector('#ham-btn');
const nav = document.querySelector('#navigation');
ham.addEventListener('click', () => {
    nav.classList.toggle('show');
    ham.classList.toggle('show');
});



const schedule = document.querySelector('.current-year');
schedule.textContent = new Date().getFullYear();

const updateDate = document.querySelector('#lastModified');
updateDate.textContent = `Last Modified: ${document.lastModified}`;


