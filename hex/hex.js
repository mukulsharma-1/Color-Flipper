const color = "0123456789ABCDEF";
const body = document.querySelector("body");
const button = document.querySelector(".btn");
const p = document.querySelector("p") 

function getColorValue(){
  let colorValue = "#";
  for (let i=0;i<6;i++){
    let randomValue = Math.floor(Math.random()*(color.length));
    colorValue += color[randomValue]
  }
  return colorValue,
  p.textContent=colorValue,
  body.style.backgroundColor=colorValue;
}

button.addEventListener("click", getColorValue);
button.addEventListener('mouseover',function(){
    button.classList.toggle("btn-1");
});
button.addEventListener('mouseout',function(){
    button.classList.toggle("btn-1");
})