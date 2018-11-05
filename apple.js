function Apple() {

  this.x = floor(random(cols)) * size;
  this.y = floor(random(rows)) * size;

  this.show = function() {
    fill(200, 0, 100);
    rect(this.x, this.y, size, size);
  }
}
