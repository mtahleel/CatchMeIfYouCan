// import "./styles.css";

var box = document.getElementById("box");

// box.style.left = box.offsetLeft + "px";
// box.style.top = box.offsetTop + "px";

box.addEventListener("mouseover", function () {
  // var top = parseInt(box.style.top);
  // var left = parseInt(box.style.left);
  // console.log("You are over me");

  var maxLeft = parseInt(window.innerWidth - box.clientWidth);
  var maxTop = parseInt(window.innerHeight - box.clientHeight);

  box.style.left = Math.floor(Math.random() * maxLeft) + "px";
  box.style.top = Math.floor(Math.random() * maxTop) + "px";
});
