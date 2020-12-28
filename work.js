var c=document.getElementById('canvas');
ctx=c.getContext('2d');
const box=40;
//*************************************************************BACKGROUND*******************************************************
const ground=new Image();
ground.src="ground.png";

const t=new Image();
t.src="top.png";

const food=new Image();
food.src="food.png";

var snake=[
{"x":8*box,"y":7*box}
]

var foodloc={"x":Math.floor((Math.random() * 20) + 1)*box,"y":Math.floor((Math.random() * 10) + 2)*box}
var d="right"
var newheadx;
var newheady;
//ctx.drawImage(ground,0,0,40,40);

var score=0;
var a=foodloc["x"];
var b=foodloc['y'];
draw=function(){
ctx.drawImage(t,0,0)
ctx.drawImage(food,0,0,2*box,2*box)
ctx.fillStyle="black";
ctx.font="40px Changa one";
ctx.fillText(score,100,1*box);
ctx.drawImage(ground,0,80)
ctx.drawImage(food,a,b,box,box)
console.log(a,b)
for(let i=0;i<snake.length;i++){
	ctx.fillStyle=(i==0)?"red":"white";
	ctx.strokeStyle="black";
	ctx.strokeRect(snake[i]['x'],snake[i]['y'],box,box);
	ctx.fillRect(snake[i]['x'],snake[i]['y'],box,box);
    } 
    newheadx=snake[0]['x'];
    newheady=snake[0]['y'];
    let curr=d;
    if(d=="right"){
	 newheadx+=box;
     }
   if(d=="down"){
    newheady+=box;
   }
   if(d=="up"){
	newheady-=box;
   }
   if(d=="left"){
	newheadx-=box;
    }
    snake.unshift({"x":newheadx,"y":newheady})
    snake.pop();

    if((newheadx>980||newheadx<0)||(newheady>480|| newheady<80)){
    	clearInterval(s)
    	
    }

    for(let temp=3;temp<snake.length;temp++){
    	if (snake[temp]['x']==newheadx&&snake[temp]['y']==newheady){
    	        clearInterval(s)
    	}
    }
    if (newheadx==a&&newheady==b){
    	console.log("catch")
    	//ctx.clearRect(100,1*box,box,box);
    	score+=1;
    	a=Math.floor((Math.random() * 20) + 1)*box
    	b=Math.floor((Math.random() * 10) + 2)*box
    	snake.unshift({"x":newheadx,"y":newheady})
    }
    }




direction=function(event){
  if (event.keyCode==37&&(d!="right"||snake.length===1)){
  	d="left"
  }
  if(event.keyCode==38&&(d!="down"||snake.length===1)){
  	d="up"
  }
  if(event.keyCode==39&&(d!="left"||snake.length===1)){
  	d="right"
  }
  if(event.keyCode==40&&(d!="up"||snake.length==1)){
  	d="down"
  }
  if(event.keyCode==13){
  	clearInterval(s);
  	score=0;
  	snake=[{"x":8*box,"y":7*box}]
  	newheadx=snake[0]['x'];
    newheady=snake[0]['y'];
  	 s=setInterval(draw,200)
  }
}


document.addEventListener("keydown",direction);

var s=setInterval(draw,200);







