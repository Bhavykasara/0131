img="";

function preload() {
    img=loadImage("https://image.made-in-china.com/44f3j00qABtfIVMZRoj/Wholesale-200ml-Room-Cheap-Empty-Bottle-Reed-Diffuser-Bottle.jpg");
}

function setup() {
    canvas=createCanvas(640,420);
    canvas.center();
}

function draw() {
    image(img,0,0,640,420);
    fill(0,0,0);
    text("Bottle",125,85);
    noFill();
    stroke(0,0,0);
    rect(125,85,400,325);
}

function back() {
    window.location="index.html";
}