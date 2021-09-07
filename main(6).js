img="";

function preload() {
    img=loadImage("https://lh3.googleusercontent.com/proxy/4o_qYS_YPr4SGDEn2S8UP-HJGC_35m1zLRKROgYRdieE_5Ab6_RjymZaq8khBld4pNrePIMU6tA5_1EBp0mMbMtHGFi4IIsgYSR6cO4cTOV0DUI-Ic8m6Q");
}

function setup() {
    canvas=createCanvas(640,420);
    canvas.center();
}

function draw() {
    image(img,0,0,640,420);
    fill(0,0,0);
    text("Fruit Basket",45,75);
    noFill();
    stroke(0,0,0);
    rect(115,65,400,300);
}

function back() {
    window.location="index.html";
}