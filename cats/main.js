// Milestone 1
// Definire un array di oggetti; ogni oggetto rappresenta un gatto, che è caratterizzato da: nome, età, colore e sesso.
// Tramite la funzione .forEach(), stampare in pagina tutti i gattini, ciascuno con il proprio colore e il proprio nome.


const gatti = [
  {
    nome: "Attila",
    eta: 5,
    colore: "bianco",
    sesso: "maschio",
  },
  {
    nome: "Grumilda",
    eta: 5,
    colore: "rosso",
    sesso: "femmina",
  },
  {
    nome: "Cesare",
    eta: 15,
    colore: "a puà",
    sesso: "maschio",
  },
  {
    nome: "Gertrudella",
    eta: 15,
    colore: "marrone",
    sesso: "femmina",
  },
]

console.log(gatti);

gatti.forEach((item, i, array) => {
  console.log(`${item.nome} è di colore ${item.colore}`);
  // $("ul").append(`<li>${item.nome} è di colore ${item.colore}</li>`)
});

// Milestone 2
// Dividere i gatti in due contenitori distinti in base al sesso e aggiungere a
// fianco di ogni gattino un fiocco colorato di rosa, se femmina, o di blu, se maschio.
// Il colore del fiocco deve essere più tenue se il gatto è più giovane, più scuro se il gatto è più vecchio.

var gattiFemmina = gatti.filter((item) => item.sesso == "femmina")

gattiFemmina.forEach((item, i, array) => {
  let opacity;
  $(".female").css("color", "red")
  if (item.eta > 10) {
    opacity = "opacity2"
  } else if (item.eta <= 10) {
    opacity = "opacity1"
  }
  console.log(`${item.nome} è di colore ${item.colore} ed è femmina devi aggiungere il fiocco`);
  $("ul").append(`<li>${item.nome} è di colore ${item.colore} ed è ${item.sesso} con ${item.eta}<i class="fas fa-ribbon female ${opacity}"></i></li>`)
});






var gattiMaschio = gatti.filter((item) => item.sesso == "maschio")

gattiMaschio.forEach((item, i, array) => {
  console.log(`${item.nome} è di colore ${item.colore} ed è maschio devi aggiungere il fiocco`);
  $("ul").append(`<li>${item.nome} è di colore ${item.colore} ed è ${item.sesso} <i class="fas fa-ribbon male"></i></li>`)

});

$(".male").css("color", "lightblue")


// Milestone 3
// Creare un nuovo array con prima tutti i gattini femmina e poi tutti i gattini maschio,
// inserendo solamente nome e colore e colore e opacità del fiocco per ogni gatto.

// concateno gli arrai femmina maschio con ...

// FUNZIONI
function dice(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}
