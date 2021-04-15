// Learning Processing
// Daniel Shiffman
// http://www.learningprocessing.com

// Example 17-6: Text breaking up 
let myFont;

function preload() {
  myFont = loadFont('Arial.ttf');
}

let message = 'STUDIO.PROXY';
//
let seed = 0;
let h = 70;
// An array of Letter objects
let letters = [message.length];

function setup() {
  createCanvas(900, 600);
  //frameRate(30);
  // Load the font
  // f = createFont("Arial", h);
  textFont(myFont);
  textSize(h);

  // Create the array the same size as the String
  // letters = message;

  // Initialize Letters at the correct x location
  let x = ((width - textWidth(message)) / 2);
  let y = height / 2;

  for (let i = 0; i < message.length; i++) {


    letters[i] = new Letter(x, y, message.charAt(i));
    x += textWidth(message.charAt(i));

  }
}

function draw() {
  background(255);
  for (let i = 0; i < letters.length; i++) {
    //pushMatrix();
    //randomSeed(i*3*10000);
    // Display all letters
    letters[i].display();
    //popMatrix();
    // If the mouse is pressed the letters shake
    // If not, they return to their original location
    let distance = dist(mouseX, mouseY, letters[i].x, letters[i].y);

    let w = textWidth(message);
    let tStart = (width - w) / 2;
    noFill();
    stroke(0);
    strokeWeight(2);
    rect(tStart * 0.95, (height - h*1.05) / 2, w * 1.05, h * 1.3);

    if (distance < h + h / 2 || mouseX > tStart && mouseX < tStart + w && mouseY > (height - h) / 2 && mouseY < (height - h) / 2 + h) {
      letters[i].shake();
      letters[i].rA = 20;
    } else {
      letters[i].home();
      //letters[i].rA = map(dist,0,350,20,2);

    }
  }
}