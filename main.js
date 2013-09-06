var CANVAS_WIDTH = 480;
var CANVAS_HEIGHT = 320;

var canvasElement = $('<canvas width="' + CANVAS_WIDTH +
                      '" height="' + CANVAS_HEIGHT + '"></canvas>');
var canvas = canvasElement.get(0).getContext('2d');
canvasElement.appendTo('body');

//Game loop
var FPS = 30;
setInterval(function() {
    update();
    draw();
}, 1000/FPS);

var textX = 50;
var textY = 50;
function update() {
    if(textX > CANVAS_WIDTH || textY > CANVAS_HEIGHT) {
        textX = 50;
        textY = 50;
        return;
    }
    textX += 1;
    textY += 1;
}

function draw() {
    canvas.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    canvas.fillStyle = '#000';
    canvas.fillText("space shooter", textX, textY);
}
