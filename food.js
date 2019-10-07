class Food extends Cell {
	constructor(pos) {
		super(pos,[200, 0, 50]);
		this.reset_pos = {x: pos.x, y: pos.y};
	}

	reset() {
		this.pos = createVector(this.reset_pos.x, this.reset_pos.y);
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
}
