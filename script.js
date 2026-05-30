// Target Element
const gameboard = document.querySelector("#gameboard");
const infoDisplay = document.querySelector("#info");
const startCells = [
  "","","",
  "","","",
  "","",""
];
infoDisplay.textContent = "Circle goes first";

function createBoard(){
  startCells.forEach((cell, index) => {
    const cellElement =document.createElement("div");
    gameboard.append(cellElement);
  })
}
createBoard();
