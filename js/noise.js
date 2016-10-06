var centerX;
var centerY;
var iter; // for repetetive motion
var n;

function setup() {
    createCanvas(windowWidth, windowHeight);
    //initialize variables
    centerX = windowWidth / .2;
    centerY = windowHeight / 2;
    iter = 0;
    n = 0;
}

function draw() {
    //flush the screen so the animation is smooth.
    //background(0);

    var eY = centerY + 60 * noise(n);
    fill(255);
    //draw the ellipse at the changing X position, and add noise to the Y to give it some jitter.
    ellipse(iter, eY, 100, 100);

    rEllipse(centerX, centerY, 150, 150, 15, .52);

    iter += 4;
    n+= .03; // higher numbers are noisy-er or more random
    //reset variable to the left side when it hits the right side.
    if (iter > windowWidth) {
        iter = 0;
    }
}

function rEllipse (x, y, w, h, depth, angle) {
    if(depth<=0){

    } else{
        ellipse(x, y, w, h);
        x = x + w * .8 * sin(angle);
        y = y + h * .8 * cos(angle);
        //angle +=.68;
        console.log(map(mouseX, 0, windowWidth, 0, 2*PI));
        //I liked 4.19
        angle += map(mouseX, 0, windowWidth, 0, 2*PI);
        rEllipse(x, y, w * .8, h * .8, depth -1, angle);
    }
}