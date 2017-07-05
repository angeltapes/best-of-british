var imgcover;

function preload() {
  imgcover = loadImage("best-of-british-cover.jpg")
  //imgqueen = loadImage("Queen-Bohemian-Rhapsody.jpg");
}

function setup() {
  createCanvas(200, 200);
  background(0);

}

function mouseClicked(){
  if (mouseX>width/2) {
  // text("+YAS",100,100);
  //song1.play();
  //image(imgqueen,50,50);
  image(imgcover,50,50,50,50)
 }
 else {
//   song2.play();
//image(imgcover,50,50);
ellipse(100,100,50,50)
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
