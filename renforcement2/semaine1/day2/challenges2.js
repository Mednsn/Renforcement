const ventes = [
  { mois: "Janvier", ca: 40000, clients: 120, ville: "Casablanca" },
  { mois: "Février", ca: 55000, clients: 150, ville: "Rabat" },
  { mois: "Mars", ca: 60000, clients: 170, ville: "Casablanca" },
  { mois: "Avril", ca: 30000, clients: 90, ville: "Marrakech" },
  { mois: "Mai", ca: 70000, clients: 200, ville: "Rabat" },
  { mois: "Juin", ca: 45000, clients: 130, ville: "Casablanca" },
  { mois: "Juillet", ca: 80000, clients: 220, ville: "Marrakech" },
  { mois: "Août", ca: 75000, clients: 210, ville: "Rabat" },
  { mois: "Septembre", ca: 50000, clients: 140, ville: "Casablanca" },
  { mois: "Octobre", ca: 65000, clients: 180, ville: "Marrakech" },
  { mois: "Novembre", ca: 48000, clients: 125, ville: "Rabat" },
  { mois: "Décembre", ca: 90000, clients: 250, ville: "Casablanca" }
];

const totalCA = ventes.reduce((sum, v) => sum + v.ca, 0);
console.log("Total CA:", totalCA);

const moyenneCA = totalCA / ventes.length;
console.log("Moyenne CA:", moyenneCA);

const meilleur = ventes.reduce((max, v) => v.ca > max.ca ? v : max);
console.log("Meilleur mois:", meilleur);

const moinsClients = ventes.reduce((min, v) => v.clients < min.clients ? v : min);
console.log("Moins de clients:", moinsClients);

const grosMois = ventes.filter(v => v.ca > 50000);
console.log("Mois > 50k:", grosMois);

const resumeVille = {};
ventes.forEach(v => {
  if (!resumeVille[v.ville]) {
    resumeVille[v.ville] = { totalCA: 0, totalClients: 0 };
  }
  resumeVille[v.ville].totalCA += v.ca;
  resumeVille[v.ville].totalClients += v.clients;
});
console.log("Résumé par ville:", resumeVille);

const trie = [...ventes].sort((a, b) => b.ca - a.ca);
console.log("Tri décroissant:", trie);

const croissance = ventes.map((v, i, arr) => {
  if (i === 0) return { mois: v.mois, croissance: 0 };
  return {
    mois: v.mois,
    croissance: v.ca - arr[i - 1].ca
  };
});
console.log("Croissance:", croissance);