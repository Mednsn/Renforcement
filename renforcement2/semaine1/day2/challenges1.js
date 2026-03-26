let chansons = [
  { "titre": "Blinding Lights", "artiste": "The Weeknd", "duree_secondes": 200, "genre": "Pop" },
  { "titre": "Shape of You", "artiste": "Ed Sheeran", "duree_secondes": 233, "genre": "Pop" },
  { "titre": "Bohemian Rhapsody", "artiste": "Queen", "duree_secondes": 354, "genre": "Rock" },
  { "titre": "Lose Yourself", "artiste": "Eminem", "duree_secondes": 326, "genre": "Hip-Hop" },
  { "titre": "Billie Jean", "artiste": "Michael Jackson", "duree_secondes": 294, "genre": "Pop" },
  { "titre": "Smells Like Teen Spirit", "artiste": "Nirvana", "duree_secondes": 301, "genre": "Rock" },
  { "titre": "Rolling in the Deep", "artiste": "Adele", "duree_secondes": 228, "genre": "Soul" },
  { "titre": "HUMBLE.", "artiste": "Kendrick Lamar", "duree_secondes": 177, "genre": "Hip-Hop" },
  { "titre": "Thinking Out Loud", "artiste": "Ed Sheeran", "duree_secondes": 281, "genre": "Pop" },
  { "titre": "Levitating", "artiste": "Dua Lipa", "duree_secondes": 203, "genre": "Disco Pop" }
]
let i;
let tableauRock = [];
let minute,seconde;
for(i = 0 ; i < chansons.length ; i++){
    console.log(chansons[i].titre);
    if(chansons[i].genre === "Rock"){
        tableauRock.push(chansons[i]);
    }
    if(chansons[i].duree_secondes > 60){
       minute = parseInt(chansons[i].duree_secondes/60);
       
       seconde = chansons[i].duree_secondes%60;
       chansons[i].duree_secondes = String(minute+":"+seconde);
      // console.log(chansons[i].duree_secondes)
    }
}

console.log("****************************");
console.log(tableauRock);
console.log("****************************");
console.log(chansons);
console.log("****************************");
