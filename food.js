class Food extends Cell {
	constructor(pos) {
		super(pos,[200, 0, 50]);
		this.reset_pos = {x: pos.x, y: pos.y};
	}

	reset() {
		this.pos = createVector(this.reset_pos.x, this.reset_pos.y);
	}

	chooseLocation() {
		let vacantCells = board.getVacantCells();
		let rand = floor(random(vacantCells.length - 1));
		let newPos = vacantCells[rand];

		this.pos.x = newPos[0];
		this.pos.y = newPos[1];
	}

	consume() {
		this.chooseLocation();
	}
}
