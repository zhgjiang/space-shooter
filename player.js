var CANVAS_WIDTH = 480;
var CANVAS_HEIGHT = 320;

var canvasElement = $('<canvas width="' + CANVAS_WIDTH +
                      '" height="' + CANVAS_HEIGHT + '"></canvas>');
var canvas = canvasElement.get(0).getContext('2d');
canvasElement.appendTo('body');

var player = {
    color: '#00A',
    x: 220,
    y: 270,
    width: 32,
    height: 32,
    draw: function() {
        canvas.fillStyle = this.color;
        canvas.fillRect(this.x, this.y, this.width, this.height);
    }
}

function draw () {
    canvas.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    player.draw();
}

$(document).bind('keydown', "left", function() {
    if(player.x > 0){
        player.x -= 5;
    } else {
        return;
    }
    draw();
});

$(document).bind('keydown', "right", function() {
    if(player.x < CANVAS_WIDTH - player.width) {
        player.x += 5;
    } else {
        return;
    }
    draw();
});
draw();
