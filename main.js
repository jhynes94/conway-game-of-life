import './style.css'


let conwayModel = [[]]







//Update Canvas based on Model
function Draw (conwayModel){
  var canvas = document.getElementById("cando");

  var ctx = canvas.getContext("2d");
  
  ctx.fillStyle = "#c5c7c4";
  
  //fillRect(x,y,width,height)
  ctx.fillRect(10, 10, 10, 10);
}
