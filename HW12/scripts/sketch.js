var canvas;
var ctx;
var x = 50;
var y = 50;
var square1, square2, circle1, circle2;
var direction;
var questions;
var squareArray = [];
var circleArray = [];
var lives = 3;
var points= 0;
$(document).ready(function(){
    
    setup();  
    
    $(this).keypress(function(event){
        getKey(event);
        
    });
});



function setup()
{
    canvas = document.getElementById("myCanvas");
    ctx = canvas.getContext("2d");

    // create two objects
    square1 = new Square(100,100,50,50,"#0000FF");
    square2 = new Square(400,400,100,100,"#00FF00");
    $.getJSON("data/enemies.json", function(data) {
        for(var i = 0; i < data.squares.length; i++)
        {
            squareArray.push(new Square(data.squares[i].x,data.squares[i].y, data.squares[i].h, data.squares[i].w, data.squares[i].color));
        }
        drawSquare();
    });
    circle1 = new Circle(200,200,50,0,2*Math.PI,"#FFD700");
    circle2 = new Circle(300,200,50,0,2*Math.PI,"#FFD700");
    $.getJSON("data/collectibles.json", function(data) {
        for(var i = 0; i < data.circles.length; i++)
        {
            circleArray.push(new Circle(data.circles[i].x,data.circles[i].y, data.circles[i].r, data.circles[i].sa, data.circles[i].ea, data.circles[i].color));
        }
        drawCircle();
    });


    
}

function getKey(event)
{
    var char = event.which || event.keyCode;
    var actualLetter = String.fromCharCode(char);
    if(actualLetter == "w")
    {
        moveUp();
        direction = "up";
    }
    if(actualLetter == "s")
    {
        moveDown();
        direction = "down";
    }
    if(actualLetter == "a")
    {
        moveLeft();
        direction = "left";
    }
    if(actualLetter == "d")
    {
        moveRight();
        direction = "right";
    }
    var test = hasCollided(square1,square2);
    var test2 = false;
    for(var i = 0; i < squareArray.length; i++)
    {

        test2 = hasCollided(square1,squareArray[i]);
        if(test2 == true)
        {
            break;
        }
        

    }
    if(test || test2)
    {
        lives--;
        if(direction == "left")
        {
            moveRight();
        }
        else if(direction == "right")
        {
            moveLeft();
        }
        else if(direction == "up")
        {
            moveDown();
        }
        else if(direction == "down")
        {
            moveUp();
        }
    
    }
    drawSquare(); 
    drawCircle();
    
}

function moveUp()
{
    square1.y-=10;
}
function moveDown()
{
    square1.y+=10;
}
function moveRight()
{
    square1.x+=10;
}
function moveLeft()
{
    square1.x-=10;
}

function drawSquare()
{
    ctx.clearRect(0,0,800,600);
    ctx.fillStyle = square1.mainColor;
    ctx.fillRect(square1.x, square1.y, square1.width, square1.height);
    ctx.fillStyle = square2.mainColor;
    ctx.fillRect(square2.x, square2.y, square2.width, square2.height);
    for(var i = 0; i < squareArray.length; i++)
    {
        ctx.fillStyle = squareArray[i].mainColor;
        ctx.fillRect(squareArray[i].x, squareArray[i].y, squareArray[i].width, squareArray[i].height);
    }

    ctx.font = "30px Arial";
    ctx.fillText("Lives: " + lives, 10, 50);    

}

function drawCircle()
{
   // ctx.arc(circle1.x, circle1.y, circle1.radius, circle1.sAngle, circle2.eAngle);
   // ctx.stroke();
    //ctx.fill = circle1.mainColor;
  //  ctx.arc(circle2.x, circle2.y, circle2.radius, circle2.sAngle, circle2.eAngle);
  //  ctx.stroke();
    //ctx.fill = circle2.mainColor;

    for(var i = 0; i < circleArray.length; i++)
    {
        ctx.beginPath();
        ctx.arc(circleArray[i].x, circleArray[i].y, circleArray[i].radius, circleArray[i].sAngle, circleArray[i].eAngle);
        ctx.fillStyle = circleArray[i].mainColor;
        ctx.fill();
        
    }

    ctx.font = "30px Arial";
    ctx.fillText("Points: " + points, 500, 50);    

}

function hasCollided(object1, object2) {
    return !(
        ((object1.y + object1.height) < (object2.y)) ||
        (object1.y > (object2.y + object2.height)) ||
        ((object1.x + object1.width) < object2.x) ||
        (object1.x > (object2.x + object2.width))
    );
}