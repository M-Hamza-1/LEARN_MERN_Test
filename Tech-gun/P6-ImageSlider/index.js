let flag = 0;
function slidShow(val) {
  let elm = document.getElementsByClassName("slide");
  elm[val].style.display = "block";
}

// next and prv button action

function slidControler(num) {
  // call from span onclick evnt

  let elm = document.getElementsByClassName("slide");
  flag = flag + num;
  if (flag >= elm.length) {
    flag = 0;
  } else if (flag == -1) {
    flag = elm.length - 1;
  }
  // now every last image will diplay none required else they all show in screen
  for (let i of elm) {
    i.style.display = "none";
  }
  slidShow(flag);
}
