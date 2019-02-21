var canvas = document.querySelector("canvas");

canvas.width = 500;
canvas.height = 500;


var c = canvas.getContext("2d");






class hitboxes {
  constructor(x, y, w, h) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
  }

  drawHit(){

    c.fillStyle = "#FFF";

    c.fillRect(hitbox.x, hitbox.y, hitbox.w, hitbox.h);

  }
}

let allsHits = [];

function createHits() {

  for(var i = 0 ; i < 5 ; i++){
    let thisHit = new hitboxes(Math.floor(Math.random()*500), Math.floor(Math.random()*500), Math.floor(Math.random()*300), Math.floor(Math.random()*300))
    allsHits.push(thisHit)
  }
}

createHits();



// c.fillStyle = "#000";
// c.fillRect(0, 0, canvas.width, canvas.height);

let dirX = 0;
let dirY = 0;

function update() {

// console.log(allsHits);



  c.fillStyle = "#000";
  c.fillRect(0, 0, canvas.width, canvas.height);

  c.fillStyle = "#FFF";
  let player = c.fillRect(playerPos.x, playerPos.y, 50, 50);

  const hitbox = {
    "x": 300,
    "y": 350,
    "w": 150,
    "h": 100,
  }

  for(var i = 0 ; i < 5 ; i++){
    c.fillRect(allsHits[i].x, allsHits[i].y, allsHits[i].w, allsHits[i].h);

    colition(playerPos.x, allsHits[i].x, playerPos.y, allsHits[i].y, allsHits[i].w, allsHits[i].h);

    // playerMove()
  }

  // c.fillStyle = "#FFF";
  // c.fillRect(allsHits[0].x, allsHits[0].y, allsHits[0].w, allsHits[0].h);
  //
  // colition(playerPos.x, allsHits[0].x, playerPos.y, allsHits[0].y, allsHits[0].w, allsHits[0].h);
  //
  playerMove();

  dirXmov = 0;
  dirYmov = 0;

  requestAnimationFrame(update);

}




document.addEventListener('keydown', event => {
  if (event.keyCode === 37 && playerPos.x > 0) {
    dirX = -1;
  } else if (event.keyCode === 39 && playerPos.x + 50 <= canvas.width) {
    dirX = 1;
  } else if (event.keyCode === 40 && playerPos.y + 50 <= canvas.height) {
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







let dirXmov = 0;
let dirYmov = 0;

let disX;
let disY;

function colition(x1, x2, y1, y2, hitSizeX, hitSizeY) {


  let x1mid = x1 + (50 / 2); //calculate middle of 1st object
  let y1mid = y1 + (50 / 2);

  let x2mid = x2 + (hitSizeX / 2); //calculate middle of 2nd object
  let y2mid = y2 + (hitSizeY / 2);




// Math.abs(disX) < (50 + hitSizeX) / 2 && Math.abs(disY) < (50 + hitSizeY) / 2

  if (x2 <= (x1+50) && x1 <= (x2+hitSizeX) && y2 <= (y1+50) && y1 <= (y2+hitSizeY)) {

    // c.fillStyle = "#255";
    // c.fillRect(250, 0, 100, 100);


    // Math.abs(disX) >= Math.abs(disY)
    // x2 - (x1 + 50) < y2 - (y1 + 50) || x1 - (x2 + hitSizeX) > y1 - (y2 + hitSizeY)

    if ((x2 - (x1 + 50) < 1 && x2 - (x1 + 50) > -10) || (x1 - (x2 + hitSizeX) < 1 && x1 - (x2 + hitSizeX) > -10)) {

      c.fillStyle = "#255";
      c.fillRect(250, 400, 100, 100);

      if (x1mid < x2mid) {
        dirXmov = 1;
      } else if (x1mid > x2mid) {
        dirXmov = -1;
      }
    }

    // Math.abs(disX) <= Math.abs(disY)

    if ((y2 - (y1 + 50) < 1 && y2 - (y1 + 50) > -10) || (y1 - (y2 + hitSizeY) < 1 && y1 - (y2 + hitSizeY) > -10)) {

      c.fillStyle = "#fff255";
      c.fillRect(150, 400, 100, 100);

      if (y1mid < y2mid) {
        dirYmov = 1;
      } else if (y1mid > y2mid) {
        dirYmov = -1;
      }

    }

  } else {
    // dirXmov = 0;
    // dirYmov = 0;
  }

  // playerMove()

}




let movSpeed = 5

function playerMove() {



  if (dirX != 0 || dirY != 0) {

    if (dirX != 0) {

      playerPos.x += (dirX * movSpeed - dirXmov * movSpeed)

    } else {

      playerPos.y += (dirY * movSpeed - dirYmov * movSpeed)

    }

  }



  if (playerPos.x == 0 || playerPos.x + 50 >= canvas.width) {
    dirX = 0;
  }
  if (playerPos.y == 0 || playerPos.y + 50 >= canvas.height) {
    dirY = 0;
  }

}









const playerPos = {
  "x": 0,
  "y": 0
}


update()
