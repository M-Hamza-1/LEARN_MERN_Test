// two ways to do things => .classList (used for get all of classes from any  node)will use in both way

/* 1st : with some class property :
  contains : checks class is avilable or not
  add : adding class
  remove : remove given class 

*/
//2nd : just using toggle() => check either class available if yes then remove else add given class



// select css selecters =>
const navBtn = document.querySelector(".nav-toggle");
const linksClass = document.querySelector(".links");

navBtn.addEventListener("click" , function(){
//  //  1st way :
//   let isClass = linksClass.classList.contains("show-links"); // checking class available or not at ul tag.
//   if(isClass == false){
//     linksClass.classList.add("show-links"); // when not available then add
//   }
//   else{
//     linksClass.classList.remove("show-links"); // when available  rhen remove
//   }


// 2nd way using toggel() =>
 
   linksClass.classList.toggle("show-links");  // if availble then remove else add

  

})
