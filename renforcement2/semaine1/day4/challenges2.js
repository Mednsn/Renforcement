const CAPACITE = 30;

let reservations = [];
let idCounter = 1;

function ajouterReservation(nom_client, nombre_personnes, date, heure, telephone) {
  let total = reservations
    .filter(r => r.date === date && r.heure === heure && r.statut === "confirmée")
    .reduce((sum, r) => sum + r.nombre_personnes, 0);

  let statut = "confirmée";

  if (total + nombre_personnes > CAPACITE) {
    statut = "en attente";
  }

  let reservation = {
    id: idCounter++,
    nom_client,
    nombre_personnes,
    date,
    heure,
    statut,
    telephone
  };

  reservations.push(reservation);

  console.log(`Réservation ${statut} pour ${nom_client} (${nombre_personnes} pers)`);
}

function annulerReservation(id) {
  let res = reservations.find(r => r.id === id);

  if (!res) {
    console.log("Réservation introuvable");
    return;
  }

  res.statut = "annulée";
  console.log(`Réservation ${id} annulée`);

  let attente = reservations
    .filter(r => r.date === res.date && r.heure === res.heure && r.statut === "en attente");

  attente.forEach(r => {
    let total = reservations
      .filter(x => x.date === r.date && x.heure === r.heure && x.statut === "confirmée")
      .reduce((sum, x) => sum + x.nombre_personnes, 0);

    if (total + r.nombre_personnes <= CAPACITE) {
      r.statut = "confirmée";
      console.log(`Réservation ${r.id} confirmée (liste d'attente)`);
    }
  });
}

function listerReservations(date) {
  let list = reservations
    .filter(r => r.date === date)
    .sort((a, b) => a.heure.localeCompare(b.heure));

  console.log(`\nRéservations du ${date} :`);
  list.forEach(r => {
    console.log(`${r.heure} - ${r.nom_client} (${r.nombre_personnes}) [${r.statut}]`);
  });
}

function tauxOccupation(date) {
  let creneaux = {};

  reservations
    .filter(r => r.date === date && r.statut === "confirmée")
    .forEach(r => {
      if (!creneaux[r.heure]) {
        creneaux[r.heure] = 0;
      }
      creneaux[r.heure] += r.nombre_personnes;
    });

  console.log(`\nTaux d'occupation pour ${date} :`);
  for (let heure in creneaux) {
    let taux = (creneaux[heure] / CAPACITE) * 100;
    console.log(`${heure} → ${taux.toFixed(2)}%`);
  }
}
