const grid = document.querySelector('.grid');
const gridBtn = document.querySelector('.gridBtn');
const clearBtn = document.querySelector('.clear-squares');

clearBtn.addEventListener('click', removeDivs);
gridBtn.addEventListener('click', makeGrid);

function getGridMultiplier(gridMultiplier){
    if(gridMultiplier > 100 || gridMultiplier < 2){
        let gridMultiplier = prompt('Chose a grid size between 3-100')
        return makeGrid(gridMultiplier)
} return makeGrid(gridMultiplier)
};

function makeGrid(gridMultiplier){
    removeDivs();
    console.log(grid.hasChildNodes())
    for(let i= 0;i < gridMultiplier; i++){
        let gridColumn = document.createElement('div');
        gridColumn.style.display = 'flex';
        gridColumn.style.flex = '1';
        gridColumn.style.backgroundColor = 'white';
        gridColumn.style.border = '1px solid red';
        gridColumn.addEventListener('mouseover', colorSquare);
        grid.appendChild(gridColumn);

    for(let i= 0;i < gridMultiplier; i++){
        const gridRow = document.createElement('div');
        gridRow.style.display = 'flex';
        gridRow.style.flex = '1';
        gridRow.style.backgroundColor = 'white';
        gridRow.style.border = '1px solid blue';
        gridRow.addEventListener('mouseover', colorSquare);
        gridColumn.appendChild(gridRow);
        }
    }
    const input = document.querySelector('input');
    input.value = ''
    return   
};

function removeDivs(){
    let gridCells =grid.querySelectorAll('div')
    gridCells.forEach((div) => div.remove());
    return;
}

function colorSquare(){
    this.style.backgroundColor ='black';
}


// function resetColor(gridColumn,gridRow){
//     gridColumn.forEach((gridColumn), ()=> {
//         gridColumn.backgroundColor = 'white'
//     })
//     gridRow.forEach((gridRow), ()=> {
//         gridRow.backgroundColor = 'white'
//     })
// }

// function randomInteger(max) {
//     return Math.floor(Math.random()*(max + 1));
// }

// function randomRgbColor() {
//     let r = randomInteger(255);
//     let g = randomInteger(255);
//     let b = randomInteger(255);
//     return `rgb(${r},${g},${b})`
// }