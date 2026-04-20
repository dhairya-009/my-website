function showMessage() {
    alert("🔥 Welcome to my advanced website!");
}

function toggleMode() {
    document.body.classList.toggle("light-mode");

    let btn = document.getElementById("modeBtn");

    if (document.body.classList.contains("light-mode")) {
        btn.innerText = "🌞";
    } else {
        btn.innerText = "🌙";
    }
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
