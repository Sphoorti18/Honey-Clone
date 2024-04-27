// Function to display notifications
function displayNotification(type, message) {
    const notificationContainer = document.getElementById('notification-container');
    
    // Create notification element
    const notification = document.createElement('div');
    notification.classList.add('notification', type);
    notification.innerText = message;
    
    // Append notification to container
    notificationContainer.appendChild(notification);
    
    // Remove notification after 5 seconds
    setTimeout(() => {
        notification.remove();
    }, 5000);
}

// Example: Notify user when a price drop reminder is set
function setPriceDropReminder(productUrl, desiredPrice) {
    // Your logic to set price drop reminder goes here...
    // For demonstration, let's assume the reminder is set successfully
    displayNotification('info', `Price drop reminder set for ${productUrl} at ${desiredPrice}`);
}

// Example: Notify user when they sign up for coupon notifications
function signUpForCouponNotifications(email) {
    // Your logic to sign up for coupon notifications goes here...
    // For demonstration, let's assume the sign-up is successful
    displayNotification('success', `You've successfully signed up for coupon notifications at ${email}`);
}

// Example usage
document.addEventListener('DOMContentLoaded', function() {
    // Trigger notifications
    setPriceDropReminder('https://example.com/product', '$50');
    signUpForCouponNotifications('example@example.com');
});
