var centerX;
var centerY;
var b2;
var dogs;

 function setup() {
    createCanvas(windowWidth, windowHeight);
    //initialize variables
    centerX = windowWidth / 4;
    centerY = windowHeight / 4;
   
    dogs = new Array();
    for (var i=1; i<100; i++){
        //other option for append;
        //var nDog = new Dog(50 + 20 * i, windowHeight / 2, random(0, TWO_PI));
        //append (Dogs, nDog);
        append(dogs, new Dog(100, 200, i* 50));
    }
    b2 =new Dog(100, 300, 100, 70);
 }


function draw() {
    background(100,100,100);
    noStroke();
    fill(255);
    ellipse(centerX, centerY, 50,100);
    stroke(255, 102, 0);
    noFill(255);
    bezier(centerX,centerY,50,50,50,50,50,50);
    stroke(255, 102, 0);
    noFill(255);
    bezier(centerX,centerY,50,100,50,50,50,50);
    stroke(255, 102, 0);
    noFill(255);
    bezier(centerX,centerY,50,50,200,50,50,50);
    stroke(255, 102, 0);
    noFill(255);
    bezier(centerX,centerY,100,100,50,50, 100,100);
    stroke(255, 102, 0);
    noFill(255);
    bezier(centerX,centerY,300,300,300,300, 300,300);
stroke(255, 102, 0);
    noFill(255);
    bezier(centerX,centerY,500,500,500,500, 500,500);
    stroke(255, 102, 0);
    noFill(255);
    bezier(centerX,centerY,700,700,500,500,700,700);
    stroke(255, 102, 0);
    noFill(255);
    bezier(centerX,centerY,1000,1000,1000,1000, 1000,1000);
    stroke(255, 102, 0);
    noFill(255);
    bezier(centerX,centerY,-300,-300,-300,-300, -300,-300);
    stroke(255, 102, 0);
    noFill(255);
    bezier(centerX,centerY,-500,-500,-500,-500, -500,-500);

    for (var i=0; i< dogs.length; i++){
        if (keyIsPressed){
        dogs[i].twitch;
        }
        dogs[i].display();
        dogs[i].move();
    }
    if (keyIsPressed){
        b2.twitch();
    }
    b2.display();
    
    
//noFill();
//stroke(0, 0, 0);
//bezier(85, 20, 40, 40, 100, 100, 15, 80);
}
 

function mousePressed(){
    //create 50
   for (var i=0; i<20; i++){
        //other option for append;
        //var nDog = new Dog(50 + 20 * i, windowHeight / 2, random(0, TWO_PI));
        append(dogs, new Dog(mouseX,mouseY, i *100));
     
        //append (Dogs, nDog);
    }
    //append(dogs, new Dog(mouseX,mouseY, i *10));
}
/*
* object Dog
* @param x : starting x position of Dog.
* @param y : starting x position of Dog.
* @param seed : (optional) start dance position of Dog.
*/
function Dog(x, y, seed = 1){

    this.radius = random(10);
    this.x = x;
    this.y = y;
    this.dir = random(-10, 10);
    this.dirY = random(-6,6);
    this.gravity = this.radius *.03;
    this.color = color(300,30,60);
    this.iter = seed;
    // moveDog moves Dog to the right.
    this.move = function(){
        if(this.x + this.radius > windowWidth || this.x - this.radius <0){
            this.dir = -this.dir;
        }
        if(this.y + this.radius > windowHeight || this.y - this.radius <0){
            this.dirY = -this.dirY;

        }

        this.x += this.dir;
        this.y += this.dirY;

        this.dirY += this.gravity;
    }

    //moves Dog in a small pattern
    this.twitch = function(){
        this.x += .9 * sin(this.iter);
        this.y += .9 * random(-10, 10);
    }
    this.display = function(){
        fill(this.color);
        //bezier(x,y,cx1,cy1,cx2,cy2,x2,y2);
        stroke(0,0,250);
        rect(this.x, this.y, this.radius*2, this.radius*2);
       //bezier(85, 20, 10, 10, 90, 90, 15, 80);
      // noFill();
    //stroke(255, 102, 0);
   // bezier(300, 200, 100, 100, 900, 90, 150, 80);
        this.iter += .2;
    }
        //this.iter += .05; equivalent
}

