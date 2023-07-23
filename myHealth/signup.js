// Get the signup form element
const signupForm = document.getElementById("signup-form");

signupForm.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the form from submitting

    // Get the form values
    const firstname = document.getElementById("firstname").value;
    const lastname = document.getElementById("lastname").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const password = document.getElementById("password").value;
    const province = document.getElementById("province").value;
    const district = document.getElementById("district").value;
    const sector = document.getElementById("sector").value;
    const country = document.getElementById("country").value;
    const reenterpassword = document.getElementById("reenterpassword").value;

    const userData = {
        firstname,
        lastname,
        email,
        phone,
        password,
        province,
        district,
        sector,
        country,
        reenterpassword
    };

    // Validations
    if (!validateEmail(email)) {
        alert("Invalid email address");
        return;
    }

    if (!validatePhoneNumber(phone)) {
        alert("Invalid phone number");
        return;
    }

    if (password !== reenterpassword) {
        alert("Passwords do not match");
        return;
    }

    // Store data in local storage
    localStorage.setItem("userData", JSON.stringify(userData));

    // Redirect to login.html after successful submission
    window.location.href = "login.html";
});

// Email validation function using regex
function validateEmail(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}

// Phone number validation function using regex
function validatePhoneNumber(phone) {
    const phonePattern = /^\d{10}$/;
    return phonePattern.test(phone);
}
