const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");

const snakeSize = 20;
const snakeBody = [
  {x: 150, y: 150},
  {x: 130, y: 150},
  {x: 110, y: 150},
  {x: 90, y: 150},
  {x: 70, y: 150},
];

function drawSnake() {
  snakeBody.forEach(segment => {
    context.fillStyle = "green";
    context.strokeStyle = "darkgreen";
    context.fillRect(segment.x, segment.y, snakeSize, snakeSize);
    context.strokeRect(segment.x, segment.y, snakeSize, snakeSize);
  });
}


function draw() {
  context.clearRect(0, 0, canvas.width, canvas.height);
  drawHelloWorld();
  drawSnake();
}

setInterval(draw, 100);

function drawHelloWorld() {
  const message = "Hello, World!";

  let x = 20;
  let y = 40;

  for (const character of message) {
    if (character === " ") {
      x += snakeSize;
      continue;
    }

    context.fillStyle = "white";
    context.strokeStyle = "darkgreen";

    for (const segment of snakeBody) {
      context.fillRect(x, y, snakeSize, snakeSize);
      context.strokeRect(x, y, snakeSize, snakeSize);
      x += snakeSize;
    }
  }
}

