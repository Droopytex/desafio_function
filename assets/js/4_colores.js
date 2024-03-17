// colores inciales de las div
function pintar(color) {
  const divAzul = document.getElementById("azul");
  divAzul.style.backgroundColor = "blue";

  const divRojo = document.getElementById("rojo");
  divRojo.style.backgroundColor = "red";

  const divVerde = document.getElementById("verde");
  divVerde.style.backgroundColor = "green";

  const divAmarillo = document.getElementById("amarillo");
  divAmarillo.style.backgroundColor = "yellow";
}

pintar("blue");
pintar("red");
pintar("green");
pintar("yellow");

// evento a color negro

const cajas = document.querySelectorAll(".caja");
cajas.forEach((caja) => {
  caja.addEventListener("click", (evento) => pintarNegro(evento, "black"));
});

function pintarNegro(evento, color) {
  const caja = evento.currentTarget;
  caja.style.backgroundColor = color;
}

// evento por keyboard color

let color;
document.addEventListener("keydown", cambiarColorPres);
function cambiarColorPres(event) {
  let tecla = event.key;
  if (tecla === "a") {
    color = "pink";
  } else if (tecla === "s") {
    color = "orange";
  } else if (tecla === "d") {
    color = "cyan";
  }
  document.getElementById("key").style.backgroundColor = color;
}

// evento por keyboard nuevo div
document.addEventListener("keydown", function (event) {
  if (event.key === "q") {
    NewDiv("purple");
  } else if (event.key === "w") {
    NewDiv("gray");
  } else if (event.key === "e") {
    NewDiv("brown");
  }
});

function NewDiv(color) {
  const divNew = document.createElement("div");
  divNew.style.width = "200px";
  divNew.style.height = "200px";
  divNew.style.backgroundColor = color;

  document.body.appendChild(divNew);
}
