document.getElementById('spring').onclick = springTime
document.getElementById('summer').onclick = summerTime
document.getElementById('fall').onclick = fallTime
document.getElementById('winter').onclick = winterTime

function springTime () {
  document.querySelector('body').style.backgroundImage = "url('https://dodo.ac/np/images/4/43/NHWatering.jpg')";
}

function summerTime () {
  document.querySelector('body').style.backgroundImage = "url('https://dodo.ac/np/images/6/64/NHFishing.jpg')";
}

function fallTime () {
  document.querySelector('body').style.backgroundImage = "url('https://dodo.ac/np/images/6/6d/NHBugCatching.jpg')";
}

function winterTime () {
  document.querySelector('body').style.backgroundImage = "url('https://dodo.ac/np/images/f/f5/NHMakingSnowman.jpg')";
}
