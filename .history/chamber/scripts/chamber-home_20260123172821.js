const details = './data/members.json';
const cards = document.querySelector('#directory-entries');

let allMembers = [];

/* -----------------------------
   HELPER: SHUFFLE ARRAY
--------------------------------*/
function shuffleArray(array) {
    return array.sort(() => Math.random() - 0.5);
}

/* -----------------------------
   FETCH DATA (ONCE)
--------------------------------*/
async function getDetails() {
    const response = await fetch(details);
    const data = await response.json();
    allMembers = data.members;

    // 🎯 Gold & Silver only
    const goldSilverMembers = allMembers.filter(
        member =>
            member.membershipLevel === 'Gold' ||
            member.membershipLevel === 'Silver'
    );

    // 🔀 Randomize order
    const randomMembers = shuffleArray(goldSilverMembers);

    // 🚀 Display on initial load
    displayDetails(randomMembers);
}

getDetails();

/* -----------------------------
   DISPLAY MEMBERS
--------------------------------*/
function displayDetails(members) {
    cards.innerHTML = ''; // clear previous cards

    members.forEach(member => {
        const card = document.createElement('section');
        card.classList.add('member-card');

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

/* -----------------------------
   FILTER BUTTONS
--------------------------------*/
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
