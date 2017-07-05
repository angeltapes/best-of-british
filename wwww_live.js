/*10-Paediophile.mp3
15-Who The Fuck Is Fred_.mp3
17-Bouncing Betty.mp3
2-Garibaldi.mp3
3-Come On James.mp3
4-Conquor Your Fears.mp3
5-You Know I Was Wondering.mp3
7-Ethical Hacking.mp3
8-One Step Beyond.mp3
*/

var song1;
var song2;
var imgcover;
var imgwwww;
var x=0;

function preload() {
  imgcover = loadImage("best-of-british-cover.jpg")
  imgqueen = loadImage("Queen-Bohemian-Rhapsody.jpg");
  imgbetty = loadImage("bouncing-betty.svg");
  imgwwww = loadImage("logo.png");
}

function setup() {
  createCanvas(1500, 1500);
  background(0);
  raiders = loadSound("1-Raiders.mp3");
  fred = loadSound("15-Who The Fuck Is Fred_.mp3");
  queen = loadSound("12-Real Talk Part 2.mp3");
  betty = loadSound("17-Bouncing-Betty.mp3");
  beyond= loadSound("8-One Step Beyond.mp3");
  hacking= loadSound("7-Ethical Hacking.mp3");
  wondering= loadSound("5-You Know I Was Wondering.mp3");
  james = loadSound("3-Come On James.mp3");
  arrgh1 = loadSound("conquerarrgh.wav");
  arrgh2 = loadSound("fredarrgh.wav");
  arrgh3 = loadSound("onesteparrgh.wav");
}

function draw()
{
  background(0);
  image(imgwwww,width,height,width/10,height/10);
  image(imgqueen,width,height,width/10,height/10);
}

function mouseClicked(){
var playa=(random(0,6));
if (playa<2){
fred.play(0,width/mouseX,1,0,0);
}
if (playa>2&&playa<4){
  queen.play();
}
if (playa>3&&playa<5){
  raiders.play(0,height/(mouseY/10),1,0,0);
}
if (playa>5){
  betty.play(0,random(0,1),1,0,0);
}
}

function keyPressed() {
  if (key =='q'|key=='Q') {
    arrgh1.play();
  } else if (key == 'w'|key=='W') {
    arrgh2.play();
  } else if (key == 'e'|key=='E') {
    arrgh3.play();
  }
 else if (key == 'a'|key=='A') {
  betty.play();
}
else if (key == 's'|key=='S') {
 beyond.play();
}
else if (key == 'd'|key=='D') {
 hacking.play(0,(random(0,2),1,0,0));
}
else if (key == 'f'|key=='F') {
 hacking.play();
}
else if (key == 'g'|key=='G') {
 raiders.play();
}
else if (key == 'z'|key=='Z') {
 wondering.play(0,0.8,1,0,0);
}
else if (key == 'x'|key=='X') {
 james.play();
}
else if (key == 'c'|key=='C') {
 james.play(0,0.5,1,0,0);
}
else if (key == 'p'|key=='P') {
  reverb = new p5.Reverb();
  reverb.process(james, 3, 1);
 james.play(0,(random,0,1),1,0,0);
}
}
/*
var img;
var imgMask;

function preload() {
  img = loadImage("assets/moonwalk.jpg");
  imgMask = loadImage("assets/mask.png");
}

function setup() {
  createCanvas(720, 400);
  img.mask(imgMask);
  imageMode(CENTER);
}

function draw() {
  background(0, 102, 153);
  image(img, width/2, height/2);
  image(img, mouseX, mouseY);
}
*/
  /*button.mousePressed(togglePlaying);
  jumpButton = createButton("jump");
  jumpButton.mousePressed(jumpSong);
  background(51);*/

  //song.addCue(2, changeBackground, color(0, 0, 255));
  //song.addCue(4, changeBackground, color(0, 255, 255));
  //song.addCue(6, changeBackground, color(255, 255, 255));


/*function changeBackground(col) {
  background(col);
}*/
/*
function jumpSong() {
  var len = song.duration();
  song.jump(random(20));
//  var t = 0; //random(len);
  //console.log(t);
  //song.jump(t);
}

function togglePlaying() {
  if (!song.isPlaying()) {
    song.play();
    song.setVolume(0.3);
    button.html("pause");
  } else {
    //change to .stop() to stop completely
    song.pause();
    button.html("play");
  }
}

function loaded() {
  console.log("loaded");
}
*/
/*function draw() {
  if (song.currentTime() > 5) {
  background(song.currentTime() * 10, 0, 255);
  }
}*/
