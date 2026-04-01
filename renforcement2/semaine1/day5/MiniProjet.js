const users = [
  {
    id: 1,
    pseudo: "TechMaster",
    email: "contact@techmaster.com",
    role: "vendeur",
    noteMoyenne: 4.8,
    solde: 1250.50
  },
  {
    id: 2,
    pseudo: "AliceDev",
    email: "alice@gmail.com",
    role: "acheteur",
    noteMoyenne: 5.0,
    solde: 45.00
  },
  {
    id: 3,
    pseudo: "BoutiqueRetro",
    email: "info@retroshop.fr",
    role: "vendeur",
    noteMoyenne: 4.2,
    solde: 8900.00
  },
  {
    id: 4,
    pseudo: "JeanDupont",
    email: "jean.dupont@outlook.fr",
    role: "acheteur",
    noteMoyenne: 3.5,
    solde: 120.75
  },
  {
    id: 5,
    pseudo: "GadgetGeek",
    email: "sales@gadgetgeek.ma",
    role: "vendeur",
    noteMoyenne: 4.5,
    solde: 340.20
  }
];

let TabAnnonces = [];
let id = 0;
function publierAnnonce(user,newtitre,newdescription,newprix,newcategory)
{
  if(user.role === "vendeur"){
 
  let annonce = {
    id : id,
    vendeur_id : user.id,
    titre : newtitre,
    description: newdescription,
    prix : newprix,
    category : newcategory,
    etat: "bon",
    statut : "disponible",
    Date_publication : new Date()
  }
    
  TabAnnonces.push(annonce);
  id++;
  }
}

publierAnnonce(users[0],"titreajouter","description ajouter",123,"Électronique");
publierAnnonce(users[2],"titreajouter2","description ajouter2",163,"Sport");
publierAnnonce(users[1],"titreajouter","description ajouter",130,"Autre");


function modifierPrix(newprix,annonce)
{
  if(annonce){
  annonce.prix = newprix;
  }else{
    console.log("not found annonces");
  }
}

modifierPrix(330,TabAnnonces[1]);
// console.log(TabAnnonces);

function retirerAnnonce(id)
{
  for(let i = 0 ; i < TabAnnonces.length ; i++){

    if(TabAnnonces[id].id == id){
      TabAnnonces.splice(id,1);
    }
  }
}
// console.log(TabAnnonces);
// retirerAnnonce(0);
// console.log(TabAnnonces);

function rechercher()
{
  return TabAnnonces.filter(annonce => annonce.prix < 100 || annonce.etate === "très bon" || annonce.category === "electronique");
}

function triByPrix()
{
  return TabAnnonces.Sort((a,b)=> a.prix - b.prix);
}
function filtrerCategorie(cat) {
  return annonces.filter(a => a.categorie === cat);
}

function triByDate()
{
  return TabAnnonces.Sort((a,b)=> Date(a.Date_publication) - Date(b.Date_publication));
}

let transactions = [];

function acheter(acheteur_id, annonce_id) {
  let acheteur = users.find(u => u.id === acheteur_id);
  let annonce = annonces.find(a => a.id === annonce_id);

  if (!annonce || annonce.statut !== "disponible") {
    console.log("Annonce non dispo");
    return;
  }

  if (acheteur.solde < annonce.prix) {
    console.log("Solde insuffisant");
    return;
  }

  let vendeur = users.find(u => u.id === annonce.vendeur_id);

  let commission = annonce.prix * 0.05;

  acheteur.solde -= annonce.prix;
  vendeur.solde += (annonce.prix - commission);

  annonce.statut = "vendu";

  transactions.push({
    id: transactions.length + 1,
    acheteur: acheteur_id,
    vendeur: vendeur.id,
    annonce: annonce_id,
    montant: annonce.prix,
    commission: commission,
    date: new Date()
  });
}


let avis = [];

function noter(transaction_id, note, commentaire) {
  let t = transactions.find(t => t.id === transaction_id);

  if (!t) return;

  avis.push({
    transaction_id,
    vendeur: t.vendeur,
    note,
    commentaire
  });

  let notes = avis.filter(a => a.vendeur === t.vendeur);

  let total = 0;
  notes.forEach(n => total += n.note);

  let vendeur = users.find(u => u.id === t.vendeur);
  vendeur.note = total / notes.length;
}


function totalVentes() {
  let total = 0;
  transactions.forEach(t => total += t.montant);
  return total;
}

function totalCommission() {
  let total = 0;
  transactions.forEach(t => total += t.commission);
  return total;
}

function annoncesDisponibles() {
  return annonces.filter(a => a.statut === "disponible").length;
}