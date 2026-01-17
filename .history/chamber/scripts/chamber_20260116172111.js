const details='data/members.json';
const cards= document.querySelector('#directory-entries');
async function getDetails() {
    const response = await fetch(details);
    const data = await response.json();
    console.table(data.members);
    displayProphets(data.members);
}
    getDetails();

const displayDetails = (members) => {
    members.forEach((member) => {
        let card = document.createElement('section');
        let h2 = document.createElement('h2');
        let address = document.createElement('p');
        let phone = document.createElement('p');
        let img = document.createElement('img');
        h2.textContent = `${member.name}`;
        address.textContent = `Address: ${member.address}`;
        phone.textContent = `Phone: ${member.phone}`;

        img.setAttribute('src', images.image-url);
        img.setAttribute('alt', `${member.name}`);
        card.appendChild(h2);
        card.appendChild(address);
        card.appendChild(phone);
        card.appendChild(img);
        cards.appendChild(card);
    });
}