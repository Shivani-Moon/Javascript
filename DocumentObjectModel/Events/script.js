let btn1 = document.querySelector("#btn1")
// btn1.onclick = (e) => {
//     console.log(e);
//     console.log(e.type)
//     console.log(e.target)
//     console.log(e.clientX, e.clientY)
   
// } 

btn1.addEventListener("click", () => {
    console.log("button1 was clicked")
})
btn1.addEventListener("click", () => {
    console.log("button1 was clicked 2x")
})
const handler3 = () => {
    console.log("button1 was clicked 3x")
}
btn1.addEventListener("click", handler3)
btn1.addEventListener("click", () => {
    console.log("button1 was clicked 4x")
})
btn1.removeEventListener("click", handler3)

let btn2 = document.querySelector("#btn2")
btn2.ondblclick = () => {
    console.log("btn2 was clicked 2X");
}

let div = document.querySelector("div")
div.onmouseover = (e) => {
    console.log(e);
    console.log(e.type)
    console.log(e.target)
    console.log(e.clientX, e.clientY)
}