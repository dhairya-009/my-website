alert("JS loaded");

function toggleMode() {
    document.body.classList.toggle("light-mode");

    let btn = document.getElementById("modeBtn");

    if (document.body.classList.contains("light-mode")) {
        btn.innerText = "🌞";
    } else {
        btn.innerText = "🌙";
    }
}
