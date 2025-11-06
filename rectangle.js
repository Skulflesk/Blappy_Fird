// export class Star {


//     x = 0;
//     y = 0;
//     pencil;

//     constructor(canvas, pencil) {
//         this.pencil = pencil;
//         this.x = canvas.width * Math.random();
//         // this.y = 
        
//     }
// // arc(this.x, this.y, 10, 0, 2 * Math.PI);
//     draw(pencil) {
//         this.pencil.beginPath();
//         this.pencil.rect(this.x, this.y, 75, 200)
//         this.pencil.fillStyle = "#37A90A";
//         this.pencil.fill();
//         this.pencil.closePath();
//     }

//     move() {
//         this.x += 5;
//     }

    


    

// }

export class Star {

    x = 0;
    y = 0;
    pencil;

    constructor(canvas, pencil) {
        

        this.pencil = pencil;
        // this.x = canvas.width * Math.random();
        // this.y = canvas.height * Math.random();
    }
    draw(pencil) {
        // Draw the original rectangle
        this.pencil.beginPath();
        this.pencil.rect(this.x, this.y, 75, 200);
        this.pencil.fillStyle = "#37A90A";
        this.pencil.fill();
        this.pencil.closePath();
        this.pencil.beginPath();
        this.pencil.rect(this.x -12, 200, 100, 25);
        this.pencil.fillStyle = "#37A90A";
        this.pencil.fill();
        this.pencil.closePath();
        
        this.pencil.restore();

        // --- Draw mirrored version ---
        this.pencil.save();

        // Move the origin to the right side of the original shape
        this.pencil.translate(this.x + 75 * 2, this.y); // mirror offset
        this.pencil.scale(1, 1); // flip horizontally

        this.pencil.beginPath();
        this.pencil.rect(-150, 400, 75, 200);
        this.pencil.fillStyle = "#37A90A";
        this.pencil.fill();
        this.pencil.closePath();
          this.pencil.beginPath();
        this.pencil.rect(-162, 400, 100, 25);
        this.pencil.fillStyle = "#37A90A";
        this.pencil.fill();
        this.pencil.closePath();

        this.pencil.restore();
    }

    move() {
        this.x -= 5;
    }
}


 
  
