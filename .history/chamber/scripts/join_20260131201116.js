document.getElementById('timestamp').value =
  new Date().toLocaleString('en-GB');



const membershipCard = {
    cards: [
        { name: "Gold", participation: "Co-founder", title: "Board member" },
        { name: "Silver", participation: "Patron", title: "Board member" },
        { name: "Bronze", participation: "Financial member", title: "Member" },
        { name: "NPO", participation: "Non-financial member", title: "Volunteer" }
    ]
};

const cardContainer = document.getElementById("card");
const buttons = document.querySelectorAll("button[data-level]");

buttons.forEach(button => {
    button.addEventListener("click", () => {
        const level = button.dataset.level;
        const card = membershipCard.cards.find(c => c.name === level);

        cardContainer.innerHTML = `
            <h2>${card.name} Membership</h2>
            <p><strong>Participation:</strong> ${card.participation}</p>
            <p><strong>Title:</strong> ${card.title}</p>
        `;

        cardContainer.className = `membership-card ${card.name.toLowerCase()}`;
    });
});


const gold=document.getElementById('gold');


