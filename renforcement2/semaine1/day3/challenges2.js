const ingredients = [
  { nom: "Tomate", quantite: 5, unite: "kh", prix_unitaire: 2, seuil_alerte: 6, categorie: "legume" },
  { nom: "Oignon", quantite: 10, unite: "kg", prix_unitaire: 1.5, seuil_alerte: 5, categorie: "legume" },
  { nom: "Poulet", quantite: 8, unite: "kg", prix_unitaire: 7, seuil_alerte: 10, categorie: "viande" },
  { nom: "Boeuf", quantite: 12, unite: "kg", prix_unitaire: 10, seuil_alerte: 8, categorie: "viande" },
  { nom: "Sel", quantite: 2, unite: "kg", prix_unitaire: 0.5, seuil_alerte: 3, categorie: "epice" },
  { nom: "Poivre", quantite: 1, unite: "kg", prix_unitaire: 3, seuil_alerte: 2, categorie: "epice" },
  { nom: "Paprika", quantite: 4, unite: "kg", prix_unitaire: 4, seuil_alerte: 2, categorie: "epice" },
  { nom: "Eau", quantite: 50, unite: "litres", prix_unitaire: 0.3, seuil_alerte: 20, categorie: "boisson" },
  { nom: "Jus", quantite: 15, unite: "litres", prix_unitaire: 1.5, seuil_alerte: 10, categorie: "boisson" },
  { nom: "Lait", quantite: 8, unite: "litres", prix_unitaire: 1.2, seuil_alerte: 10, categorie: "boisson" },
  { nom: "Carotte", quantite: 3, unite: "kg", prix_unitaire: 1, seuil_alerte: 5, categorie: "legume" },
  { nom: "Agneau", quantite: 6, unite: "kg", prix_unitaire: 9, seuil_alerte: 7, categorie: "viande" }
];

const stockBas = ingredients.filter(i => i.quantite < i.seuil_alerte);
console.log("Stock bas:", stockBas);

const valeurTotale = ingredients.reduce((sum, i) => sum + (i.quantite * i.prix_unitaire), 0);
console.log("Valeur totale:", valeurTotale);

const valeurParCategorie = ingredients.reduce((acc, i) => {
  if (!acc[i.categorie]) acc[i.categorie] = 0;
  acc[i.categorie] += i.quantite * i.prix_unitaire;
  return acc;
}, {});
console.log("Valeur par categorie:", valeurParCategorie);

const commande = [
  { nom: "Tomate", quantite: 2 },
  { nom: "Poulet", quantite: 5 },
  { nom: "Sel", quantite: 1 }
];

let manque = [];

commande.forEach(item => {
  const stock = ingredients.find(i => i.nom === item.nom);
  if (!stock || stock.quantite < item.quantite) {
    manque.push({
      nom: item.nom,
      manque: stock ? item.quantite - stock.quantite : item.quantite
    });
  }
});

if (manque.length === 0) {
  commande.forEach(item => {
    const stock = ingredients.find(i => i.nom === item.nom);
    stock.quantite -= item.quantite;
  });
  console.log("Commande validee, stock mis à jour:", ingredients);
} else {
  console.log("Stock insuffisant:", manque);
}

const listeCourses = ingredients
  .filter(i => i.quantite < i.seuil_alerte)
  .map(i => ({
    nom: i.nom,
    quantiteACommander: (i.seuil_alerte * 2) - i.quantite,
    unite: i.unite
  }));

console.log("Liste de courses:", listeCourses);