const params = new URLSearchParams(window.location.search);

    document.getElementById("fullname").textContent =
        params.get("fullname") || "Not provided";

    document.getElementById("email").textContent =
        params.get("email") || "Not provided";

    document.getElementById("membership").textContent =
        params.get("membership") || "Not provided";


        

