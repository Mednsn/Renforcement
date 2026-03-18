let prenoms = ['ghali', 'mohsini','kamali','lokmani','charkaui'];

function chercher(tableau, prenom){
  for(let i = 0 ; i < tableau.length ; i++){
    if(tableau[i] === prenom){
       return console.log("Trouvé à la position "+i);
    }

  }
  console.log("VNon trouve");
}
chercher(prenoms,'morad');
chercher(prenoms,'charkaui');