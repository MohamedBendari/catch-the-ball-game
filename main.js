let ball = document.getElementById("ball");
let paddle = document.getElementById("paddle");
let scoreBoard = document.getElementById("scoreBoard");

let ballX = 50;
let ballY = 0;
let ballSpeedY = 3;

let paddleX = 200;
let score = 0;

function gameLoop() {
  ballY += ballSpeedY;
  ball.style.top = ballY + "px";
  ball.style.left = ballX + "px";

  // Check collision with paddle
  if (ballY >= 470 && ballX + 20 >= paddleX && ballX <= paddleX + 100) {
    score++;
    scoreBoard.textContent = `Score: ${score}`;
    resetBall();
  }

  // Game Over
  if (ballY > 500) {
    alert("Game Over! Final Score: " + score);
    document.location.reload();
  }

  requestAnimationFrame(gameLoop);
}

function resetBall() {
  ballY = 0;
  ballX = Math.floor(Math.random() * 480);
}

document.addEventListener("mousemove", function(e) {
  let rect = document.getElementById("gameArea").getBoundingClientRect();
  paddleX = e.clientX - rect.left - 50;
  paddle.style.left = paddleX + "px";
});

gameLoop();
