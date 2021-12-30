// login page 
function none(){
  document.getElementsByClassName("splash").style.display="none";
  
}

document.getElementById("btn4").addEventListener("click", function () {
  document.querySelector("#box").style.display = "block";
  document.querySelector("#box").style.background = "white";
  // document.querySelector("#box").style.transition="ease-in-out 7s";
  document.querySelector("#nav1").style.filter = "blur(1px)";
  document.querySelector(".blocks").style.filter = "blur(2px)";
  document.getElementById("change").innerHTML = "GET STARTED";
  document.body.style.overflow="hidden";

});

document.getElementById("btn2").addEventListener("click", function () {
  document.querySelector("#box").style.display = "block";
  document.querySelector("#box").style.background = "white";
  // document.querySelector("#box").style.transition="ease-in-out 7s";
  document.querySelector("#nav1").style.filter = "blur(1px)";
  document.querySelector(".blocks").style.filter = "blur(2px)";
  document.body.style.overflow="hidden";
  document.getElementById("change").innerHTML = "CREATE ACCOUNT";
});

document.getElementById("crox").addEventListener("click", function () {
  document.querySelector("#box").style.display = "none";
  document.querySelector("#nav1").style.filter = "none";
  document.querySelector(".blocks").style.filter = "none";
  document.body.style.overflow="auto";

});





