const body = document.querySelector("body");
const button = document.querySelector(".btn");


button.addEventListener('click', ()=>{
    let h2 = document.querySelector('h2')
    h2.textContent = "Please Select Either Simple or Hex From Navigation"
})

button.addEventListener('mouseover',function(){
    button.classList.toggle("btn-1");
});
button.addEventListener('mouseout',function(){
    button.classList.toggle("btn-1");
})