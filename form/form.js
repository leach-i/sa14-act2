const form = document.getElementById('registration-form');
const usernameInput = document.getElementById('username');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const successMessage = document.getElementById('success-message');

const usernameError = document.getElementById('username-error');
const emailError = document.getElementById('email-error');
const passwordError = document.getElementById('password-error');

function validateUsername() {
    const username = usernameInput.value.trim();
    if (username.length < 6) {
        usernameError.textContent = 'Username must be at least 6 characters long.';
        return false;
    } else {
        usernameError.textContent = '';
        return true;
    }
}

function validateEmail() {
    const email = emailInput.value.trim();
    
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (!emailPattern.test(email)) {
        emailError.textContent = 'Please enter a valid email address. It should contain an "@" and a "." in the domain.';
        return false;
    } else {
        emailError.textContent = '';
        return true;
    }
}

function validatePassword() {
    const password = passwordInput.value;
    const passwordPattern = /^(?=.*[A-Z])(?=.*\d).{8,}$/;
    if (!passwordPattern.test(password)) {
        passwordError.textContent = 'Password must be at least 8 characters long and contain at least one capital letter and one number.';
        return false;
    } else {
        passwordError.textContent = '';
        return true;
    }
}

usernameInput.addEventListener('input', validateUsername);
emailInput.addEventListener('input', validateEmail);
passwordInput.addEventListener('input', validatePassword);

form.addEventListener('submit', function (e) {
    e.preventDefault(); 

    const isUsernameValid = validateUsername();
    const isEmailValid = validateEmail();
    const isPasswordValid = validatePassword();

    if (isUsernameValid && isEmailValid && isPasswordValid) {
        form.reset();
        successMessage.style.display = 'block';
    }
});
