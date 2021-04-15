

class Letter {

  constructor(x, y, letter_) {
    this.letter = letter_;

    this.a = 6;
    this.rA = 20;
    this.lerpFactor = 0.08;
    this.x = x;
    this.y = y;
    this.theta = 0;
    this.tempTheta = this.theta;
    this.homex = this.x;
    this.homey = this.y;
    this.letter = letter_;
  }

  // Display the letter
  display() {

    push();
    translate(this.x + textWidth(this.letter) / 2, this.y);
    rotate(this.theta);
    fill(0);
    textAlign(CENTER, CENTER);
    text(this.letter, 0, 0); //
    strokeWeight(4);
    stroke(0, 0, 255);
    //point(0, 0);
    pop();
  }

  // Move the letter randomly
  shake() {
    this.x += random(-this.rA, this.rA);
    this.y += random(-this.rA, this.rA);
    this.theta += random(-PI / this.a, PI / this.a);

  }

  // At any point, the current location can be set back to the home location by calling the home() function.
  home() {
    this.x = lerp(this.x, this.homex, this.lerpFactor);
    this.y = lerp(this.y, this.homey, this.lerpFactor);
    this.theta = lerp(this.theta, this.tempTheta, this.lerpFactor);
  }
}