var MAX_LOGIN_ATTEMPTS = 5;
var LOCKOUT_DURATION = 5 * 60 * 1000; // 5 minutes in milliseconds
var loginAttempts = {};

var messageBox = document.getElementById("message-box");

document.getElementById("login-form").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission

    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    if (isAccountLocked(email)) {
        showMessage("Account locked. Please try again later.", "error");
        return;
    }

    // Perform authentication
    var isAuthenticationSuccessful = authenticateUser(email, password);

    if (isAuthenticationSuccessful) {
        // Successful authentication
        resetLoginAttempts(email);
        showMessage("Authentication successful. Redirecting...", "success");
        // Perform the redirect to the desired page
        setTimeout(function () {
            window.location.href = "dashboard.html"; // Redirect to the dashboard page
        }, 2500); // Delay for 3 seconds (3000 milliseconds) before redirecting
    } else {
        // Failed authentication
        incrementLoginAttempts(email);
        if (isMaxLoginAttemptsExceeded(email)) {
            lockAccount(email);
            showMessage("Account locked due to too many failed login attempts. Please try again later.", "error");
        } else {
            showMessage("Authentication failed. Please try again.", "error");
        }
    }
});

function showMessage(message, type) {
    var messageElement = document.createElement("div");
    messageElement.className = "message " + type;
    messageElement.textContent = message;
    messageBox.appendChild(messageElement);
    setTimeout(function () {
        messageElement.remove();
    }, 3000);
}

function authenticateUser(email, password) {
    // Replace with your authentication logic
    return email === "user@example.com" && password === "password123";
}

function incrementLoginAttempts(email) {
    if (!loginAttempts.hasOwnProperty(email)) {
        loginAttempts[email] = 0;
    }
    loginAttempts[email]++;
}

function resetLoginAttempts(email) {
    delete loginAttempts[email];
}

function isMaxLoginAttemptsExceeded(email) {
    return loginAttempts[email] >= MAX_LOGIN_ATTEMPTS;
}

function isAccountLocked(email) {
    if (!loginAttempts.hasOwnProperty(email)) {
        return false;
    }
    var lastAttemptTime = new Date().getTime() - LOCKOUT_DURATION;
    return loginAttempts[email] >= MAX_LOGIN_ATTEMPTS && lastAttemptTime < LOCKOUT_DURATION;
}

function lockAccount(email) {
    loginAttempts[email] = MAX_LOGIN_ATTEMPTS; // Lock the account
}
