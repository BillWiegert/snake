const CELL_SIZE = 33;
const GRID_SIZE = 20;
const FRAME_RATE = 10;
const SHOW_GRID = true;

function setup() {
	createCanvas(CELL_SIZE * GRID_SIZE, CELL_SIZE * GRID_SIZE);
	snake = new Snake();
	food = new Food();
	board = new Board();
	frameRate(FRAME_RATE);
}

function draw() {
	background(50);
	if (SHOW_GRID) {

		board.show();
	}
	snake.update();
	snake.show();
	if (snake.eat(food)) {
		food.consume();
		snake.grow();
	};
	food.show();
	updateScore();
}

function updateScore() {
	document.getElementById("score").innerHTML = snake.length;
}

function keyPressed() {
	switch (keyCode) {
		case UP_ARROW:
		case 87: // W
			snake.dir(0, -1);
			break;
		case LEFT_ARROW:
		case 65: // A
			snake.dir(-1, 0);
			break;
		case DOWN_ARROW:
		case 83: // S
			snake.dir(0, 1);
			break;
		case RIGHT_ARROW:
		case 68: // D
			snake.dir(1, 0)
			break;
	}
}
