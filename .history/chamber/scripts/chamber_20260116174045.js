const details = 'data/members.json';
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
        card.classList.add('member-card');

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
        const membersh

        card.append(h2, img, address, phone);
        cards.appendChild(card);
    });
}