

  let canvas = document.getElementById('canvas');
  const ctx = canvas.getContext('2d');
  //const carCtx = canvas.getContext('2d');
  const obstCtx = document.getElementById('canvas2').getContext('2d')
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

function createCar(car){
  let playerImg = new Image()
  playerImg.src =  'images/car.png'
  playerImg.onload = function() {
  ctx.drawImage(playerImg, car.x, car.y, 50, 70)
  }
  //ctx.save()
  //console.log(car)
}
createCar(car)
//key press detection

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
  // console.log(car);
  // carCtx.clearRect(car.x,car.y,40,70)

  ctx.clearRect(0,0,canvas.width,canvas.height)

  //ctx.clearRect(car.x,car.y,canvas.innerWidth,canvas.innerHeight)
  startGame()

  createCar(car)

}

var obst ={
  height: 25,
  width: 120,

}

let y = 0
function animate(obst){
  obstCtx.clearRect(0,0,canvas.width,canvas.height)
  //updateCanvas()
  obstCtx.fillStyle ='red'
  obstCtx.fillRect(20, y, 110, 25)
  // updateCanvas()
  y+=1
  requestAnimationFrame(animate);

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
