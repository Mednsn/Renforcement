let etudients = [
    { 'nom': 'aimad', 'prenom': 'mallali', 'age': '23', 'moyenne': '18' },
    { 'nom': 'yassir', 'prenom': 'mitrok', 'age': '21', 'moyenne': '11' },
    { 'nom': 'zakaria', 'prenom': 'hafyani', 'age': '18', 'moyenne': '18' },
    { 'nom': 'salah', 'prenom': 'taborigt', 'age': '17', 'moyenne': '14' },
    { 'nom': 'mohamed', 'prenom': 'tazrgt', 'age': '18', 'moyenne': '8' },
    { 'nom': 'ammar', 'prenom': 'mokhtari', 'age': '14', 'moyenne': '13' },
];

for (let i = 0; i < etudients.length; i++) {
    if (etudients[i].moyenne >= 12) {
        console.log(etudients[i])
    }
}
for (let i = 0; i < etudients.length; i++) {
let temps;
    for (let j = i+1; j < etudients.length; j++) {
        if (etudients[i].age > etudients[j].age) {
          temps = etudients[i];
          etudients[i] = etudients[j];
          etudients[j] = temps;
        }
    }
}
console.log("Plus jeune au plus âgé : ");
console.log(etudients);

function recherche(nomEtd){
    for(let i = 0 ; i < etudients.length ; i++){
        if(etudients[i].nom === nomEtd){
            console.log(etudients[i]);
            return 
        }
        
    }
    console.log("etudient non trouver.");
}

recherche("mouard");
recherche("muard");

