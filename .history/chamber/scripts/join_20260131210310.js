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


const gold= document.getElementById('gold');
const goldBenefits= document.getElementById('gold-benefits');
const closeGold= document.getElementById('close-gold');

gold.addEventListener("click", () => {
    goldBenefits.showModal();
});

closeGold.addEventListener("click", () => {
    goldBenefits.close();
});


const silver= document.getElementById('silver');
const silverBenefits= document.getElementById('silver-benefits');
const closeSilver= document.getElementById('close-silver');

silver.addEventListener("click", () => {
    silverBenefits.showModal();
});

closeSilver.addEventListener("click", () => {
    silverBenefits.close();
});

const bronze= document.getElementById('bronze');
const bronzeBenefits= document.getElementById('bronze-benefits');
const closeBronze= document.getElementById('close-bronze');

bronze.addEventListener("click", () => {
    bronzeBenefits.showModal();
});

closeBronze.addEventListener("click", () => {
    bronzeBenefits.close();
});


const npo= document.getElementById('npo-benefits');
const bronzeBenefits= document.getElementById('bronze-benefits');
const closeBronze= document.getElementById('close-bronze');

bronze.addEventListener("click", () => {
    bronzeBenefits.showModal();
});

closeBronze.addEventListener("click", () => {
    bronzeBenefits.close();
});

