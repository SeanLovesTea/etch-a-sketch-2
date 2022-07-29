const grid = document.querySelector('.grid');
const gridBtn = document.querySelector('.gridBtn');
const clearBtn = document.querySelector('.clear-squares');
const rainbowBtn = document.querySelector('.rainbow')
let color = "black";

clearBtn.addEventListener('click', clearGrid);

function getGridMultiplier(gridMultiplier){
    removeDivs();
    if(gridMultiplier > 100 || gridMultiplier < 2){
        let gridMultiplier = prompt('Chose a grid size between 3-100')
        return 
} return makeGrid(gridMultiplier);
};

function makeGrid(gridMultiplier){
    for(let i= 0;i < gridMultiplier; i++){
        let gridColumn = document.createElement('div');
        gridColumn.style.display = 'flex';
        gridColumn.style.flex = '1';
        gridColumn.style.backgroundColor = 'white';
        gridColumn.style.border = '.2px solid lightcyan';
        gridColumn.style.borderTop = '0px';
        gridColumn.style.borderBottom = '0px';
        gridColumn.className ="gridCell"
        gridColumn.addEventListener('mouseover', colorSquare);
        grid.appendChild(gridColumn);

    for(let i= 0;i < gridMultiplier; i++){
        const gridRow = document.createElement('div');
        gridRow.style.display = 'flex';
        gridRow.style.flex = '1';
        gridRow.style.backgroundColor = 'white';
        gridRow.style.border = '.2px solid lightgrey';
        gridRow.className ="gridCell"
        gridRow.addEventListener('mouseover', colorSquare);
        gridColumn.appendChild(gridRow);
        }
    }
    const input = document.querySelector('input');
    input.value = ''
    return   
};

function clearGrid(){
    let gridCells =grid.querySelectorAll('div')
    gridCells.forEach((div) => div.style.backgroundColor = 'white');
}
function removeDivs(){
    let gridCells =grid.querySelectorAll('div')
    gridCells.forEach((div) => div.remove());
    return;
}

function colorSquare(){
    if (color === "random") {
        this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
    }else
    {this.style.backgroundColor = color;}
}

function changeColor(choice){
    color = choice;
    console.log(color)
}
// console.log(color)`
// rainbowBtn.addEventListener('click', ()=>{
//     let color = randomRgbColor();
//     colorSquare(color);
    
// });
// function rainbow(gridColumn,gridRow){
// gridRow.addEventListener('mouseover',rainbowSquare());
// gridColumn.addEventListener('mouseover',rainbowSquare());
// }
// rainbowSquare()
// function rainbowSquare(){
//     let randomCol = randomRgbColor();
//     this.style.backgroundColor = randomCol;
//     console.log(randomCol)
// }
// function resetColor(gridColumn,gridRow){
//     gridColumn.forEach((gridColumn), ()=> {
//         gridColumn.backgroundColor = 'white'
//     })
//     gridRow.forEach((gridRow), ()=> {
//         gridRow.backgroundColor = 'white'
//     })
// // }

// function randomInteger(max) {
//     return Math.floor(Math.random()*(max + 1));
// }
// randomRgbColor()
// function randomRgbColor() {
//     let r = randomInteger(255);
//     let g = randomInteger(255);
//     let b = randomInteger(255);
//     console.log(`"rgb(${r},${g},${b})"`)
//     randChoice = `"rgb(${r},${g},${b})"`
//     return 
// }