const data = {
            "members": [
                {"name": "Havard Cinema", "address": "123 Innovation Drive, Benin City, Nigeria", "phone": "+123 456 7890", "imageUrl": "images/myhero.jpg", "membershipLevel": "Gold"},
                {"name": "Tech Solutions", "address": "456 Enterprise Ave, Business Town Benin City, Nigeria", "phone": "+987 654 3210", "imageUrl": "images/website-image.jpg", "membershipLevel": "Silver"},
                {"name": "Green Gardens", "address": "789 Greens, Benin City, Nigeria", "phone": "+234 9234 5673", "imageUrl": "images/tour-images-2.jpg", "membershipLevel": "Bronze"},
                {"name": "Blue Ocean", "address": "321 Ocean Drive, Benin City, Nigeria", "phone": "+234 9087 6543", "imageUrl": "images/aganufa-ashionye.jpg", "membershipLevel": "Gold"},
                {"name": "Sunrise Bakery", "address": "654 Sunrise St, Benin City, Nigeria", "phone": "+234 9123 4567", "imageUrl": "images/Nigeria-flag.jpg", "membershipLevel": "Silver"},
                {"name": "City Fitness", "address": "987 Fitness Ave, Benin City, Nigeria", "phone": "+234 9345 6789", "imageUrl": "images/enudi-chukwuka.jpg", "membershipLevel": "Bronze"},
                {"name": "Nobles Kitchen", "address": "159 Event Blvd, Benin City, Nigeria", "phone": "+234 9456 7890", "imageUrl": "images/ourfood.jpg", "membershipLevel": "Gold"}
            ]
        };

        const container = document.getElementById('members-container');

        // 1️⃣ Filter Gold & Silver members
        const filteredMembers = data.members.filter(member => 
            member.membershipLevel === "Gold" || member.membershipLevel === "Silver"
        );

        // 2️⃣ Shuffle the filtered members randomly
        const shuffledMembers = filteredMembers.sort(() => 0.5 - Math.random());

        // 3️⃣ Pick the first 2 members
        const selectedMembers = shuffledMembers.slice(0, 2);

        // 4️⃣ Display the selected members
        selectedMembers.forEach(member => {
            const card = document.createElement('div');
            card.classList.add('member-card');
            card.innerHTML = `
                <img src="${member.imageUrl}" alt="${member.name}">
                <h2>${member.name}</h2>
                <p><strong>Address:</strong> ${member.address}</p>
                <p><strong>Phone:</strong> ${member.phone}</p>
                <p><strong>Membership:</strong> ${member.membershipLevel}</p>
            `;
            container.appendChild(card);
        });