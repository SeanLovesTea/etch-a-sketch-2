const grid = document.querySelector('.grid');
const gridBtn = document.querySelector('.gridBtn');
const clearBtn = document.querySelector('.clear-squares');
const rainbowBtn = document.querySelector('.rainbow');

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
        gridColumn.className ="gridCellRow"
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

function colorSquare(e){
    if (color === "random") {
        this.style.backgroundColor =`hsl(${Math.random() * 360}, 100%, 50%)`;
    }
    if (color === 'shade'){
        getShade();
    }

    this.style.backgroundColor = color;
    console.log("COLOR : " + color)
};
      
function changeColor(choice){
    color = choice;
    console.log(color);
}
