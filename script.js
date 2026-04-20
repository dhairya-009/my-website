// DARK MODE SAVE + LOAD
const btn = document.getElementById("modeBtn");

// Load saved mode
if (localStorage.getItem("mode") === "light") {
    document.body.classList.add("light-mode");
    btn.innerText = "🌞";
}

// Toggle mode
btn.addEventListener("click", () => {
    document.body.classList.toggle("light-mode");

    if (document.body.classList.contains("light-mode")) {
        localStorage.setItem("mode", "light");
        btn.innerText = "🌞";
    } else {
        localStorage.setItem("mode", "dark");
        btn.innerText = "🌙";
    }
});

// LOADER
window.addEventListener("load", () => {
    document.getElementById("loader").classList.add("hidden");
});

// Typing effect (only runs if element exists)
let typing = document.getElementById("typing");
if (typing) {
    let text = "Just a little project, for fun 🚀";
    let i = 0;

    function typeEffect() {
        if (i < text.length) {
            typing.innerHTML += text.charAt(i);
            i++;
            setTimeout(typeEffect, 50);
        }
    }

    typeEffect();
}
