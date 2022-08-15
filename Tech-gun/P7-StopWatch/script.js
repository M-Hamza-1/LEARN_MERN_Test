let hr = 0;
let min = 0;
let sec = 0;
let count = 0;
let time = false;
let call = false;

// start button.
 function start() {
  if (call == false) {
    time = true;
    // if start key pressed again then there is no call happen again untill reset or stop not occures. therefore call value used
    call = true;
    stopWatch();
    }
}

// stop button
function stop() {
  time = false;
  call = false;
}

// reset button
function reset() {
  time = false;
  call = false;

  document.getElementById("Count").innerHTML = "00";
  document.getElementById("sec").innerHTML = "00";
  document.getElementById("min").innerHTML = "00";
  document.getElementById("hr").innerHTML = "00";
}

// stop watch function called from start key function.

function stopWatch() {
  if (time == true) {
    count++;

    // for sec ==>
    if (count == 100) {
      count = 0;
      sec++;
    }
    // for minutes ==>
    if (sec == 60) {
      min++;
      sec = 0;
    }
    // for houre ==>
    if (min == 60) {
      hr++;
      min = 0;
    }
    // for 2 digit number when less than 10 values
    let strHr = hr;
    let strMin = min;
    let strSec = sec;
    let strCount = count;

    if (hr < 10) strHr = "0" + hr;
    if (min < 10) strMin = "0" + min;
    if (count < 10) strCount = "0" + count;
    if (sec < 10) strSec = "0" + sec;

    document.getElementById("Count").innerHTML = strCount;
    document.getElementById("sec").innerHTML = strSec;
    document.getElementById("min").innerHTML = strMin;
    document.getElementById("hr").innerHTML = strHr;

    setTimeout("stopWatch() ", 10);
  }
}
