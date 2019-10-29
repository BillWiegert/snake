const CELL_SIZE = 30;
const GRID_SIZE = 20;
const FRAME_RATE = 10;
const SHOW_GRID = true;
const MAX_SCORE = GRID_SIZE * GRID_SIZE;

function setup() {
	createCanvas(CELL_SIZE * GRID_SIZE, CELL_SIZE * GRID_SIZE);
	snake = new Snake();
	food = new Food(createVector(CELL_SIZE * floor(GRID_SIZE * 0.75), CELL_SIZE * floor(GRID_SIZE * 0.5)));
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
		snake.grow();
		if (snake.length == MAX_SCORE) {
			snake.win();
			return;
		}
		food.consume();
	}

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
