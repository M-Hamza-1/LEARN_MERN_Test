//1st : using selectors inside the element
//2ns : traversing the dom

// using selectors inside the element =>

const questions = document.querySelectorAll(".question");
// this forEach loop for geting single question from quetion nodes
  questions.forEach(function (question) {
  let btns = question.querySelector(".question-btn");
  btns.addEventListener("click", function () {
    // this forEach loop used when new button will click , then using this loop other buttons will check if any one opens then those will close using remove() method.
     questions.forEach(function (qusItam) {
      if (qusItam != question) {
        qusItam.classList.remove("show-text");
      }
    });
    question.classList.toggle("show-text");
  });
});

// //2nd traversing the dom  =>question-btn (child)=>question-title(parent for question-btn and child for question) =>question(parent of all)
// const btns = document.querySelectorAll(".question-btn");
// btns.forEach(function(questionBtn){
//     questionBtn.addEventListener("click" , function(){
//       const question = questionBtn.parentElement.parentElement; // trevesing the question-btn to question-title and then question
//       // this loop for remove the class when new click event occure in question btn and prv on require to close.
//       btns.forEach(function(btn){
//         if(btn !=questionBtn){
//             const parentQuestion = btn.parentElement.parentElement
//             parentQuestion.classList.remove("show-text");
//         }
//        })

//       question.classList.toggle("show-text");
//     })
// })
