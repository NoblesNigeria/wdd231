const details = '/data/members.json';
const cards = document.querySelector('#directory-entries');

async function getDetails() {
    const response = await fetch(details);
    const data = await response.json();
    displayDetails(data.members);
}
getDetails();

function displayDetails(members) {
    members.forEach(member => {
        const card = document.createElement('section');
        card.classList.add('#directory-entries');

        const h2 = document.createElement('h2');
        h2.textContent = member.name;

        const address = document.createElement('p');
        address.textContent = `Address: ${member.address}`;

        const phone = document.createElement('p');
        phone.textContent = `Phone: ${member.phone}`;

        const img = document.createElement('img');
        img.src = member.imageUrl;
        img.alt = member.name;
        img.loading = 'lazy';
        const membershipLevel = document.createElement('p');
        membershipLevel.textContent = `Membership Level: ${member["membershipLevel"]}`;

        card.append(h2, img, address, phone, membershipLevel);
        cards.appendChild(card);
    });
}
let allMembers = [];

async function getDetails() {
    const response = await fetch(details);
    const data = await response.json();
    allMembers = data.members;
    displayDetails(allMembers);
}

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

displayDetails(members)