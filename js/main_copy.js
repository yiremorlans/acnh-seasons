document.getElementById('spring').onclick = springTime
document.getElementById('summer').onclick = summerTime
document.getElementById('fall').onclick = fallTime
document.getElementById('winter').onclick = winterTime

function springTime () {
  document.querySelector('body').style.backgroundImage = "url('/img/NH_Watering.jpeg')";
}

function summerTime () {
  document.querySelector('body').style.backgroundImage = "url('/img/NH_Fishing.jpeg')";
}

function fallTime () {
  document.querySelector('body').style.backgroundImage = "url('/img/NH_Bug_Catching.jpeg')";
}

function winterTime () {
  document.querySelector('body').style.backgroundImage = "url('/img/NH_Making_Snowboy.jpeg')";
}
