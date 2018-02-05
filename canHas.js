console.log("loaded");
var canvasElement = document.getElementById("slate");
var canvasContext = canvasElement.getContext("2d");
var shape = "square";




var drawSquare = function(event){
	console.log(event);
	if (shape == "square"){
		canvasContext.fillRect(event.x,event.y,50,50);
	}
	else if (shape == "circle"){
		canvasContext.beginPath();
		canvasContext.arc(event.x,event.y,25,0,2*Math.PI);
		canvasContext.stroke();
		canvasContext.fill();
	}
}

var clearCanvas =function(){
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
