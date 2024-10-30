
function login() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    
    if (username === "customer" && password === "password123") {
        alert("Login successful!");
        localStorage.setItem("isLoggedIn", "true"); // Save login status
        window.location.href = "cars.html"; // Redirect to car listing page
    } else {
        alert("Invalid login. Please try again.");
    }
}

function logout() {
    localStorage.removeItem("isLoggedIn"); // Clear login status
    alert("You have logged out successfully.");
    window.location.href = "index.html"; // Redirect to the homepage or login page
}



