document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("loginForm");

    form.addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent the form from submitting

        // Fetch input values
        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;

        // Example: Simple validation (just checking if fields are not empty)
        if (username.trim() === "" || password.trim() === "") {
            alert("Please enter both username and password.");
            return;
        }

        // Simulate successful login (replace with actual authentication logic)
        // For demo, always consider it successful
        // In real scenario, you would make an AJAX call to validate credentials
        const isLoggedIn = true;
        localStorage.setItem('isLoggedIn', isLoggedIn);

        // Redirect to sum.html after successful login
        window.location.href = "sum.html";
    });
});
