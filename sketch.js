
let width = 800;
let height = 800;

let size = 20;
let cols = width/size;
let rows = height/size;

function setup() {
	createCanvas(width, height);
	frameRate(10);
	snake = new Snake(0,0);
	apple = new Apple();
}

function draw() {
	background(0,100,200);
	apple.show();
	snake.show();
	if (snake.eaten(apple.x,apple.y)) {
		apple = new Apple();
	};
}

function keyPressed() {
  if (keyCode === LEFT_ARROW) {
		if (snake.score == 0) {
			snake.dir(-1,0);
		} else if (snake.xspeed != 1) {
			snake.dir(-1,0);
		}
  } else if (keyCode === RIGHT_ARROW) {
		if (snake.score == 0) {
			snake.dir(1,0);
		} else if (snake.xspeed != -1) {
			snake.dir(1,0);
		}
  } else if (keyCode === UP_ARROW) {
		if (snake.score == 0) {
			snake.dir(0,-1);
		} else if (snake.yspeed != 1) {
			snake.dir(0,-1);
		}
  } else if (keyCode === DOWN_ARROW) {
		if (snake.score == 0) {
			snake.dir(0,1);
		} else if (snake.yspeed != -1) {
			snake.dir(0,1);
		}
  }
}
