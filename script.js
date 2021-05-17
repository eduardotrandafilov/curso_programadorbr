function onloadElements(){
  document.getElementById("button2").style.display="none";
}

function colapsar(){
  document.getElementById("lista1").style.display = "none";
  document.getElementById("button1").style.display="none";
  document.getElementById("button2").style.display="inline";
}

function expandir(){
  document.getElementById("lista1").style.display = "block";
  document.getElementById("button1").style.display="inline";
  document.getElementById("button2").style.display="none";

}