// MDN
// The DOMContentLoaded event fires when the initial HTML document has been completely loaded and parsed, without waiting for stylesheets, images, and subframes to finish loading.


let vdoContainer = document.querySelector(".video-container");
let btn = document.querySelector(".switch-btn");

btn.addEventListener("click", function () {
  if (!btn.classList.contains("slide")) {
    btn.classList.add("slide");
    vdoContainer.pause(); // for using this method toggle not used here for class toggling
  } else {
    btn.classList.remove("slide");
    vdoContainer.play();
  }
});


// The load  => event is fired when the whole page has loaded, including all dependent resources such as stylesheets and images.

// preloader :
const preloader = document.querySelector(".preloader");
window.addEventListener("load", function () {
  preloader.classList.add("hide-preloader"); // if once all video loaded then that class is inovked and gif file hided
});
