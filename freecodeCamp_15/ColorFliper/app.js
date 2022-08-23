const colors =["green" , "red" ,"rgba(133,122,200)" , "#f15025" ];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click" , function(){
    // get random number from  0-3 for idx.
    const randomNumber =getRandomNumber();
    document.body.style.backgroundColor = colors[randomNumber];
    // change the textContent for color value and color name .
    color.textContent = colors[randomNumber]; 


})
// a function for generating random  number as array idx . for getting array diifrent color value.
function getRandomNumber(){
    return Math.floor(Math.random() * colors.length); // the number returns betweeb 0 to array lenght
}
