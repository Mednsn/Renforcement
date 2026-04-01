const taux = {
  EUR: 1,
  USD: 1.08,
  GBP: 0.86,
  MAD: 10.85,
  JPY: 162.5,
  CAD: 1.47
};

let historique = [];

function convertir(montant, deviseSource, deviseCible) {
  if (!taux[deviseSource] || !taux[deviseCible]) {
    console.log("Devise non supportée");
    return;
  }

  let montantEUR = montant / taux[deviseSource];

  let resultat = montantEUR * taux[deviseCible];

  historique.push({
    date: new Date().toLocaleString(),
    montant,
    deviseSource,
    resultat,
    deviseCible
  });

  return resultat;
}

function convertirPanier(panier, deviseSource, deviseCible) {
  return panier.map(prix => convertir(prix, deviseSource, deviseCible));
}

function meilleurTaux(montant, deviseSource) {
  console.log(`\nConversion de ${montant} ${deviseSource} :`);

  for (let devise in taux) {
    let valeur = convertir(montant, deviseSource, devise);
    console.log(`→ ${devise} : ${valeur.toFixed(2)}`);
  }
}

function afficherHistorique() {
  console.log("\n------------ Historique ------------------");
  historique.forEach(h => {
    console.log(
      `${h.date} : ${h.montant} ${h.deviseSource} → ${h.resultat.toFixed(2)} ${h.deviseCible}`
    );
  });
}

function statistiques() {
  let total = 0;
  let deviseCount = {};
  let conversionCount = {};

  historique.forEach(h => {
    total += h.montant;

    deviseCount[h.deviseCible] = (deviseCount[h.deviseCible] || 0) + 1;

    let key = `${h.deviseSource}->${h.deviseCible}`;
    conversionCount[key] = (conversionCount[key] || 0) + 1;
  });

  let devisePop = Object.keys(deviseCount).reduce((a, b) =>
    deviseCount[a] > deviseCount[b] ? a : b, "EUR"
  );

  let conversionPop = Object.keys(conversionCount).reduce((a, b) =>
    conversionCount[a] > conversionCount[b] ? a : b, "EUR->USD"
  );

  console.log("\n-------------------- Statistiques ---------è---------------------");
  console.log(`Montant total converti : ${total.toFixed(2)}`);
  console.log(`Devise la plus demandée : ${devisePop}`);
  console.log(`Conversion la plus fréquente : ${conversionPop}`);
}
