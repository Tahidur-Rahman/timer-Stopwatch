const timerHeading = document.querySelector(".timerHeading"),
  start = document.querySelector(".start"),
  reset = document.querySelector(".reset");
let hour = document.querySelector(".hour"),
  min = document.querySelector(".min"),
  sec = document.querySelector(".sec"),
  totalTimeInSec = 0;
document.querySelector(".setTimer").addEventListener("submit", set);
const addTimer = (node, time) =>
  (node.textContent = time > 9 ? time : "0" + time);

const setTimer = () => {
  let hours = Math.floor(totalTimeInSec / 3600),
    mins = Math.floor((totalTimeInSec - hours * 3600) / 60),
    secs = totalTimeInSec - hours * 3600 - mins * 60;

  addTimer(hour, hours);
  addTimer(min, mins);
  addTimer(sec, secs);
};

function set(e) {
  e.preventDefault();
  let setHour = +document.querySelector(".setHour").value,
    setMin = +document.querySelector(".setMin").value,
    setSec = +document.querySelector(".setSec").value;
  totalTimeInSec = setSec + setMin * 60 + setHour * 3600;

  setTimer();

  for (let a of e.target) a.value = "";
  timerHeading.style.visibility = "hidden";
}


start.onclick = () => setInterval(countDown, 1000);



reset.addEventListener("click", () => {
  timerHeading.style.visibility = "visible";
  document.querySelectorAll(".time").forEach((a) => (a.textContent = "00"));
clearInterval(countDown)
});


function countDown() {
  if(totalTimeInSec){
    totalTimeInSec--;
    setTimer();
  }
  start.disabled = true;
  }