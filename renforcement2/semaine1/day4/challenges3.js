const produits = [
  { id: 1, nom: "Laptop", prix: 800, stock: 5 },
  { id: 2, nom: "Souris", prix: 20, stock: 20 },
  { id: 3, nom: "Clavier", prix: 50, stock: 10 },
  { id: 4, nom: "Casque", prix: 70, stock: 8 }
];

let panier = [];
let codePromo = null;

function ajouterProduit(produitId, quantite) {
  let produit = produits.find(p => p.id === produitId);
  if (!produit) return console.log("Produit introuvable");

  let article = panier.find(a => a.produit.id === produitId);

  if (article) {
    let nouvelleQte = article.quantite + quantite;
    if (nouvelleQte > produit.stock) {
      console.log("Stock insuffisant");
      article.quantite = produit.stock;
    } else {
      article.quantite = nouvelleQte;
    }
  } else {
    if (quantite > produit.stock) {
      console.log("Stock insuffisant");
      quantite = produit.stock;
    }
    panier.push({ produit, quantite });
  }
}

function modifierQuantite(produitId, quantite) {
  let article = panier.find(a => a.produit.id === produitId);
  if (!article) return;

  if (quantite > article.produit.stock) {
    console.log("Stock dépassé");
    article.quantite = article.produit.stock;
  } else if (quantite <= 0) {
    supprimerArticle(produitId);
  } else {
    article.quantite = quantite;
  }
}

function supprimerArticle(produitId) {
  panier = panier.filter(a => a.produit.id !== produitId);
}

function sousTotal(article) {
  return article.produit.prix * article.quantite;
}

function totalPanier() {
  return panier.reduce((sum, a) => sum + sousTotal(a), 0);
}

function totalArticles() {
  return panier.reduce((sum, a) => sum + a.quantite, 0);
}

function appliquerCode(code) {
  const total = totalPanier();
  codePromo = null;

  if (code === "BIENVENUE") {
    codePromo = { type: "percent", value: 15 };
  } else if (code === "NOEL2025" && total > 50) {
    codePromo = { type: "fixed", value: 10 };
  } else if (code === "LIVGRATUITE") {
    codePromo = { type: "livraison", value: 7 };
  } else {
    console.log("Code invalide ou conditions non remplies");
  }
}

function recap() {
  console.log("\n------------- PANIER ---------------");

  panier.forEach(a => {
    console.log(`${a.produit.nom} x${a.quantite} = ${sousTotal(a)}€`);
  });

  let totalHT = totalPanier();
  let remise = 0;
  let fraisLivraison = 7;

  if (totalHT > 100) {
    fraisLivraison = 0;
  }

  if (codePromo) {
    if (codePromo.type === "percent") {
      remise = totalHT * (codePromo.value / 100);
    } else if (codePromo.type === "fixed") {
      remise = codePromo.value;
    } else if (codePromo.type === "livraison") {
      fraisLivraison = 0;
    }
  }

  let totalApresRemise = totalHT - remise;
  let tva = totalApresRemise * 0.2;
  let totalTTC = totalApresRemise + tva + fraisLivraison;

  console.log("--------------------------------------------");
  console.log(`Total HT : ${totalHT.toFixed(2)}€`);
  console.log(`Remise : -${remise.toFixed(2)}€`);
  console.log(`Livraison : ${fraisLivraison.toFixed(2)}€`);
  console.log(`TVA (20%) : ${tva.toFixed(2)}€`);
  console.log(`TOTAL TTC : ${totalTTC.toFixed(2)}€`);
  console.log(`Articles : ${totalArticles()}`);
}
