console.log("loaded");
var canvasElement = document.getElementById("slate");
var canvasContext = canvasElement.getContext("2d");




var drawSquare = function(event){
	console.log(event);
	canvasContext.fillRect(event.x,event.y,50,50);

}

var clearCanvas =function(){
	canvasContext.clearRect(0,0,500,500);
}


canvasElement.addEventListener("click",drawSquare);
