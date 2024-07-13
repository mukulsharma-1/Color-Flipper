const body = document.querySelector("body");
const button = document.querySelector(".btn");


button.addEventListener('click', ()=>{
    let section = document.querySelector('.section')
    section.textContent = "Please Select Either Simple or Hex From Navigation"
})

button.addEventListener('mouseover',function(){
    button.classList.toggle("btn-1");
});
button.addEventListener('mouseout',function(){
    button.classList.toggle("btn-1");
})