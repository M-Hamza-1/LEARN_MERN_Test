
// array content stores  loacl review objects with (name , img ,job , text)  
const reviews = [
  {
    id: 1,
    name: "susan smith",
    job: "web developer",
    img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
    text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
  },
  {
    id: 2,
    name: "anna johnson",
    job: "web designer",
    img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
    text: "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
  },
  {
    id: 3,
    name: "peter jones",
    job: "intern",
    img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
    text: "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
  },
  {
    id: 4,
    name: "bill anderson",
    job: "the boss",
    img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
    text: "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
  },
  
];


// select css selectors for action => nextbtn, prvbtn , randomBtn , id ,person-img , author , job , info

let prvbtn = document.querySelector(".prev-btn");
let nextbtn = document.querySelector(".next-btn");
let randombtn = document.querySelector(".random-btn");

let img = document.getElementById("person-img");
let author = document.getElementById("author");
let job = document.getElementById("job");
let info = document.getElementById("info");

// intital value for array object.
let currentItam =0;

// load intital item
window.addEventListener("DOMContentLoaded" , function(){
    showRevPerson(currentItam);
})

// function for changing intial value of review itams =>
 function showRevPerson(currentItam){
  let arrayObj = reviews[currentItam];  // value aaray value assigning to variable
  img.src = arrayObj.img;
  author.textContent =arrayObj.name;
  job.textContent = arrayObj.job;
  info.textContent = arrayObj.text;

 }

 //  nextBtn =>
 nextbtn.addEventListener("click" , function(){
if(currentItam < reviews.length){
     currentItam++;
  }
  else{
    currentItam =0;
  }
  showRevPerson(currentItam);
 })
// prvBtn =>
prvbtn.addEventListener("click", function () {
  if (currentItam  < 0) {
    currentItam =reviews.length-1;
  } else {
    currentItam--;
  }
  showRevPerson(currentItam);
});

randombtn.addEventListener("click" , function(){
   currentItam  =randomNumber();
   showRevPerson(currentItam);
})


// function for random number 0-3;

function randomNumber(){
  return Math.floor(Math.random() * reviews.length);
}