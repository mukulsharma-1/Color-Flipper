const color = ["red", "blue", "green", "purple"];
const body = document.querySelector("body");
const button = document.querySelector(".btn");
const p = document.querySelector("p") 

function getColor(){
    let randomValue = Math.round(Math.random()*(color.length-1));
    // console.log(randomValue);
    let backgroundColor = body.style.backgroundColor = color[randomValue]
    p.textContent = `${backgroundColor}`.toUpperCase();
}

button.addEventListener("click", getColor);
button.addEventListener('mouseover',function(){
    button.classList.toggle("btn-1");
});
button.addEventListener('mouseout',function(){
    button.classList.toggle("btn-1");
})