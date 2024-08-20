const texts = ["Healthy", "Refreshing", "Natural", "Invigorating"];
let index = 0;

function changeText() {
    index = (index + 1) % texts.length;
    document.getElementById("rotating-text").textContent = texts[index];
}

setInterval(changeText, 1500);