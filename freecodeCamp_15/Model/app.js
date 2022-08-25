// select modal-overlay  class and add there .open-modal
// select modal-btn and toggel class .open-model
// select close-btn and remove   class .open-model

// select itams =>

const modelOverlay = document.querySelector(".modal-overlay");
const modalBtn = document.querySelector(".modal-btn");
const closeBtn = document.querySelector(".close-btn");

modalBtn.addEventListener("click", function () {
  //   let isClass = modelOverlay.classList.contains("open-modal");
  //   if (isClass == true) {
  //     modelOverlay.classList.remove("open-modal"); // remove if available
  //   } else {
  //     modelOverlay.classList.add("open-modal"); // add if available
  //   }

  // another way using toggel() method =>
  modelOverlay.classList.toggle("open-modal");
});

// close overLay using close button =>
closeBtn.addEventListener("click", function () {
  modelOverlay.classList.toggle("open-modal");
});
