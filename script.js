document.addEventListener('DOMContentLoaded', function () {
    // Get the login form
    const loginForm = document.getElementById('login-form');

    // Add event listener for form submission
    loginForm.addEventListener('submit', function (event) {
        // Prevent the default form submission behavior
        event.preventDefault();

        // Get the username and password input values
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        // Basic form validation
        if (username.trim() === '' || password.trim() === '') {
            alert('Please enter both username and password.');
        } else {
            // For demonstration purposes, we'll just log the username and password
            console.log('Username:', username);
            console.log('Password:', password);
            // You can perform further actions like sending the data to a server for authentication
            // Example: You can use fetch() or XMLHttpRequest to send the data to a server
        }
    });
});
