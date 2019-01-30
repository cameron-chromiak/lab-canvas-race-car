

  let canvas = document.getElementById('canvas');
  const ctx = canvas.getContext('2d');
  let  isGame = true;
  let innerWidth = canvas.width
  let innerHeight = canvas.height


  startGame()

  function startGame() {
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

}
var car = {
  x: 47,
  y: 430,
  moveLeft:  function() { this.x -= 25},
  moveRight: function() { this.x += 25 },
}

  let playerImg = new Image()
  playerImg.src =  'images/car.png'
  playerImg.onload = function() {
  ctx.drawImage(playerImg, car.x, car.y, 50, 70)
  }
// function detectCollisions(){
//   if (car.x <10 || car.x > 240){
//
//   }
// }

$(document).keypress(function(e){
  let pressedKey = e.which
  if (pressedKey == 97 ){
    car.moveLeft()
  }else if (pressedKey == 100){
    car.moveRight()
  }
  updateCanvas()
})

function updateCanvas(){
  ctx.clearRect(0,0,canvas.width,canvas.height)
  startGame()
  ctx.drawImage(playerImg, car.x, car.y, 50, 70)
  console.log(ctx);
}

function updateObstacle(){
  for(var i=0;i<obstrArray.length;i++){
    obstrArray[i].y +=.09
  }

}

function Obstacle(x){
  this.x = x
  this.y = 0;
  this.draw = function(){
      ctx.fillStyle = 'red'
      ctx.fillRect(this.x, this.y, 110, 25)
  }

}


var obstrArray = []
newObstacle = new Obstacle(Math.random()*200)





let frames = 1;

function animate(obst){
  ctx.clearRect(0,0,canvas.width,canvas.height)
  updateCanvas()
  obstrArray.push(newObstacle)
  updateObstacle()
  requestAnimationFrame(animate);
  newObstacle.draw()
  debugger
  // detectCollisions()
}
animate()
updateCanvas()
/*
setInterval(function(){
  ctx.clearRect(0,0,canvas.width,canvas.height)
  //updateCanvas()
  ctx.restore()
  ctx.fillStyle ='red'
  ctx.fillRect(20, y, 110, 25)
  y+=1
  //requestAnimationFrame(animate);
},50)*/
