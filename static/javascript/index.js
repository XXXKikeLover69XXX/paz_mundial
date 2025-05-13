document.querySelector("title").innerHTML = "LA PAZ MUNDIAL";

document.querySelector("#primer-boton").addEventListener("click", () => {
  document.querySelector("#primera-linea").innerHTML = "ADIOSADIOSADIOSADIOS";
});

document.querySelector("#segundo-boton").addEventListener("click", () => {
  document.querySelector("#segunda-linea").innerHTML =
    "Soy Rojo Manin (TK Pedrito)🌹";
  document.querySelector("#segunda-linea").className = "psoe";
});

document.querySelector("#tercer-boton").addEventListener("click", () => {
  document.querySelector("#secreto").innerHTML = "❤️💛❤️VIVA VOX❤️💛❤️";
  document.querySelector("#secreto").className = "vox";
});
