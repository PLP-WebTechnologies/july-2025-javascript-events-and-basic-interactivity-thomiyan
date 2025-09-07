// ========== 1. THEME TOGGLE (Light/Dark Mode) ==========
const themeToggleBtn = document.getElementById('theme-toggle');
themeToggleBtn.addEventListener('click', () => {
    // Toggle dark mode by adding/removing a class on body
    document.body.classList.toggle('dark-mode');
    // Update button text
    if (document.body.classList.contains('dark-mode')) {
        themeToggleBtn.textContent = 'Switch to Light Mode';
    } else {
        themeToggleBtn.textContent = 'Switch to Dark Mode';
    }
});

// ========== 2. CLICK COUNTER ==========
let count = 0;
const countBtn = document.getElementById('count-btn');
const countDisplay = document.getElementById('count-display');

countBtn.addEventListener('click', () => {
    count++;
    countDisplay.textContent = count;
});

// ========== 3. COLLAPSIBLE FAQ ==========
const faqQuestions = document.querySelectorAll('.faq-question');

faqQuestions.forEach((btn) => {
    btn.addEventListener('click', () => {
        // Toggle next sibling (the answer)
        const answer = btn.nextElementSibling;
        if (answer.style.display === 'block') {
            answer.style.display = 'none';
        } else {
            answer.style.display = 'block';
        }
    });
});

// ========== 4. FORM VALIDATION ==========
const form = document.getElementById('contact-form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const nameError = document.getElementById('name-error');
const emailError = document.getElementById('email-error');
const passwordError = document.getElementById('password-error');
const formSuccess = document.getElementById('form-success');

// Helper validation functions
function validateName(name) {
    return name.trim().length >= 4;
}

function validateEmail(email) {
    // Simple email regex
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function validatePassword(password) {
    // At least 6 characters, at least one number
    return /^(?=.*\d).{6,}$/.test(password);
}

// Show/hide error messages on input
nameInput.addEventListener('input', () => {
    if (!validateName(nameInput.value)) {
        nameError.textContent = 'Name must be at least 4 characters.';
    } else {
        nameError.textContent = '';
    }
});
emailInput.addEventListener('input', () => {
    if (!validateEmail(emailInput.value)) {
        emailError.textContent = 'Enter a valid email address.';
    } else {
        emailError.textContent = '';
    }
});
passwordInput.addEventListener('input', () => {
    if (!validatePassword(passwordInput.value)) {
        passwordError.textContent = 'Password must be 6+ chars and contain a number.';
    } else {
        passwordError.textContent = '';
    }
});

// Validate on submit
form.addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent actual submission

    let valid = true;

    // Name check
    if (!validateName(nameInput.value)) {
        nameError.textContent = 'Name must be at least 4 characters.';
        valid = false;
    } else {
        nameError.textContent = '';
    }

    // Email check
    if (!validateEmail(emailInput.value)) {
        emailError.textContent = 'Enter a valid email address.';
        valid = false;
    } else {
        emailError.textContent = '';
    }

    // Password check
    if (!validatePassword(passwordInput.value)) {
        passwordError.textContent = 'Password must be 6+ chars and contain a number.';
        valid = false;
    } else {
        passwordError.textContent = '';
    }

    if (valid) {
        formSuccess.textContent = 'Form submitted successfully! 🎉';
        form.reset();
        // Optionally clear errors after successful submission
        setTimeout(() => {
            formSuccess.textContent = '';
        }, 3000);
    } else {
        formSuccess.textContent = '';
    }
});