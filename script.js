// Toggle Dark/Light Mode
const btn = document.getElementById("modeBtn");

btn.addEventListener("click", () => {
    document.body.classList.toggle("light-mode");

    if (document.body.classList.contains("light-mode")) {
        btn.innerText = "🌞";
    } else {
        btn.innerText = "🌙";
    }
});

// Button Alert
function showMessage() {
    alert("🔥 Welcome to my advanced website!");
}

// Typing Effect
let text = "Just a little project, for fun 🚀";
let i = 0;

function typeEffect() {
    if (i < text.length) {
        document.getElementById("typing").innerHTML += text.charAt(i);
        i++;
        setTimeout(typeEffect, 50);
    }
}

typeEffect();
