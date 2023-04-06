const canvas = document.querySelector("canvas");
canvas.style.border = "2px solid black"
const ctx = canvas.getContext('2d')


const carImg = new Image();

carImg.src = './images/car.png';


let carX = 0;
let carY = 0;

 
function draw(x, y) {


  const canvas = document.querySelector('canvas');


  const ctx = canvas.getContext('2d');

 

  ctx.clearRect(0, 0, 300, 300);

  ctx.drawImage(carImg, carX, carY, 50, 50);

  carX += 3;

  setTimeout(`draw(${x}, ${y})`, 30);
}




const img = new Image();

img.onload = function() {
  ctx.drawImage(img, 0, 0, 500, 700);
  ctx.drawImage(carImg, 223, 565, 55, 110)
};
img.src = "./images/road.png"

const startScreen = document.querySelector('.game-intro')

window.onload = () => {
  canvas.style.display = 'none';
  document.getElementById('start-button').onclick = () => {
    startGame();
  };

  function startGame() {
    console.log("start game");
    startScreen.style.display = 'none';
    canvas.style.display = "block"
  }
};

document.addEventListener('keydown', event => {
  console.log(event)
  if (event.key === 'a' || event.key === 'A') {
    isMovingLeft = true
  }
  if (event.key === 'd' || event.key === 'D') {
    isMovingRight = true
  }
})

document.addEventListener('keyup', event => {
  console.log(event)
  if (event.key === 'a' || event.key === 'A') {
    isMovingLeft = false
  }
  if (event.key === 'd' || event.key === 'D') {
    isMovingRight = false
  }
})
