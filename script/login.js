const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

registerBtn.addEventListener('click', () => {
    container.classList.add("active");
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});

document.addEventListener("DOMContentLoaded", function () {
    const signupForm = document.getElementById("signup-form");

    function isValidEmail(email) {
        const atIndex = email.indexOf('@');
        if (atIndex === -1) return false;
        
        const dotIndex = email.indexOf('.', atIndex);
        return dotIndex > atIndex;
    }

    signupForm.addEventListener("submit", function (event) {
        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value;
        const ageValue = document.getElementById("age").value;
        const age = parseInt(ageValue);
        const genderChecked = document.querySelector('input[name="gender"]:checked');

        if (name.length < 2) {
            alert("Name must be at least 2 characters long.");
            event.preventDefault();
            return;
        }

        if (!isValidEmail(email)) {
            alert("Please enter a valid email address");
            event.preventDefault();
            return;
        }

        if (password.length < 6) {
            alert("Password must be at least 6 characters long.");
            event.preventDefault();
            return;
        }

        if (isNaN(age) || age < 13) {
            alert("You must be at least 13 years old to register.");
            event.preventDefault();
            return;
        }

        if (!genderChecked) {
            alert("Please select your gender.");
            event.preventDefault();
            return;
        }

        alert("Registration successful!");
    });



    const signinForm = document.getElementById("signin-form");

    signinForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const email = document.getElementById("signin-email").value.trim();
        const password = document.getElementById("signin-password").value;

        if (!isValidEmail(email)) {
            alert("Please enter a valid email address");
            return;
        }

        if (password.length < 6) {
            alert("Password must be at least 6 characters.");
            return;
        }

        // Redirect jika valid
        window.location.href = "index.html";
    });
});