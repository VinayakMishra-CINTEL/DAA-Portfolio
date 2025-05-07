// Hamburger menu toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    hamburger.classList.toggle('active');
});

// Form validation and submission
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', function(event) {
    event.preventDefault();

    // Clear previous error styles
    const inputs = contactForm.querySelectorAll('input, textarea');
    inputs.forEach(input => {
        input.style.borderColor = '#bdc3c7';
    });

    let valid = true;

    // Validate each field
    if (!contactForm.name.value.trim()) {
        contactForm.name.style.borderColor = 'red';
        valid = false;
    }
    if (!contactForm.email.value.trim() || !validateEmail(contactForm.email.value.trim())) {
        contactForm.email.style.borderColor = 'red';
        valid = false;
    }
    if (!contactForm.message.value.trim()) {
        contactForm.message.style.borderColor = 'red';
        valid = false;
    }

    if (valid) {
        alert('Thank you for reaching out!');
        contactForm.reset();
    } else {
        alert('Please fill in all fields correctly.');
    }
});

function validateEmail(email) {
    // Simple email regex validation
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}
