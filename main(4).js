img="";

function preload() {
    img=loadImage("https://images.creativemarket.com/0.1.0/ps/1107484/1360/1020/m1/fpnw/wm1/vk3szrgfaalgg0i5ymxzbl8qymj8cpdtnaszgmemqpvkordzzmiuc38ombjrqnt4-.jpg?1458656355&s=af0062559af452ffbf43d53f393ab41f");
}

function setup() {
    canvas=createCanvas(640,420);
    canvas.center();
}

function draw() {
    image(img,0,0,640,420);
    fill(0,0,0);
    text("Desk",125,155);
    noFill();
    stroke(0,0,0);
    rect(125,155,400,250);
}

function back() {
    window.location="index.html";
}