var span = document.getElementsByClassName("spanebi");
var div = document.getElementsByClassName("divebi");
var l = 0;
span[1].onclick = () => {
  l++;
  for (var i of div) {
    if (l == 0) {
      i.style.left = "0px";
    }
    if (l == 1) {
      i.style.left = "-740px";
    }
    if (l == 2) {
      i.style.left = "-1480px";
    }
    if (l == 3) {
      i.style.left = "-2220px";
    }
    if (l == 4) {
      i.style.left = "-2960px";
    }
    if (l == 5) {
      i.style.left = "-3700px";
    }
    if (l == 6) {
      i.style.left = "-4440px";
    }
    if (l == 7) {
      i.style.left = "-5180px";
    }
    if (l > 8) {
      l = 8;
    }
  }
};
span[0].onclick = () => {
  l--;
  for (var i of div) {
    if (l == 0) {
      i.style.left = "0px";
    }
    if (l == 1) {
      i.style.left = "-740px";
    }
    if (l == 2) {
      i.style.left = "-1480px";
    }
    if (l == 3) {
      i.style.left = "-2220px";
    }
    if (l == 4) {
      i.style.left = "-2960px";
    }
    if (l == 5) {
      i.style.left = "-3700px";
    }
    if (l == 6) {
      i.style.left = "-4440px";
    }
    if (l == 7) {
      i.style.left = "-5180px";
    }
    if (l < 0) {
      l = 0;
    }
  }
};

var butona = document.getElementById("buttonaa");
var spaina = document.getElementById("spainas");
let count = 0;

function cot() {
  count += 1;
  document.getElementById("spainas").innerHTML = count;
  console.log(count);
}

const liItem = document.querySelectorAll(".imagefilter ul li");
const imgItem = document.querySelectorAll(".personajebi img");

liItem.forEach((li) => {
  li.onclick = function () {
    liItem.forEach((li) => {
      li.className = "";
    });
    li.className = "active";

    const value = li.textContent;
    imgItem.forEach((img) => {
      img.style.display = "none";

      if (
        img.getAttribute("data-filter") == value.toLowerCase() ||
        value == "All characters"
      ) {
        img.style.display = "block";
      }
    });
  };
});

var counter = 1;
setInterval(function () {
  document.getElementById("radio" + counter).checked = true;
  counter++;
  if (counter > 4) {
    counter = 1;
  }
}, 5000);

const countdown = () => {
  const countDate = new Date("june 08, 2022 00:00:00").getTime();
  const now = new Date().getTime();
  const gap = countDate - now;

  const second = 1000,
    minute = second * 60,
    hour = minute * 60,
    day = hour * 24;

  const textDay = Math.floor(gap / day),
    textHour = Math.floor((gap % day) / hour),
    textMinute = Math.floor((gap % hour) / minute),
    textSecond = Math.floor((gap % minute) / second);

  document.querySelector(".day").innerText = textDay;
  document.querySelector(".hour").innerText = textHour;
  document.querySelector(".minute").innerText = textMinute;
  document.querySelector(".second").innerText = textSecond;
};

setInterval(countdown, 1000);


var timeInSecs;
var ticker;

function startTimer(secs) {
timeInSecs = parseInt(secs);
ticker = setInterval("tick()", 1000); 
}

function tick( ) {
var secs = timeInSecs;
if (secs > 0) {
timeInSecs--; 
}
else {
clearInterval(ticker);
startTimer(5*60); 
}

var mins = Math.floor(secs/60);
secs %= 60;
var pretty = ( (mins < 10) ? "0" : "" ) + mins + ":" + ( (secs < 10) ? "0" : "" ) + secs;

document.getElementById("countdownss").innerHTML = pretty;
}

startTimer(5*60);
