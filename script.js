// const bootstrap = require("bootstrap");

// let tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
// let tooltipList = tooltipTriggerList.map(function(tooltipTriggerEl){
//     return new bootstrap.Tooltip(tooltipTriggerEl)
// });

// let popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
// let popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
//   return new bootstrap.Popover(popoverTriggerEl)
// })

document.getElementById("toastbtn").onclick = function () {
  let toastElList = [].slice.call(document.querySelectorAll('.toast'))
  let toastList = toastElList.map(function(toastEl){
    return new bootstrap.Toast(toastEl)
  })
  toastList.forEach(toast => toast.show())
};