class Cell {
  constructor(pos, color, isFood = false) {
    this.x = pos.x;
    this.y = pos.y;
    this.color = color;
    this.isFood = isFood;
  }

  show() {
    fill(this.color);
    rect(this.x, this.y, CELL_SIZE, CELL_SIZE)
  }
}
