$(document).ready(function () {
  // esercizio1()
  esercizio2()
})


function esercizio1() {
  // Snack1
  // Creare un array di oggetti:
  // Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
  // Stampare a schermo la bici con peso minore utilizzando destructuring e template literal

  var biciclette = [
    mountain = {
      nome: "pippo",
      peso: dice(1,20),
    },

    bikes = {
      nome: "topolino",
      peso: dice(1,20),
    },

    diables = {
      nome: "paperino",
      peso: dice(1,20),
    }
  ]

  console.log(biciclette);

  var biciLeggera = biciclette[0]

  for (var i = 0; i < biciclette.length; i++) {
    if (biciclette[i].peso < biciLeggera.peso) {
      biciLeggera = biciclette[i]
    }
  }

  console.log(biciLeggera);

  const {nome, peso} = biciLeggera

  var interpolata = `la bici piu leggera è ${nome} e pesa ${peso}!`

  console.log("risultato:", interpolata);
}

// console.log("///// CAMBIO DI ESERCIZIO /////");

function esercizio2() {
  // Snack2
  // Creare un array di oggetti di squadre di calcio.
  // Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
  // Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
  // Generare numeri random al posto degli 0 nelle proprietà: Punti fatti e falli subiti.
  // Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi
  // e falli subiti e stampiamo tutto in console.

  var torneo = [
    scuadra = {
      nome: "rossi",
      puntiFatti: 0,
      falliSubiti: 0,
    },

    scuadra = {
      nome: "gobbi",
      puntiFatti: 0,
      falliSubiti: 0,
    },

    scuadra = {
      nome: "diables",
      puntiFatti: 0,
      falliSubiti: 0,
    }
  ]


  for (var i = 0; i < torneo.length; i++) {
    // torneo[i-1] = {
      //   nome: `scuadra numero ${i}`,
      //   puntiFatti: dice(1,20),
      //   falliSubiti: dice(1,20),
      // }
      torneo[i].puntiFatti = dice(1,20);
      torneo[i].falliSubiti = dice(1,20);
    }

    console.log(torneo);






    // DECONSTRUTTURING

    const [torneoOne, torneoTwo, torneoTree] = torneo
    console.log("test torneo", torneoOne, torneoTwo, torneoTree);

    // const [torneoOne] = torneo
    // console.log("test torneo", torneoOne);
    //
    // const [,torneoTwo,] = torneo
    // console.log("test torneo", torneoTwo);
    //
    // const [,,torneoTree] = torneo
    // console.log("test torneo", torneoTree);
    //
    const {nome, falliSubiti} = torneoOne
    const {nome, falliSubiti} = torneoTwo
    const {nome, falliSubiti} = torneoTree

    var pincopallo = [torneoOne, torneoTwo, torneoTree]
    console.log(pincopallo);

}

// FUNZIONI
function dice(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}
