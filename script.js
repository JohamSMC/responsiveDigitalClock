function clock() {
  let hours = document.getElementById("hour");
  let minutes = document.getElementById("minutes");
  let seconds = document.getElementById("seconds");
  let ampm = document.getElementById("ampm");

  let h = new Date().getHours();
  let m = new Date().getMinutes();
  let s = new Date().getSeconds();

  if (h > 12) {
    h = h - 12;
  }

  hours.innerHTML = h;
  minutes.innerHTML = m;
  seconds.innerHTML = s;
}

var interval = setInterval(clock, 1000);
