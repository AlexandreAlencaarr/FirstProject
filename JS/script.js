let count = 2;

function increaseCounter() {
  count = count * 2
  document.getElementById("counter").textContent = count;
}

const img = new Image();
img.src = "Imagens/dvd.webp";

window.addEventListener("DOMContentLoaded", () => {
  const canvas = document.querySelector("canvas");
  const ctx = canvas.getContext("2d");

  const img = new Image();
  img.src = "Imagens/dvd.webp";

  let x = 100;
  let y = 100;
  let speedX = 3;
  let speedY = 3;
  const logoWidth = 100;
  const logoHeight = 100;

  function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }

  window.addEventListener("resize", resizeCanvas);
  resizeCanvas();

  img.onload = () => {
    function draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(img, x, y, logoWidth, logoHeight);

      x += speedX;
      y += speedY;

      if (x + logoWidth > canvas.width || x < 0) speedX *= -1;
      if (y + logoHeight > canvas.height || y < 0) speedY *= -1;

      requestAnimationFrame(draw);
    }

    draw();
  };
});

let logoWidth;
let logoHeight;

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  logoWidth = canvas.width * 0.1;
  logoHeight = logoWidth;
}
