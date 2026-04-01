const avis = [
  { pseudo: "Ali", note: 5, commentaire: "Excellent service", date: "2025-01-01" },
  { pseudo: "Sara", note: 4, commentaire: "Très bon", date: "2025-01-05" },
  { pseudo: "Yassine", note: 2, commentaire: "Pas terrible", date: "2025-01-10" },
  { pseudo: "Nora", note: 3, commentaire: "Correct", date: "2025-01-12" },
  { pseudo: "Omar", note: 1, commentaire: "Mauvais", date: "2025-01-15" },
  { pseudo: "Lina", note: 5, commentaire: "Parfait!", date: "2025-01-18" },
  { pseudo: "Karim", note: 4, commentaire: "Bien", date: "2025-01-20" },
  { pseudo: "Salma", note: 3, commentaire: "Moyen", date: "2025-01-22" },
  { pseudo: "Hassan", note: 2, commentaire: "Déçu", date: "2025-01-25" },
  { pseudo: "Imane", note: 5, commentaire: "Super expérience", date: "2025-01-28" },
  { pseudo: "Mehdi", note: 4, commentaire: "Très satisfait", date: "2025-02-01" },
  { pseudo: "Aya", note: 3, commentaire: "Ça va", date: "2025-02-03" },
  { pseudo: "Reda", note: 1, commentaire: "Nul", date: "2025-02-05" },
  { pseudo: "Souad", note: 5, commentaire: "Incroyable!", date: "2025-02-08" },
  { pseudo: "Zakaria", note: 4, commentaire: "Bon service", date: "2025-02-10" }
];

const moyenne = (avis.reduce((sum, a) => sum + a.note, 0) / avis.length).toFixed(1);
console.log("Moyenne:", moyenne);

const countNotes = {};

avis.forEach(a => {
  if (!countNotes[a.note]) {
    countNotes[a.note] = 0;
  }

  countNotes[a.note] += 1;
});

console.log(countNotes);

const positifs = avis.filter(a => a.note >= 4);
const negatifs = avis.filter(a => a.note <= 2);
const neutres = avis.filter(a => a.note === 3);

console.log("Positifs:", positifs.length);
console.log("Negatifs:", negatifs.length);
console.log("Neutres:", neutres.length);

const tries = [...avis].sort((a, b) => new Date(b.date) - new Date(a.date));
console.log("Tri date:", tries);

const plusLong = avis.reduce((max, a) =>
  a.commentaire.length > max.commentaire.length ? a : max
);
console.log("plus long avis: ", plusLong);
