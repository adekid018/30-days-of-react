const increase=document.querySelector("#increase")
const decrease=document.querySelector("#decrease")
const reset=document.querySelector("#reset")
let output=document.querySelector("h1")

let number=0
reset.addEventListener("click",()=>{
    number=0
    output.textContent=number
    if(output.textContent==0){
        output.style.color="black"
    }
})
increase.addEventListener("click",()=>{
    number++
    output.textContent=number
    if(output.textContent>0){
        output.style.color="green"
    }
})

decrease.addEventListener("click",()=>{
    number--
    output.textContent=number
    if(output.textContent<0){
        output.style.color="red"
    }
})