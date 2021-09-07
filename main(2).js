img="";

function preload() {
    img=loadImage("https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/edc020121toolbox-001-1607447196.jpg");
}

function setup() {
    canvas=createCanvas(640,420);
    canvas.center();
}

function draw() {
    image(img,0,0,640,420);
    fill(0,0,0);
    text("Bed",95,195);
    noFill();
    stroke(255,0,0);
    rect(95,195,300,150);
}

function back() {
    window.location="index.html";
}