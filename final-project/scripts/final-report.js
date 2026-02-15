document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("register");
    const timeInput = document.getElementById("timestamp");

    form.addEventListener("submit", () => {

        // Create timestamp
        const now = new Date().toLocaleString();
        timeInput.value = now;

        // Collect form data
        const formData = {
            firstName: document.getElementById("first-name").value,
            lastName: document.getElementById("last-name").value,
            email: document.getElementById("email").value,
            phone: document.getElementById("phoneNumber").value,
            description: document.getElementById("Description").value,
            timestamp: now
        };

        // Save to Local Storage
        localStorage.setItem("trainingRegistration", JSON.stringify(formData));
    });
});
