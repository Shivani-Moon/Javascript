let light = document.querySelector("#light")
let dark = document.querySelector("#dark")

light.addEventListener("click",() =>{
    document.body.style.backgroundColor = "White";
})

dark.addEventListener("click",() =>{
    document.body.style.backgroundColor = "Black";
})