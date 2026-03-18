let page = 0; 

let closedCard, openCard;
let wigImages = [];
let wigChoice = 0;

function preload() {
  closedCard = loadImage("closecard.JPG");
  openCard = loadImage("Openletter.jpg");

  wigImages[0] = loadImage("bluehair.jpeg");
  wigImages[1] = loadImage("pinkhair.jpeg");
  wigImages[2] = loadImage("orangehair.jpeg");
  wigImages[3] = loadImage("greenhair.jpeg");
}

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);

  if (page === 0) {
    image(closedCard, 0, 0, 400, 400);
  } 
  else if (page === 1) {
    image(openCard, 0, 0, 400, 400);
  } 
  else if (page === 2) {
    image(wigImages[wigChoice], 0, 0, 400, 400);
  }
}

function mousePressed() {
  if (page === 0) {
    page = 1; // click to open card
  }
}

function keyPressed() {
  if (page === 1 && keyCode === ENTER) {
    page = 2; 
  } 
  else if (page === 2 && key === " ") {
    wigChoice++;
    if (wigChoice > 3) {
      wigChoice = 0; 
    }
  }
}