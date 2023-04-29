let jugador = "X";
let juegoPerdido = false;
let color="black";
const tabla = document.getElementById("tablero");
const reiniciarBoton = document.getElementById("reiniciar");
const celdas = document.getElementsByTagName("td");

for (let i = 0; i < celdas.length; i++) {
  celdas[i].addEventListener("click", celdaClik);
}

reiniciarBoton.addEventListener("click", reiniciarJuego);

function celdaClik() {
  if (juegoPerdido) {
    return;
  }
  if (this.innerHTML !== "") {
    return;
  }
  this.innerHTML = jugador;
  this.style.color = color;
  verificar();
  turnoJugador();
}

function turnoJugador() {
  if(jugador === "X")
  {
    jugador = "O"
    color="red";
  }
  else
  {
    jugador = "X"
    color="black";
  } 
}

function verificar() {
  const jugadasGanadoras = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  for (let i = 0; i < jugadasGanadoras.length; i++) {
    const [a, b, c] = jugadasGanadoras[i];
    if (celdas[a].innerHTML === jugador && celdas[b].innerHTML === jugador && celdas[c].innerHTML === jugador) {
      alert(jugador + " Gano!");
      juegoPerdido = true;
      setTimeout(()=>{location.reload();},2000)
      return;
    }
  }
  if (tableroLleno()) {
    alert("Hubo Empate!");
    juegoPerdido = true;
    setTimeout(()=>{location.reload();},2000)
    return;
  }
}

function tableroLleno() {
  for (let i = 0; i < celdas.length; i++) {
    if (celdas[i].innerHTML === "") {
      return false;
    }
  }
  return true;
}

function reiniciarJuego() {
  for (let i = 0; i < celdas.length; i++) {
    celdas[i].innerHTML = "";
  }
  jugador = "X";
  juegoPerdido = false;
  color="black";
}