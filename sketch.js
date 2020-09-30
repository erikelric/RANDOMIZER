// types of jackets I like
let jacket = [{
  name: "coat",
  color: "black"
}, {
  name: "blazer",
  color: "grey"
}, {
  name: "hoodie",
  color: "green"
}, {
  name: "parka",
  color: "orange"
}, {
  name: "blouson",
  color: "purple"
}];

let randomIndex;
let animating = false;

function setup() {
  createCanvas(600, 600);
  background(200);
  textSize(32);

  text("click to randomize", 50, 50);


}

function draw() {

  if(animating == true){
    ellipse(random(width), random(height), random(50, 150))
  }
}

function randomizer(){
  animating = false;

  if (jacket[0]) {

    background(random(200, 255));
    randomIndex = int(random(jacket.length));
    text(`${jacket[randomIndex].name}'s favorite color is ${jacket[randomIndex].color}`, 50, 50);
    // text(jacket[randomIndex].name + "'s favorite color is" + jacket[randomIndex].color, 50, 50);
    jacket.splice(randomIndex, 1);
  } else {
    background(random(200, 255));
    text("nothing left", 50, 50);
    }

}

function mousePressed() {
  animating = true;
  setTimeout (randomizer, 2000);

}
