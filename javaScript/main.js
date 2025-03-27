import promptSync from "prompt-sync";
const prompt = promptSync();
//incializacion de variables
const userPhones = [];
const users = [];
const userskids = [];

function hijos() {
  let children = prompt("ingrese el nombre de su hijo");

  let moreKids = prompt("¿Desea ingresar otro hijo").toLowerCase().trim();
  while (moreKids === "si") {
    children = prompt("los datos de su hijo");
    userskids.push(children);

    moreKids = prompt(
      "¿Desea ingresar otro nombre de su hijo?(si/no)"
    ).toLowerCase();
  }

  userskids.push(children);
}
function addPhone() {
  let phone = prompt("ingrese su numero de telefono");

  let morePhone = prompt("¿Desea ingresar otro numero de telefono?(si/no)")
    .toLowerCase()
    .trim();

  while (morePhone === "si") {
    let phone = prompt("ingrese su numero de telefono");
    userPhones.push(phone);

    morePhone = prompt(
      "¿Desea ingresar otro numero de telefono?(si/no)"
    ).toLowerCase();
  }
  userPhones.push(phone);
}
function addDates() {
  let name = prompt("ingrese su nombre");
  let lastName = prompt("ingrese su apellido");
  let dni = prompt("ingrese su numero de dni");
  hijos();
  addPhone();

  let user = [name, lastName, dni, userPhones, userskids];
  users.push(user);
  console.log("[", name, lastName, dni, userPhones, userskids, "]");
}
function filtrarDni() {
  let dni_filtro = prompt("Ingrese el DNI a buscar:").trim();
  let encontrado = false;

  for (let i = 0; i < users.length; i++) {
    if (users[i][2] === dni_filtro) {
      console.log("Usuario encontrado:", users[i]);
      encontrado = true;
      break;
    }
  }
  if (!encontrado) {
    console.log("DNI no encontrado.");
  }
}
let opcion;
do {
  opcion = prompt(
    "1. Ingresar una nueva persona\n2. Mostrar todos los datos\n3. Filtrar por DNI\n4. Salir del programa\nSeleccione una opción:"
  )
    .toLowerCase()
    .trim();

  switch (opcion) {
    case "1":
      addDates();
      break;
    case "2":
      console.log("Lista de usuarios:", user);
      break;
    case "3":
      filtrarDni();
      break;
    case "4":
      console.log("Saliendo del programa...");
      break;
    default:
      console.log("Opción no válida. Intente nuevamente.");
  }
} while (opcion !== "4");
