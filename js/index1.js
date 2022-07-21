let btn = document.querySelector('button');
btn.addEventListener('click' , function(){
    let btn = document.createElement("button");
btn.innerHTML = "Submit";
btn.type = "submit";
btn.name = "formBtn";
document.body.appendChild(btn);
})

let container = document.querySelector(".container");
let prvVal = container.innerHTML;
container.addEventListener("mouseover" , function(){
           container.innerHTML = prvVal;
    container.style.backgroundColor = "aqua";
    container.style.color = "black";
   console.log("Mouse is here");
})
container.addEventListener("mouseout", function(){
    console.log("Now mouse is out from container");
    container.style. backgroundColor = "black"
    container.style.color = "white"
    container.innerHTML = "This is the begining"
})