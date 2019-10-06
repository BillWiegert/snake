class Snake {
	constructor() {
		this.initialize();
	}

	initialize() {
		this.pos = createVector(CELL_SIZE * GRID_SIZE * 0.25, CELL_SIZE * GRID_SIZE * 0.5);
		this.speed = createVector(0, 0);
		this.tail = [];
		this.length = 0;
		this.lastFrame = -1;
		this.queuedDir;
	}

	dir(x, y) {
		let currentFrame = frameCount;

		if (this.lastFrame === currentFrame) {
			this.queuedDir = createVector(x, y);
			return;
		}

		if (!this.validTurn(x, y)) {
			return;
		}

		this.speed.set(x, y);
		this.lastFrame = currentFrame;
	}

	validTurn(x, y) {
		if (-x === this.speed.x && -y === this.speed.y) {
			return false;
		}

		return true;
	}

	eat(food) {
		let d = dist(this.pos.x, this.pos.y, food.pos.x, food.pos.y);
		return (d < 1) ? true : false;
	}

	grow() {
		this.length++;
	}

	// TODO: Alerts are awful
	die() {
		alert("You Died!\nScore: " + this.length);
		this.initialize();
		food.reset();
	}

	isOutOfBounds() {
		return (this.pos.x < 0 || this.pos.y < 0 || this.pos.x >= width || this.pos.y >= height);
	}

	ateOwnTail() {
		if (this.length == 0) {
			return false;
		}
		for (let i = 0; i < this.length; i++) {
			if (this.tail[i].x == this.pos.x && this.tail[i].y == this.pos.y) {
				return true;
			}
		}

		return false;
	}

	update() {
		for (let i = this.length - 1; i >= 0; i--) {
			this.tail[i] = this.tail[i - 1];
		}

		if (this.length > 0) {
			this.tail[0] = createVector(this.pos.x, this.pos.y);
		}

		this.pos.x = this.pos.x + this.speed.x * CELL_SIZE;
		this.pos.y = this.pos.y + this.speed.y * CELL_SIZE;

		if (this.queuedDir) {
			if(this.validTurn(this.queuedDir.x, this.queuedDir.y)) {
				this.speed.set(this.queuedDir);
				this.lastFrame = frameCount;
			}

			this.queuedDir = null;
		}

		if (this.isOutOfBounds()) {
			this.die();
		}

		if (this.ateOwnTail()) {
			this.die();
		}
	}

	show() {
		fill(255);
		for (let i = 0; i < this.length; i++) {
			rect(this.tail[i].x, this.tail[i].y, CELL_SIZE, CELL_SIZE);
		}
		rect(this.pos.x, this.pos.y, CELL_SIZE, CELL_SIZE);
	}
}
