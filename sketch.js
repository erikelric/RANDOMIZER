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

function setup() {
  createCanvas(600, 600);
  background(200);

}

function draw() {

}

function mousePressed(){

  background(random(200, 255));
  randomIndex = int(random(jacket.length));
  text(jacket[randomIndex].name, 50, 50);
  jacket.splice(randomIndex, 1);

}
