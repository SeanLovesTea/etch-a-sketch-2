const grid = document.querySelector('.grid');
const gridBtn = document.querySelector('.gridBtn');
const gridColumn = document.querySelector('.gridColumn');
const gridRow = document.querySelector('.gridRow');

gridBtn.addEventListener('click', getGridMultiplier);

function getGridMultiplier(){
    let gridMultiplier = prompt('Chose your grid size!')
    if(gridMultiplier >100){
        let gridMultiplier = prompt('Chose a grid size less than 100!')
        return makeGrid(gridMultiplier)
} return makeGrid(gridMultiplier)
};

function makeGrid(gridMultiplier){
    for(let i= 0;i < gridMultiplier; i++){
        const gridColumn = document.createElement('div');
        gridColumn.className = 'gridColumn'
        grid.appendChild(gridColumn);
        for(let i= 0;i < gridMultiplier; i++){
            const gridRow = document.createElement('div');
            gridRow.className = 'gridRow'
            gridColumn.appendChild(gridRow);
        }
    }
};

// function randomInteger(max) {
//     return Math.floor(Math.random()*(max + 1));
// }

// function randomRgbColor() {
//     let r = randomInteger(255);
//     let g = randomInteger(255);
//     let b = randomInteger(255);
//     return `rgb(${r},${g},${b})`
// }
// gridColumn.forEach((gridColumn) => {
//     gridColumn.addEventListener('mouseover', (e) => {
//         gridColumn.style.backgroundcolor ='black'
        // document.getElementById("myH1").style.color = "red";
//     });
// });

// btn.forEach((btn) => {
//     btn.addEventListener("click", () =>{
//         if(playerScore == 5 || compScore == 5){
//             return
//         }
//         audioPlay()
//         let playerSelection = btn.id
//         let computerSelection = getComputerChoice();
//         playRound(playerSelection,computerSelection)
//     })  
// });
