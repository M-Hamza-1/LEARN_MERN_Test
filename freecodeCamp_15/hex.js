const hex= [1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F']; // for hex value total digit contain six and value 1-9 and A-F

const color = document.querySelector(".color");
const btn = document.getElementById("btn");

btn.addEventListener("click" , function(){
  // because hex colors start with #.
  let hexValue = "#";
  // make random hex number using hex array.
  for (let i = 0; i < 6; i++) {
// random six number from array. hence loop runs 0-5
    hexValue += hex[getRandomNumber()]; // getRandomNumber function as a random idx for array hex.
  }
  // put hexValue as content and appy with body.
  color.textContent = hexValue;
  document.body.style.backgroundColor = hexValue;
});

// make random number for array idx between 0 to hex.length;
function getRandomNumber(){
    return Math.floor(Math.random() * hex.length);
}