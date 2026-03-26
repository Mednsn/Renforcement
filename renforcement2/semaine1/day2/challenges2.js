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

let chiffre_affaires_total = ventes.reduce((sum,vente)=> sum + vente.ca,0);
console.log("- chiffre d'affaires total : {{ "+chiffre_affaires_total+"}}");
console.log("--------------------------------------------------------")
console.log("- le chiffre d'affaires moyen par mois : {{ "+chiffre_affaires_total/12+"}}");
console.log("--------------------------------------------------------")
let meilleur = ventes.reduce((max,vente)=> vente.ca > max.ca ? vente:max);
console.log("- le mois avec le meilleur chiffre d'affaires : {{ "+meilleur.mois+"}}");
console.log("--------------------------------------------------------")
let moins = ventes.reduce((min,vente)=> vente.clients < min.clients ? vente:min);
console.log("- le mois avec le moins de clients : {{ "+moins.mois+"}}");
console.log("------------------tableu plus de 50000 --------------------------------")
let nouveauTab = ventes.filter(vente => vente.ca > 50000);
console.log(nouveauTab);
console.log("--------------------------------------------------------")
const tabVille = [];
ventes.forEach(vente =>{

  if(!tabVille[vente.ville]){
    
    tabVille[vente.ville] = { totalCA : 0, totalClients : 0};
  }
  tabVille[vente.ville].totalCA += vente.ca;
  tabVille[vente.ville].totalClients += vente.clients;
})
console.log(tabVille);
console.log("--------------------------------------------------------")
let tabTri = ventes.sort((vente1,vente2)=> vente2.ca - vente1.ca );
console.log(tabTri);
console.log("--------------------------------------------------------")
ventes.forEach((element,index)=>{
  if(index >= 1){
  console.log(`- la croissance entre mois ${index} et ${index+1} : ${element.ca-ventes[index-1].ca}`);
  }
})














