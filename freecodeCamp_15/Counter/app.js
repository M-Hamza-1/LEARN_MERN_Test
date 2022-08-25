// count initially is zero
let count = 0;
const btns = document.querySelectorAll(".btn");
const value = document.querySelector("#value");

btns.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    const btnClass = e.currentTarget.classList;
    if (btnClass.contains("decrease")) {
      count--;
    } else if (btnClass.contains("increase")) {    //.contain()  property check either class available or not
      count++;
    } else {
      count = 0;
      // reset :   initially set 0
    }
    value.textContent = count;

    // change background :
    if (count < 0) {
      value.style.color = "red";
    } else if (count > 0) {
      value.style.color = "green";
    }
    else {
         value.style.color = " hsl(209, 61%, 16%)";
    }

  });
});
