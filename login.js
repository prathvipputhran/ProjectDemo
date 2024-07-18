document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("loginForm");

    form.addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent the form from submitting

        // Fetch input values
        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;

        // You can add validation here if needed

        // Example: Simple validation (just checking if fields are not empty)
        if (username.trim() === "" || password.trim() === "") {
            alert("Please enter both username and password.");
            return;
        }

        // Here you can handle form submission, e.g., sending data to a server
        // For demonstration purposes, let's just log the values
        console.log("Username:", username);
        console.log("Password:", password);

        // Optionally, you can redirect the user to another page after successful login
        // window.location.href = "dashboard.html";
    });
});

