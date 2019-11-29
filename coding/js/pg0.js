let lock = document.getElementById('lock');
lock.addEventListener('click', toPg1);
function toPg1() {
  window.location.href = "pg1.html";
}

let back = document.getElementById('back');
back.addEventListener('click', toIndex);
  function toIndex() {
    window.location.href = ("index.html");
  }

// lock.addEventListener('dragstart', function(event) {
//   event.dataTransfer.setData("Text", event.target.lock);
//   event.target.style.opacity = "0.5";
// });
