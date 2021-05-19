var ball;
var mydatabase,myDBRef;

function setup(){
    mydatabase = firebase.database();
    myDBRef = mydatabase.ref("ball/position");
    createCanvas(500,500);
    ball = createSprite(250,250,10,10);
    ball.shapeColor = "red";
    
    myDBRef.on("value",readposition,showerror);
}

function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){    
        changePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        changePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        changePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        changePosition(0,+1);
    }
    drawSprites();
}

function changePosition(x,y){
    mydatabase.ref("ball/position").set({
        x:ball.x+x,
        y:ball.y+y
    })
}
function readposition(data)
{
  var  position = data.val();
    ball.x = position.x;
    ball.y = position.y;
}
function showerror()
{
    console.log("ERROR");
}

