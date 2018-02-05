console.log("loaded");
var canvasElement = document.getElementById("slate");
var canvasContext = canvasElement.getContext("2d");
var shape = "square";
var lastPoint = [-1,-1];




var drawSquare = function(event){
	console.log(event);
	theX = event.offsetX;
	theY = event.offsetY;
	
	if (shape == "square"){
		canvasContext.fillRect(theX,theY,50,50);
	}
	else if (shape == "circle"){
		canvasContext.beginPath();
		canvasContext.arc(theX,theY,25,0,2*Math.PI);
		canvasContext.stroke();
		canvasContext.fill();
		//theX += -25;
		//theY += -25;
	}
	
	if (lastPoint[0]!=-1 && lastPoint[1]!=-1){
		canvasContext.moveTo(lastPoint[0],lastPoint[1]);
		if (shape=="square"){
			canvasContext.lineTo(theX+25,theY+25);
		}
		else{
			canvasContext.lineTo(theX,theY);
		}
		canvasContext.stroke();
	}
	
	if (shape == "square"){
		lastPoint=[event.offsetX+25,event.offsetY+25];
	}
	else {
		lastPoint = [theX,theY];
	}
}

var clearCanvas =function(){
	lastPoint = [-1,-1];
	canvasContext.clearRect(0,0,500,500);
}

var toggleShape = function(){
	if (shape=="square"){
		shape="circle";
	}
	else if (shape == "circle"){
		shape = "square";
	}
}

canvasElement.addEventListener("click",drawSquare);
