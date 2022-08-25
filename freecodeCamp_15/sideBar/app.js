// using .classList method => add() , remove() . contain() and toggle()

// css selector => sidebar(all side baar links),  sidebar-toggle(for toggling side bar) , close-btn(used for close sidebar)

let sidebar = document.querySelector(".sidebar");
let closeBtn = document.querySelector(".close-btn");
let toggleBtn = document.querySelector(".sidebar-toggle");

toggleBtn.addEventListener("click", function () {
  // method 1st without toggle() =>
  // let isClass = sidebar.classList.contains("show-sidebar");
  // if(isClass ==true){
  //    sidebar.classList.remove("show-sidebar");
  // }
  // else{
  //     sidebar.classList.add("show-sidebar");
  // }

  // another way for same work => toggle();
  sidebar.classList.toggle("show-sidebar");
});

// close sidebar using close button =>

closeBtn.addEventListener("click", function () {
  sidebar.classList.remove("show-sidebar"); // remove "show-sidebar" class if sidebar opens
});
