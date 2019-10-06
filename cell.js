class Cell {
  constructor(pos, color) {
    this.pos = pos;
    this.color = color;
  }

  show() {
    fill(this.color);
    rect(this.pos.x, this.pos.y, CELL_SIZE, CELL_SIZE)
  }
}
