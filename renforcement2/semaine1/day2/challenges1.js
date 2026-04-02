const songs = [
  { titre: "Song1", artiste: "Artist1", duree: 210, genre: "Rock" },
  { titre: "Song2", artiste: "Artist2", duree: 180, genre: "Pop" },
  { titre: "Song3", artiste: "Artist3", duree: 240, genre: "Jazz" },
  { titre: "Song4", artiste: "Artist4", duree: 300, genre: "Rock" },
  { titre: "Song5", artiste: "Artist5", duree: 150, genre: "Pop" },
  { titre: "Song6", artiste: "Artist6", duree: 360, genre: "Classique" },
  { titre: "Song7", artiste: "Artist7", duree: 200, genre: "Rock" },
  { titre: "Song8", artiste: "Artist8", duree: 170, genre: "Jazz" },
  { titre: "Song9", artiste: "Artist9", duree: 220, genre: "Pop" },
  { titre: "Song10", artiste: "Artist10", duree: 260, genre: "Rock" }
];

let TabTitres = songs.map(TabTitre => TabTitre.titre);
console.log("titre : "+TabTitres);
 console.log("===========================================================");
let TabRock = songs.filter(TabTitre => TabTitre.genre === "Rock");
console.log(TabRock);
 console.log("===========================================================");
let minute,secondes;

let songk = songs.map(song=>{
minute = parseInt(song.duree/60);
secondes = song.duree % 60;
return {
  ...song,
  duree : `${minute}:${secondes}`
}
})
console.log(songk);
 console.log("===========================================================");

let totalDuree = songs.reduce((sum,song)=>sum + song.duree,0);
minute = parseInt(totalDuree/60);
secondes = totalDuree%60;
console.log(`la duree est ${minute}:${secondes}`);
 console.log("===========================================================");
let tabLongsong = songs.reduce((song1,song2)=>song1.duree > song2.duree ? song1:song2);
console.log(tabLongsong);
 console.log("===========================================================");
let isfind= "not found";
songs.forEach((song,index)=>{
    minute = parseInt(song.duree/60);
      let k=index+1;
    if(minute<6){
      console.log("song "+k+" est moins de 6 minutes.");
    }else{
       console.log("{{-->>>> song "+k+" est plus de 6 minutes <<<--}}");
    }
    if(song.genre === "Jazz"){
      isfind = " there is one at list";
    }
});
console.log(isfind);
 console.log("===========================================================");
 let TabTri = songs.sort((songs1,songs2)=>songs1.duree - songs2.duree);
 console.log(TabTri)
 console.log("===========================================================");







