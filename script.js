document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contact-form');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the default form submission

        // Show a thank you message
        alert('Thank you for your message!');

        // Reset the form fields
        this.reset();
    });
});
