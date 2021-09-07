img="";

function preload() {
    
}

function setup() {
    canvas=createCanvas(640,420);
    canvas.center();

    vedio=createCapture(VIDEO);
    vedio.hide();

    od=ml5.objectDetector("cocossd",modalLoaded);
}

function modalLoaded() {
    console.log("modal is loaded");
}

function draw() {
    image(vedio,0,0,640,420);
}

function back() {
    window.location="index.html";
}