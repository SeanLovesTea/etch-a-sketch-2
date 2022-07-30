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
        // gridColumn.addEventListener('mouseover', shade);
        grid.appendChild(gridColumn);

    for(let i= 0;i < gridMultiplier; i++){
        const gridRow = document.createElement('div');
        gridRow.style.display = 'flex';
        gridRow.style.flex = '1';
        gridRow.style.backgroundColor = 'white';
        gridRow.style.border = '.2px solid lightgrey';
        gridRow.className ="gridCell"
        gridRow.addEventListener('mouseover', colorSquare);
        // gridColumn.addEventListener('mouseover', shade);
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
        this.style.backgroundColor =`hsl(${Math.random() * 360}, 100%, 50%)`;
    }
    else if (color === 'shade'){
        let num = 0 
        if(true){
            num = num + 20;
            this.style.backgroundColor =`hsl(240, 0%, ${num + 20}%)`;
        }
    }
        // else{
        //    
        // }
        // this.style.backgroundColor = 'black'
        // currentOpacity = this.style.opacity;
        // if(currentOpacity){
        //     this.style.opacity = Number(currentOpacity) +.1;
        // }else
        // this.style.opacity = .1;

    else
    {this.style.backgroundColor = color;}
};

// function shade(){
//     if (color === "shade"){
//     const currentOpacity = this.style.opacity
//     div.style.backgroundColor = 'black'
//     //     if(currentOpacity){
//     //         this.style.opacity = Number(currentOpacity) +.1;
//     //     }else
//     //     this.style.opacity = .1;
//      }
// }

function changeColor(choice){
    color = choice;
    console.log(color)
}
// let num = shadeNum()
// function shadeNum(){
//     let num = 0;
//     if(num == 0){
//         num = 20;
//         return num
//     }else if (num == 20){
//         num = 40
//         return num
//     }else if (num == 40){
//         num = 60
//         return num
//     }else if (num == 60){
//         num = 80
//         return num
//     }else if (num == 80){
//         num = 100
//         return num
//     }
// };
// function shade(){
//     // div = grid.getElementsByClassName('.gridCell')
//     if(color !== 'lightgrey'){
//         shadeColor = 'lightgrey'
//     //     div.style.backgroundColor = 'lightgrey'
//     }else if(color == 'lightgrey'){
//         shadeColor = 'grey'
//     //     div.style.backgroundColor = 'grey'
//     }else if(color == 'grey'){
//         shadeColor = '#808080'
//         // div.style.backgroundColor = '#808080'
//     }else if(color == '#808080'){
//         shadeColor = '#303030'
//         // div.style.backgroundColor = '#303030'
//     }else if(color == '#303030'){
//         shadeColor = 'black'
//         // div.style.backgroundColor = 'black'
//     }		
// }
// function greyToBlack(){
//     for (let i = 0; i < 5; i++){
//         num + 10
//         return `hsl(240%, 0%, ${num})`;
//     }
// }
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