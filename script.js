const password = document.getElementById("password");
const strengthBar = document.getElementById("strength");
const result = document.getElementById("result");
const tips = document.getElementById("tips");

password.addEventListener("input", () => {

    let score = 0;
    let suggestions = [];

    const pwd = password.value;

    if (pwd.length >= 8) {
        score += 20;
    } else {
        suggestions.push("Use at least 8 characters");
    }

    if (/[A-Z]/.test(pwd)) {
        score += 20;
    } else {
        suggestions.push("Add uppercase letters");
    }

    if (/[a-z]/.test(pwd)) {
        score += 20;
    } else {
        suggestions.push("Add lowercase letters");
    }

    if (/[0-9]/.test(pwd)) {
        score += 20;
    } else {
        suggestions.push("Add numbers");
    }

    if (/[^A-Za-z0-9]/.test(pwd)) {
        score += 20;
    } else {
        suggestions.push("Add special characters");
    }

    strengthBar.style.width = score + "%";

    if (score <= 40) {
        strengthBar.style.background = "red";
        result.innerText = "Weak Password";
    } else if (score <= 80) {
        strengthBar.style.background = "orange";
        result.innerText = "Medium Password";
    } else {
        strengthBar.style.background = "green";
        result.innerText = "Strong Password";
    }

    tips.innerHTML = "";

    suggestions.forEach(item => {
        let li = document.createElement("li");
        li.textContent = item;
        tips.appendChild(li);
    });const toggleBtn = document.getElementById("toggleBtn");

toggleBtn.addEventListener("click", () => {
    if (password.type === "password") {
        password.type = "text";
        toggleBtn.textContent = "Hide Password";
    } else {
        password.type = "password";
        toggleBtn.textContent = "Show Password";
    }
});
    
});
