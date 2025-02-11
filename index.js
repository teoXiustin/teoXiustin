const nope = document.getElementById(`no`);
nope.addEventListener("mouseover", moveHover);

function moveHover() {
  const wih = window.innerWidth - 50;
  const het = window.innerHeight - 50;
  const i = Math.floor(Math.random() * wih) + 1;
  const j = Math.floor(Math.random() * het) + 1;

  nope.style.left = i + "px";
  nope.style.top = j + "px";
}
