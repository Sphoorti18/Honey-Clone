document.addEventListener('DOMContentLoaded', function () {
    // Get the sign-up form
    const signupForm = document.getElementById('signup-form');

    // Add event listener for form submission
    signupForm.addEventListener('submit', function (event) {
        // Prevent the default form submission behavior
        event.preventDefault();

        // Get the username, email, and password input values
        const username = document.getElementById('username').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        // Basic form validation
        if (username.trim() === '' || email.trim() === '' || password.trim() === '') {
            alert('Please enter all required fields.');
        } else {
            // For demonstration purposes, we'll just log the username, email, and password
            console.log('Username:', username);
            console.log('Email:', email);
            console.log('Password:', password);
            // You can perform further actions like sending the data to a server for authentication
            // Example: You can use fetch() or XMLHttpRequest to send the data to a server
        }
    });
});
