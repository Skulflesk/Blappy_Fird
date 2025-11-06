let canvas = document.getElementById("myCanvas");
let pencil = canvas.getContext("2d"); // This gives you the drawing context, like a pencil

import { Star } from "./rectangle.js";

let mySpecialStar = new Star(canvas, pencil);
mySpecialStar.draw();

let stars = [
    mySpecialStar
];

// ⭐ Add horizontal speed to existing stars
for (let i = 0; i < stars.length; i++) {
    stars[i].speedX = (Math.random() * 2) + 10; // random speed 0.5–2.5
}

function gameLoop() {
    // erase the canvas
    pencil.clearRect(0, 0, canvas.width, canvas.height);

    // draw background
    // draw stars
    // move stars
    for (let i = 0; i < stars.length; i++) {
        let s = stars[i];

        
        s.x -= s.speedX;

        s.draw();

        
        if (s.x > canvas.width) {
            s.x = 0;
            // s.y = Math.random() * canvas.height;
        } else if (s.x < 0) {
            s.x = canvas.width;
            // s.y = Math.random() * canvas.height;
        }
    }

    // recycle stars/restart stars
    // if (stars.length < 50) {
    //     let newStar = new Star(canvas, pencil);
    //     newStar.x = 0;
    //     newStar.y = Math.random() * canvas.height;
    //     newStar.speedX = (Math.random() * 2) + 10;
    //     stars.push(newStar);
    // }
}

setInterval(gameLoop, 50);


let score = 0;

function raiseScore(){
    score += 1;
    document.getElementById("scoreDisplay");
    scoreElement.innerHTML = score;
}
setInterval(raiseScore, 1000);