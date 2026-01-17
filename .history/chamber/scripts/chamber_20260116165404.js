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
    s.forEach((prophet) => {
        let card = document.createElement('section');
        let h2 = document.createElement('h2');
        let dob = document.createElement('p');
        let pob = document.createElement('p');
        let img = document.createElement('img');
        h2.textContent = `${prophet.name} ${prophet.lastname}`;
        dob.textContent = `Date of Birth: ${prophet.birthdate}`;
        pob.textContent = `Place of Birth: ${prophet.birthplace}`;
        img.setAttribute('src', prophet.imageurl);
        img.setAttribute('alt', `Portrait of ${prophet.name} ${prophet.lastname} - ${prophet.order} Latter-day President`);
        card.appendChild(h2);
        card.appendChild(dob);
        card.appendChild(pob);
        card.appendChild(img);
        cards.appendChild(card);
    });
}