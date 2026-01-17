const details = 'data/members.json';
const cards = document.querySelector('#directory-entries');

async function getDetails() {
    const response = await fetch(details);
    const data = await response.json();
    console.table(data.members);
    displayDetails(data.members);
}

getDetails();

const displayDetails = (members) => {
    members.forEach((member) => {
        const card = document.createElement('section');
        const h2 = document.createElement('h2');
        const address = document.createElement('p');
        const phone = document.createElement('p');
        const img = document.createElement('img');

        h2.textContent = member.name;
        address.textContent = `Address: ${member.address}`;
        phone.textContent = `Phone: ${member.phone}`;

        img.setAttribute('src', member.imageUrl); // <-- FIXED
        img.setAttribute('alt', member.name);
        img.setAttribute('loading', 'lazy');

        card.appendChild(h2);
        card.appendChild(address);
        card.appendChild(phone);
        card.appendChild(img);

        cards.appendChild(card);
    });
};