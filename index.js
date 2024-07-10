const body = document.querySelector(`body`);

function setBgColor (color){
    body.style.backgroundColor = color;
}
let red = document.querySelector(`.red`);
red.addEventListener('click', function(){
 setBgColor('red');
})

let green = document.querySelector(`.green`);
green.addEventListener('click', function(){
 setBgColor('green');
})

let blue = document.querySelector(`.blue`);
blue.addEventListener('click', function(){
 setBgColor('blue');
})

// function randomColor(){
//     const red1 = Math.round(Math.random()*255);
//     const blue1 = Math.round(Math.random()*255);
//     const green1 = Math.round(Math.random()*255);
    
//     const color1= `rgb(${red1}, ${green1},${blue1}})`;
//     body.style.backgroundColor = "pink";
//     setBgColor("purple")
//     console.log("colorrr")
// }
// randomColor()
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color1 = '#';
    for (let i = 0; i < 6; i++) {
        color1 += letters[Math.floor(Math.random() * 16)];
    }
    return setBgColor(color1);
}

let random = document.getElementsByClassName('random')[0];
random.addEventListener('click', getRandomColor)