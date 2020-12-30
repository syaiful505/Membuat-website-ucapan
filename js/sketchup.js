var bg;

function preload(){
    bg = loadImage("assets/img/tv.jpeg");
}
function setup() {
    createCanvas(windowWidth, windowHeight);
}
function draw (){
    background(bg, 0, 0);
}