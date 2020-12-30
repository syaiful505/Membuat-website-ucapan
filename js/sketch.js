var bg;

function preload(){
    bg = loadImage("assets/img/tv.jpeg");
}
function setup() {
    WIDTH = windowWidth;
    HEIGHT = windowHeight;
    createCanvas(WIDTH, HEIGHT);
}
function draw (){
    background(bg, 0, 0);
}