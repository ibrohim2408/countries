var elButton = document.querySelector(".header-btn");
var elHeader = document.querySelector(".site-header");
var elHero = document.querySelector(".hero");
var elInput = document.querySelector(".hero-input");
var elSelect = document.querySelector(".hero-select");
var elBOX = document.querySelectorAll(".hero-bottom-box");

elButton.addEventListener("click",function(){
    elHeader.classList.toggle('Header-dark');
    elHero.classList.toggle("Hero-dark");
    elInput.classList.toggle("Input-dark");
    elSelect.classList.toggle("Select-dark");
    elBOX.forEach(box=>{
        box.classList.toggle("Hero-box-dark");
    })

    

})