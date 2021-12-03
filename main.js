import './style.css'


const xCell = 25
const yCell = 25

let conwayModel = []

/*
Setup a random Cell structure in model
This runs only once at the start of the program
0 == Dead
1 == Alive
*/
for (let x = 0; x < xCell; x++) {
    conwayModel[x] = []
    for (let y = 0; y < yCell; y++) {
        conwayModel[x][y] = Math.round(Math.random() * 1); //sets to either 1 or 0 randomly
    }
}
console.log(conwayModel)




function updateModel(conwayModel) {

    let futureModel = []
    
    for (let x = 0; x < xCell; x++) {
        futureModel[x] = []
        for (let y = 0; y < yCell; y++) {
            
            // Gather number of live cells around cell
            // There are eight neighbours, which are the cells that are horizontally, vertically, or diagonally adjacent.
            let numberLiveCells = 0
            for(let i=-1; i<=1; i++){
                for(let j=-1; j<=1; j++){
                    //Eliminate center cell search
                    if(!(j == 0 && i == 0)){
                        //Prevent searching null cell positions
                        if(x+i > 0 && y+j > 0 && x+i < xCell && y+j < yCell){
                            numberLiveCells += conwayModel[x + i][y + j]
                        }
                    }
                }
            }
            const liveOrDead = conwayModel[x][y]

            // Any live cell with fewer than two live neighbours dies, as if by underpopulation.
            if(liveOrDead == 1 && numberLiveCells < 2){
                futureModel[x][y] = 0
            }

            // Any live cell with two or three live neighbours lives on to the next generation.
            else if(liveOrDead == 1 && (numberLiveCells == 2 || numberLiveCells == 3)){
                futureModel[x][y] = 1
            }

            // Any live cell with more than three live neighbours dies, as if by overpopulation.
            else if(liveOrDead == 1 && numberLiveCells > 3){
                futureModel[x][y] = 0
            }
            
            // Any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction.
            else if(liveOrDead == 0 && numberLiveCells == 3){
                futureModel[x][y] = 1
            }
            //Keep it dead
            else {
                futureModel[x][y] = 0
            }

        }
    }
    
    return futureModel
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
    conwayModel = updateModel(conwayModel)
    console.log(conwayModel)
}

setInterval(gameLoop, 200);
