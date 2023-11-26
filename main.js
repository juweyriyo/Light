
const buton = document.querySelector(".btn")

const button = document.querySelector(".btn2")


const imgeone = document.querySelector(".of")
const imgetwo = document.querySelector(".on")

button.addEventListener("click", function(){
    imgeone.style.display = "none"
    imgetwo.style.display = "block"  

    
})

buton.addEventListener("click", function(){
    imgetwo.style.display = "none"
    imgeone.style.display = "block"
})
