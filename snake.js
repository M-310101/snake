function Snake(x, y) {
  this.w = 20;
  this.h = 20;
  this.x = x;
  this.y = y;
  this.xspeed = 1;
  this.yspeed = 0;
  this.score = 0;
  this.body = [];

  this.dir = function(xdir, ydir) {
    this.xspeed = xdir;
    this.yspeed = ydir;
  }

  this.eaten = function(xapple, yapple) {
    if (snake.x == xapple && snake.y == yapple) {
      this.score++;
      return true;
    } else {
      return false;
    }
  }

  this.show = function() {
    this.death();
    this.move();
    fill(200, 200, 0);
    for (let i = 0; i < this.body.length; i++) {
      rect(this.body[i].x, this.body[i].y, size, size);
    }
    rect(this.x, this.y, this.w, this.h);
  }

  this.move = function() {
    for (let i = 0; i < this.body.length - 1; i++) {
      this.body[i] = this.body[i + 1];
    }
    if (this.score > 0) {
      this.body[this.score - 1] = createVector(this.x, this.y);
    }
    this.x = this.x + this.xspeed * size;
    this.y = this.y + this.yspeed * size;
    if (this.x >= width) {
      this.x -= width;
    }
    if (this.x < 0) {
      this.x += width;
    }
    if (this.y >= height) {
      this.y -= height;
    }
    if (this.y < 0) {
      this.y += height;
    }
  }

  this.death = function() {
    for (let i = 0; i < this.body.length; i++) {
      if (this.x == this.body[i].x && this.y == this.body[i].y) {
        this.score = 0;
        this.body = [];
      }
    }
  }





}
