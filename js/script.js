function navbarOpen() {
  var x = document.getElementById("mytopnav");
  if (x.className === "navbar") {
    x.className += " navbar__responsive";
  } else {
    x.className = "navbar";
  }
}

function navbarClose() {
  var x = document.getElementById("mytopnav");
  if (x.className === "navbar navbar__responsive") {
    x.className = " navbar";
  } 
}
