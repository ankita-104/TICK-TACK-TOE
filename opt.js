
const cell = document.querySelectorAll(".cell");
const statuses=document.querySelector("#status");
const restart=document.querySelector("#restart");
const winarr =[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],   
    [2,4,6]
]
let tot=["", "", "", "", "", "", "", "", ""];
// console.log(tot);
let currPlayer="X";
let running= false;

initialize();
function  initialize(){
cell.forEach(cell=>cell.addEventListener("click", cellClicked));
restart.addEventListener("click",restartGame);
statuses.textContent=`${currPlayer}'s turn`;
running= true;
// console.log(running);
// console.log("hi");
}

function cellClicked(){
const cellIndex=this.getAttribute("cellIndex");
// console.log(cellIndex);
if(tot[cellIndex]!=""|| !running){
    return;
}

else{
    updateCell(this, cellIndex);
    checkWinner();
}
}

function updateCell(cell, index){
    tot[index]=currPlayer;
    cell.textContent = currPlayer;

}

function changePlayer(){
currPlayer =(currPlayer =="X")?"O":"X";
console.log(currPlayer);
statuses.textContent = `${currPlayer}'s turn`;
}

function checkWinner(){
let roundWon =false;
for(let i=0; i<winarr.length; i++){
    const cond= winarr[i];
    const cellA= tot[cond[0]];
    const cellB= tot[cond[1]];
    const cellC= tot[cond[2]];
    if(cellA=="" || cellB=="" || cellC==""){
        continue;
    }
    if(cellA == cellB && cellB==cellC){
        roundWon=true;
        break;
    }
}
if(roundWon==true){
    statuses.textContent = `${currPlayer} wins!!`;
    running=false;
}
else if(!tot.includes("")){
    statuses.textContent =`It's a draw!`;

}
else{
    changePlayer();
}
}

function restartGame(){
    currPlayer ="X";
    tot = ["", "", "", "", "", "", "", "", ""];
    statuses.textContent = `${currPlayer}'s turn`;
    cell.forEach(cell=>cell.textContent ="");
}