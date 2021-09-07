img="";

function preload() {
    img=loadImage("https://img.freepik.com/free-photo/mockup-tv-wall-mounted-living-room-room-with-white-wall-3d-rendering_41470-3279.jpg?size=626&ext=jpg");
}

function setup() {
    canvas=createCanvas(640,420);
    canvas.center();
}

function draw() {
    image(img,0,0,640,420);
    fill(0,0,0);
    text("Television",155,75);
    noFill();
    stroke(0,0,0);
    rect(155,75,320,200);
}

function back() {
    window.location="index.html";
}