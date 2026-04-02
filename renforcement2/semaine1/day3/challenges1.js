const contacts = [
  {
    nom: "Ali",
    entreprise: "TechCorp",
    email: "ali@mail.com",
    telephone: "0600000001",
    ville: "Rabat",
    adresse: { rue: "Rue 1", code_postal: "10000", ville: "Rabat", pays: "Maroc" }
  },
  {
    nom: "Sara",
    entreprise: "Innova",
    email: "sara@mail.com",
    telephone: "0600000002",
    ville: "Casablanca",
    adresse: { rue: "Rue 2", code_postal: "20000", ville: "Casablanca", pays: "Maroc" }
  },
  {
    nom: "Youssef",
    entreprise: "TechCorp",
    email: "youssef@mail.com",
    telephone: "0600000003",
    ville: "Rabat",
    adresse: { rue: "Rue 3", code_postal: "10000", ville: "Rabat", pays: "Maroc" }
  },
  {
    nom: "Lina",
    entreprise: "DesignPro",
    email: "lina@mail.com",
    telephone: "0600000004",
    ville: "Marrakech",
    adresse: { rue: "Rue 4", code_postal: "40000", ville: "Marrakech", pays: "Maroc" }
  },
  {
    nom: "Omar",
    entreprise: "Innova",
    email: "omar@mail.com",
    telephone: "0600000005",
    ville: "Casablanca",
    adresse: { rue: "Rue 5", code_postal: "20000", ville: "Casablanca", pays: "Maroc" }
  },
  {
    nom: "Nora",
    entreprise: "TechCorp",
    email: "nora@mail.com",
    telephone: "0600000006",
    ville: "Tanger",
    adresse: { rue: "Rue 6", code_postal: "90000", ville: "Tanger", pays: "Maroc" }
  }
];

contacts.forEach(c => {
  console.log(`${c.nom} - ${c.ville}`);
});

const groupedByCity = contacts.reduce((acc, c) => {
  if (!acc[c.ville]) acc[c.ville] = [];
  acc[c.ville].push(c.nom);
  return acc;
}, {});
console.log("groupes par ville:", groupedByCity);

function entrepriserechrcher(entreprise){
  return contacts.filter( c => c.entreprise === entreprise);
}
console.log("Ttecnologier rechercher :"+entrepriserechrcher("TechCorp"));


const contactToUpdate = contacts.find(c => c.nom === "Ali");
if (contactToUpdate) {
  contactToUpdate.adresse = {
    rue: "Nouvelle Rue",
    code_postal: "30000",
    ville: "Fes",
    pays: "Maroc"
  };
  contactToUpdate.ville = "Fes";
}
console.log("Apres modification:", contactToUpdate);

contacts.forEach(c => {
  c.dernierContact = new Date(Date.now() - Math.random() * 60 * 24 * 60 * 60 * 1000);
});

const now = new Date();
const inactiveContacts = contacts.filter(c => {
  const diffDays = (now - c.dernierContact) / (1000 * 60 * 60 * 24);
  return diffDays > 30;
});
console.log("Inactifs (>30 jours):", inactiveContacts);