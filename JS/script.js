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
  
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  
  let x = 100;
  let y = 100;
  let speedX = 3;
  let speedY = 3;
  let radius = 30;
  
  img.onload = () => {
    function draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(img, x, y, 100, 100); // x, y, width, height
      x += speedX;
      y += speedY;
  
      if (x + 60 > canvas.width || x < 0) speedX *= -1;
      if (y + 60 > canvas.height || y < 0) speedY *= -1;
  
      requestAnimationFrame(draw);
    }
  
    draw();
  };

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2);
    ctx.fillStyle = "red";
    ctx.fill();
  
    x += speedX;
    y += speedY;
  
    // bounce off edges
    if (x + radius > canvas.width || x - radius < 0) speedX *= -1;
    if (y + radius > canvas.height || y - radius < 0) speedY *= -1;
  
    requestAnimationFrame(draw);
  }
  
  draw();
});


