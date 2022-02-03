var velocity = 20;
var ball = document.getElementById("ball");
var positionX = 0;
var positionY = 0;
var reverse = false;
//write a function that can change the position of the html element "ball"
function moveBall() {
  var Xmin = 0;
  var Xmax = 500;
  var Ymin = 0;
  var Ymax = 400;
  
  if(reverse === false){
    positionX = positionX + velocity;
    ball.style.left = positionX + "px"; 
    positionY = positionY + velocity;
    ball.style.top = positionY + "px"; 

  }else{
    positionX = positionX - velocity;
    ball.style.left = positionX + "px";
    positionY = positionY - velocity;
    ball.style.top = positionY + "px";   
  }

  if(positionX > Xmax || positionX === Xmin ||
    positionY > Ymax || positionY === Ymin){
    reverse = !reverse
  }
// two fixed x-axis coordinates (you will use these variable in step 3)  
}
setInterval(moveBall, 100);

var velocity = 20;
var ball_3 = document.getElementById("ball_3");
var positionX = 0;
var positionY = 0;
var reverse = false;
//write a function that can change the position of the html element "ball"
function moveBall3() {
  var Xmin = 0;
  var Xmax = 500;
  var Ymin = 0;
  var Ymax = 400;
  
  if(reverse === false){
    positionX = positionX + velocity;
    ball_3.style.left = positionX + "px"; 
    positionY = positionY + velocity;
    ball_3.style.top = positionY + "px"; 

  }else{
    positionX = positionX - velocity;
    ball_3.style.left = positionX + "px";
    positionY = positionY - velocity;
    ball_3.style.top = positionY + "px";   
  }

  if(positionX > Xmax || positionX === Xmin ||
    positionY > Ymax || positionY === Ymin){
    reverse = !reverse
  }
// two fixed x-axis coordinates (you will use these variable in step 3)  
}
setInterval(moveBall3, 100);


var velocity1 = 10;
var ball_1 = document.getElementById("ball_1");
var positionX1 = 0;
var positionY1 = 0;
var reverse1 = false;
//write a function that can change the position of the html element "ball"
function moveBall1() {
  var Xmin = 0;
  var Xmax = 600;
  
  if(reverse1 === false){
    positionX1 = positionX1 + velocity1;
    ball_1.style.left = positionX1 + "px"; 
    
  }else{
    positionX1 = positionX1 - velocity1;
    ball_1.style.left = positionX1 + "px";
  }

  if(positionX1 > Xmax || positionX1 === Xmin){
    reverse1 = !reverse1
  }
  // two fixed x-axis coordinates (you will use these variable in step 3)  
}
// This call the moveBall function every 100ms
setInterval(moveBall1, 50);

var velocity2 = 10;
var ball_2 = document.getElementById("ball_2");
var positionX2 = 0;
var positionY2 = 0;
var reverse2 = false;
//write a function that can change the position of the html element "ball"
function moveBall2() {
  var Xmin = 0;
  var Xmax = 550;
  
  if(reverse2 === false){
    positionX2 = positionX2 + velocity2;
    ball_2.style.left = positionX2 + "px"; 
    
  }else{
    positionX2 = positionX2 - velocity2;
    ball_2.style.left = positionX2 + "px";
  }

  if(positionX2 > Xmax || positionX2 === Xmin){
    reverse2 = !reverse2
  }
  // two fixed x-axis coordinates (you will use these variable in step 3)  
}
// This call the moveBall function every 100ms
setInterval(moveBall2, 50);
