
let equipes = [
  { nom: "PSG", points: 45, buts_pour: 50, buts_contre: 22, matchs_joues: 20 },
  { nom: "Real Madrid", points: 42, buts_pour: 48, buts_contre: 25, matchs_joues: 20 },
  { nom: "Barcelone", points: 42, buts_pour: 46, buts_contre: 20, matchs_joues: 20 },
  { nom: "Bayern", points: 40, buts_pour: 55, buts_contre: 30, matchs_joues: 20 },
  { nom: "Chelsea", points: 38, buts_pour: 35, buts_contre: 28, matchs_joues: 20 },
  { nom: "Milan", points: 35, buts_pour: 30, buts_contre: 27, matchs_joues: 20 },
  { nom: "Ajax", points: 33, buts_pour: 40, buts_contre: 35, matchs_joues: 20 },
  { nom: "Dortmund", points: 30, buts_pour: 38, buts_contre: 36, matchs_joues: 20 }
];


function calculDiff(equipe) {
  return equipe.buts_pour - equipe.buts_contre;
}


function trierClassement() {
  equipes.sort((a, b) => {
    if (b.points !== a.points) {
      return b.points - a.points;
    }
    return calculDiff(b) - calculDiff(a);
  });
}


function afficherClassement() {
  trierClassement();
  console.log("\nClassement :");
  equipes.forEach((equipe, index) => {
    let diff = calculDiff(equipe);
    let signe = diff >= 0 ? "+" : "";
    console.log(`${index + 1}. ${equipe.nom} — ${equipe.points} pts (diff: ${signe}${diff})`);
  });
}

function simulerMatch(e1, e2) {
  let score1 = Math.floor(Math.random() * 5);
  let score2 = Math.floor(Math.random() * 5);

  console.log(`\nMatch: ${e1.nom} ${score1} - ${score2} ${e2.nom}`);

  e1.buts_pour += score1;
  e1.buts_contre += score2;

  e2.buts_pour += score2;
  e2.buts_contre += score1;


  e1.matchs_joues++;
  e2.matchs_joues++;

  if (score1 > score2) {
    e1.points += 3;
  } else if (score2 > score1) {
    e2.points += 3;
  } else {
    e1.points += 1;
    e2.points += 1;
  }
}

afficherClassement();


for (let i = 0; i < 5; i++) {
  let i1 = Math.floor(Math.random() * equipes.length);
  let i2;

  do {
    i2 = Math.floor(Math.random() * equipes.length);
  } while (i1 === i2);

  simulerMatch(equipes[i1], equipes[i2]);
}


afficherClassement();