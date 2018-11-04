class Food {
	constructor() {
		this.reset();
	}

	reset() {
		this.pos = createVector(CELL_SIZE * GRID_SIZE * 0.75, CELL_SIZE * GRID_SIZE * 0.5);
	}


	//TODO: Prevent spawning food on cells occupied by the snake
	chooseLocation() {
		let rows = floor(width/CELL_SIZE);
		let cols = floor(height/CELL_SIZE);
		this.pos.x = floor(random(rows)) * CELL_SIZE;
		this.pos.y = floor(random(cols)) * CELL_SIZE;
	}

	consume() {
		this.chooseLocation();
	}

	show() {
		fill(200, 0, 50);
		rect(this.pos.x, this.pos.y, CELL_SIZE, CELL_SIZE)
	}
}
