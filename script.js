// const bootstrap = require("bootstrap");

// let tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
// let tooltipList = tooltipTriggerList.map(function(tooltipTriggerEl){
//     return new bootstrap.Tooltip(tooltipTriggerEl)
// });

// let popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
// let popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
//   return new bootstrap.Popover(popoverTriggerEl)
// })

// document.getElementById("toastbtn").onclick = function () {
//   let toastElList = [].slice.call(document.querySelectorAll('.toast'))
//   let toastList = toastElList.map(function(toastEl){
//     return new bootstrap.Toast(toastEl)
//   })
//   toastList.forEach(toast => toast.show())
// };

function myBtn() {
  let x = document.getElementsByClassName("city");
  for (let i = 0; i < x.length; i++) {
    x[i].style.display="none";
  }
}

document.getElementById('demo1').innerHTML = "Hello JavaScript!";
function changeTxt() {
  document.getElementById('demo2').style.fontSize = "25px";
  document.getElementById('demo2').style.color = "lightblue";
  document.getElementById('demo2').style.backgroundColor = "lightcoral";
}