import { Star } from "./star.js";

// === Setup Canvas ===
let canvas = document.getElementById("gameCanvas");
let pencil = canvas.getContext("2d");
let background = document.getElementById("background");

// === Birb ===
let birb = {
    x: 50,
    y: 50,
    width: 100,
    height: 100,
    speed: 5,
    upKey: "w",
    downKey: "s",
    leftKey: "a",
    rightKey: "d",
    sprite: document.getElementById("Birb"),

    draw: function() {
        pencil.drawImage(this.sprite, this.x, this.y, this.width, this.height);
    },
    move: function(keysPressed) {
        if (keysPressed[this.upKey]) this.y -= this.speed;
        if (keysPressed[this.downKey]) this.y += this.speed;
        if (keysPressed[this.leftKey]) this.x -= this.speed;
        if (keysPressed[this.rightKey]) this.x += this.speed;

        // Keep inside bounds
        this.x = Math.max(0, Math.min(this.x, canvas.width - this.width));
        this.y = Math.max(0, Math.min(this.y, canvas.height - this.height));
    }
};

// === Stars ===
let stars = [];
for (let i = 0; i < 20; i++) {
    let s = new Star(canvas, pencil);
    s.x = Math.random() * canvas.width;
    s.y = Math.random() * canvas.height;
    s.speedX = (Math.random() * 2) + 1;
    stars.push(s);
}

// === Input Tracking ===
let keysPressed = {};
window.addEventListener("keydown", e => keysPressed[e.key.toLowerCase()] = true);
window.addEventListener("keyup", e => keysPressed[e.key.toLowerCase()] = false);

// === Game Loop ===
function gameLoop() {
    pencil.clearRect(0, 0, canvas.width, canvas.height);
    pencil.drawImage(background, 0, 0, canvas.width, canvas.height);

    // Move & draw stars
    for (let s of stars) {
        s.x += s.speedX;
        if (s.x > canvas.width) s.x = 0;
        s.draw();
    }

    // Move & draw birb
    birb.move(keysPressed);
    birb.draw();
}

// === Run Game ===
setInterval(gameLoop, 50);
