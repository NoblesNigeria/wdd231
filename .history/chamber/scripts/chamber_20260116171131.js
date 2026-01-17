const details='./data/prophets.json';
const cards= document.querySelector('#cards');
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
        let phon = document.createElement('p');
        let img = document.createElement('img');
        h2.textContent = `${member.name}`;
        img.setAttribute('src', images.image-url);
        img.setAttribute('alt', `${member.name}`);
        card.appendChild(h2);
        card.appendChild(dob);
        card.appendChild(pob);
        card.appendChild(img);
        cards.appendChild(card);
    });
}