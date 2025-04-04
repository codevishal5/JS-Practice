var count;

if (localStorage.getItem("count") === null) {
  count = 0;
}   else {
  count = localStorage.getItem("count");
}

function like() {
  count++;
  document.getElementById("zero").innerHTML = count;
  localStorage.setItem("count", count);
}

function unlike() {
  count--;
  document.getElementById("zero").innerHTML = count;
  localStorage.setItem("count", count);
}

function reset() {
  count = 0;
  document.getElementById("zero").innerHTML = count;
  localStorage.setItem("count", count);
}


