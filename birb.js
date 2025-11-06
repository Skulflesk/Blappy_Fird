



// Background image


// Character object (Birb)
export class Birb {

    x = 50;
    y = 50;
    canvas;
    pencil;



    constructor(canvas, pencil) {
        this.canvas = canvas;
        this.pencil = pencil;
    }
    draw() {
        // Draw the original rectangle
        this.pencil.fillStyle = "#cc0000ff";
       this.pencil.fillRect(
        this.x,
        this.y,
        this.width,
        this.height,
       );
        




// let birb = {
//     x: 50,
//     y: 50,
//     width: 100,
//     height: 100,
//     speed: 5,
//     upKey: "w",
//     downKey: "s",
//     sprite: document.getElementById("Birb"), // single image from Birb folder

//     draw: function() {
//         pencil.drawImage(this.sprite, this.x, this.y, this.width, this.height);
//     },

//     move: function(keysPressed) {
//         if (keysPressed[this.upKey]) this.y -= this.speed;
//         if (keysPressed[this.downKey]) this.y += this.speed;

//         // Keep Birb inside canvas vertically
//         this.y = Math.max(0, Math.min(this.y, canvas.height - this.height));
//     }
// };

// // Track pressed keys
// let keysPressed = {};
// window.addEventListener("keydown", e => keysPressed[e.key.toLowerCase()] = true);
// window.addEventListener("keyup", e => keysPressed[e.key.toLowerCase()] = false);

// // Game loop
// function gameLoop() {
//     pencil.clearRect(0, 0, canvas.width, canvas.height);
//     pencil.drawImage(background, 0, 0, canvas.width, canvas.height);

//     birb.move(keysPressed);
//     birb.draw();
// }

// // Run the game loop every 50ms
// setInterval(gameLoop, 50);