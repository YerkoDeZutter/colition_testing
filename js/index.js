var canvas = document.querySelector("canvas");

canvas.width = 500;
canvas.height = 500;


var c = canvas.getContext("2d");



// c.fillStyle = "#000";
// c.fillRect(0, 0, canvas.width, canvas.height);

let dirX = 0;
let dirY = 0;

function update() {

  if (dirX != 0 || dirY != 0) {

    if (dirX != 0) {

      playerPos.x += dirX * 5

    } else {

      playerPos.y += dirY * 5

    }

  }

  if (playerPos.x < 0 || playerPos.x + 50 > canvas.width) {
    dirX = 0;
  }
  if (playerPos.y < 0 || playerPos.y + 50 > canvas.height) {
    dirY = 0;
  }

  c.fillStyle = "#000";
  c.fillRect(0, 0, canvas.width, canvas.height);

  c.fillStyle = "#FFF";
  let player = c.fillRect(playerPos.x, playerPos.y, 50, 50);



  c.fillStyle = "#FFF";
  let stopMe = c.fillRect(350, 350, 100, 100);

  colition(playerPos.x, 350, playerPos.y, 350, 100)

  requestAnimationFrame(update);

}




document.addEventListener('keydown', event => {
  if (event.keyCode === 37 && playerPos.x > 0) {
    dirX = -1;
  } else if (event.keyCode === 39 && playerPos.x + 50 < canvas.width) {
    dirX = 1;
  } else if (event.keyCode === 40 && playerPos.y + 50 < canvas.height) {
    dirY = 1;
  } else if (event.keyCode === 38 && playerPos.y > 0) {
    dirY = -1;
  }

});


document.addEventListener('keyup', event => {
  if (event.keyCode === 37) {
    dirX = 0;
  } else if (event.keyCode === 39) {
    dirX = 0;
  } else if (event.keyCode === 40) {
    dirY = 0;
  } else if (event.keyCode === 38) {
    dirY = 0;
  }

});









let disX;
let disY;

function colition(x1, x2, y1, y2, hitSize) {


  let x1mid = x1 + (50/2);  //calculate middle of 1st object
  let y1mid = y1 + (50/2);

  let x2mid = x2 + (hitSize/2); //calculate middle of 2nd object
  let y2mid = y2 + (hitSize/2);



  // ----- STELLING VAN PITGORAS TUSSEN HET MIDDE VAN ALLE BIJ DE OBJECTEN -----

  disX = x1mid - x2mid;
  disY = y1mid - y2mid;

  // console.log(y2mid);

  let fillME = Math.sqrt(Math.pow(disX, 2) + Math.pow(disY, 2))

  // console.log(disX);


    // console.log("I'M IFING");
    if (fillME < (50 + hitSize)/2) {
      console.log(11);
    } else {

    }

}









const playerPos = {
  "x": 0,
  "y": 0
}


update()
