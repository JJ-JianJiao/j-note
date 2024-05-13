const density = "Ñ@#W$9876543210?!abc;:+=-,._                                                        ";

let dog;
let video;
let asciiDiv;
// function preload() {
//     dog = loadImage("dogp40.jpg");
// }

function setup() {
    //Draw in canvas
    // createCanvas(400, 400);
    noCanvas();
    video = createCapture(VIDEO);
    video.size(128, 64);
    asciiDiv = createDiv();
}

function draw() {
    // if (mouseIsPressed) {
    //     fill(0);
    // } else {
    //     fill(255);
    // }
    // ellipse(mouseX, mouseY, 80, 80);

    background(255,0,0);
    // image(dog, 0, 0, width, height);

    // let w = width / dog.width;
    // let h = height / dog.height;
    // dog.loadPixels();
    video.loadPixels();
    let asciiImage = "";
    for (let j = 0; j < video.height; j++) {
        // let row = "";
        for (let i = 0; i < video.width; i++) {
            const pixelIndex = (i + j * video.width) * 4;
            const r = video.pixels[pixelIndex + 0];
            const g = video.pixels[pixelIndex + 1];
            const b = video.pixels[pixelIndex + 2];
            const avg = (r + g + b) / 3;

            //Draw in canvas
            // noStroke();
            // fill(avg);
            // square(i * w, j * h, w);

            // const len = density.length;
            // const charIndex = floor(map(avg, 0, 255, len, 0));

            // textSize(w);
            // textAlign(CENTER, CENTER);
            // text(density.charAt(charIndex), i * w + w * 0.5, j * h + h * 0.5);
            //Draw in canvas
            const len = density.length;
            const charIndex = floor(map(avg, 0, 255, 0, len));

            const c = density.charAt(charIndex);
            if (c == " ") asciiImage += "&nbsp";
            else asciiImage += density.charAt(charIndex);
        }
        asciiImage += '<br/>';
        // console.log(row);
        // createDiv(row);
    }
    asciiDiv.html(asciiImage);
}
