for (let i = 0; i < 25; i += 1) {
    addPixel = document.createElement('div')
    addPixel.className = 'pixel'
    addPixel.style.position = 'relative'
    addPixel.style.float = 'left'
    addPixel.style.backgroundColor = 'white'
    addPixel.style.border = '1px solid black'
    addPixel.style.height = '48px'
    addPixel.style.width = '48px'

    document.querySelector('#pixelGrade').appendChild(addPixel)
}

window.onload = function() {
 const selectCores = document.querySelectorAll('.color');
 const selectGrade = document.querySelector('#pixelGrade');
 const blue = document.querySelector('#blue');
 const red = document.querySelector('#red');
 const yellow = document.querySelector('#yellow');
 const green = document.querySelector('#green');
 const selectPixels = document.querySelectorAll('.pixel');
 const selectButtonClear = document.querySelector('#button');
 const buttonPixel = document.querySelector('#editPixels');
 const selectInput = document.querySelector('#gradePixel');
 const selectPaletaCores = document.querySelector('#paletaCores')
 

 let selectColorFunction ;
 
 function selectColor() {
  for(index = 0; index < 4; index += 1){
    if(selectColorFunction !== selectColor) {
        document.querySelectorAll('.color')[index].className = 'color'
    }
    this.classList.add('selected')
  }
 };

let eventColor;
for(eventColor = 0; eventColor < 4; eventColor +=1) {
    document.querySelectorAll('.color')[eventColor].addEventListener('click', selectColor)
};

function clickPixels(){
    let colorPixels = document.querySelector('.selected');
    let getbackGround = window.getComputedStyle(colorPixels);
    this.style.backgroundColor = getbackGround.getPropertyValue('background-color');
};
 
for(i = 0; i < selectPixels.length; i +=1) {
    selectPixels[i].addEventListener('click', clickPixels);
}

function clearPixel(){
    for( i= 0; i < selectPixels.length; i += 1) {
        selectPixels[i].style.backgroundColor = 'white';
  }
};
selectButtonClear.addEventListener('click', clearPixel);
 
function editPixels(){

    selectInput.addEventListener('change',function(){

     let containerGrade = document.querySelector('.pixel')  

     containerGrade.style.height.width = `${selectInput.value}px`
    })    
};
editPixels();

function randomColor() {
    const selectRandom = '0123456789ABCDEF';
    let hexadecimal = '#';
    for(i = 1; i < 7; i += 1) {
    let generationColor = hexadecimal += selectRandom[Math.floor(Math.random() * 16)];        
}     
    return hexadecimal;
} 
localStorage.setItem('random-color', JSON.stringify(selectPaletaCores.innerHTML))        

yellow.style.backgroundColor = randomColor();
red.style.backgroundColor = randomColor();
green.style.backgroundColor = randomColor();

console.log(randomColor());

const saved = localStorage.getItem('random-color')
console.log(saved)
}
