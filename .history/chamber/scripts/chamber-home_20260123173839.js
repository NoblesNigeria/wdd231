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
Optional: Add styling (recommended ✨)
css
Copy code
.member-card.gold {
    border: 2px solid gold;
    background-color: #fff7d6;
}

.member-card.silver {
    border: 2px solid silver;
    background-color: #f4f4f4;
}
How this works
Math.random() returns a number between 0 and 1

< 0.5 → Gold

>= 0.5 → Silver

Every refresh = new random result

Want more control?
I can also help you:

Weight it (e.g. 70% Silver, 30% Gold)

Store the random level per session

Filter by Gold/Silver

Add badges/icons 🥇🥈

Just say the word 👌







