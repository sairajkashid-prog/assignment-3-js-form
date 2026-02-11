function validateForm() {

    let valid = true;

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let phone = document.getElementById("phone").value.trim();
    let age = document.getElementById("age").value.trim();
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirmPassword").value;
    let terms = document.getElementById("terms").checked;

    document.querySelectorAll("small").forEach(e => e.innerText = "");

    if (name.length < 3) {
        document.getElementById("nameError").innerText = "Name must be at least 3 characters";
        valid = false;
    }

    let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!email.match(emailPattern)) {
        document.getElementById("emailError").innerText = "Enter a valid email address";
        valid = false;
    }

    if (!phone.match(/^[0-9]{10}$/)) {
        document.getElementById("phoneError").innerText = "Enter a valid 10-digit phone number";
        valid = false;
    }

    if (age < 18 || age > 100) {
        document.getElementById("ageError").innerText = "Age must be between 18 and 100";
        valid = false;
    }

    let passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/;
    if (!password.match(passwordPattern)) {
        document.getElementById("passwordError").innerText =
            "Min 8 chars, uppercase, lowercase, number & symbol";
        valid = false;
    }

    if (password !== confirmPassword) {
        document.getElementById("confirmPasswordError").innerText = "Passwords do not match";
        valid = false;
    }

    if (!terms) {
        document.getElementById("termsError").innerText = "You must agree to the terms";
        valid = false;
    }

    if (valid) {
        alert("Registration Successful!");
    }

    return valid;
}
