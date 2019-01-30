

window.onload = function() {
  startGame()
  // document.getElementById("start-button").onclick = function() {
  //
  //   startGame();
  // };

  function startGame() {
    let canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');
    ctx.fillStyle = 'green';
    ctx.fillRect(0, 0, 20, 500);
    ctx.fillRect(230, 0, 20, 500);
    ctx.fillStyle = 'grey';
    ctx.fillRect(20, 0, 210, 500)
    //white lines
    ctx.clearRect(25, 0, 5, 500)
    ctx.clearRect(220, 0, 5, 500)
      //dash lines // TODO: make a loo
      ctx.clearRect(125, 5, 5, 40)
      ctx.clearRect(125, 80, 5, 40)
      ctx.clearRect(125, 160, 5, 40)
      ctx.clearRect(125, 240, 5, 40)
      ctx.clearRect(125, 320, 5, 40)
      ctx.clearRect(125, 400, 5, 40)
      ctx.clearRect(125, 480, 5, 40)
      //draw player
      let playerImg = new Image()
      playerImg.src =  'images/car.png'

      playerImg.onload = function() {
      ctx.drawImage(playerImg, 105, 430, 50, 70)
}
function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);  // clear canvas
  ctx.drawImage(imgTag, x, y);                       // draw image at current position
  x -= 4;
  if (x > 250) requestAnimationFrame(animate)        // loop
}


  }
};
