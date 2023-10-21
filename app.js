const cursor = document.getElementById("cursor");

window.onmousemove = e => {
  const x = e.clientX - cursor.offsetWidth / 2;
  const y = e.clientY - cursor.offsetHeight / 2;

  const keyframes = {
     transform: `translate(${x}px, ${y}px)`
  }

  cursor.animate(keyframes, {
    duration:800,
    fill: 'forwards'
  });

}


function reveal() {
  var reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", reveal);