import './style.css'


const xCell = 25
const yCell = 25

let conwayModel = []

// Setup a random Cell structure
// 0 == Dead
// 1 == Alive
for (let x = 0; x < xCell; x++) {
    conwayModel[x] = []
    for (let y = 0; y < yCell; y++) {
        conwayModel[x][y] = Math.round(Math.random() * 1); //sets to either 1 or 0 randomly
    }
}
console.log(conwayModel)




function updateModel(conwayModel) {
    console.log("Model Updated")
}



//Update Canvas based on Model
function Draw(conwayModel) {
    var canvas = document.getElementById("cando");

    var ctx = canvas.getContext("2d");

    console.log(ctx)

    ctx.strokeStyle = "lightgray";
    ctx.lineWidth = 1;

  ctx.lineWidth = 3;


    for (let x = 0; x < xCell; x++) {
        for (let y = 0; y < yCell; y++) {
            if(conwayModel[x][y] == 1){
                ctx.fillStyle = "red";
            }
            else {
                ctx.fillStyle = "white";
            }

            //fillRect(x,y,width,height)
            ctx.fillRect(10*x, 10*y, 10, 10);
        }
    }

    console.log("Drawing Updated")
}


//Change true to when there are no more cells
function gameLoop() {
    Draw(conwayModel)
    updateModel(conwayModel)
}

setInterval(gameLoop, 1000);
