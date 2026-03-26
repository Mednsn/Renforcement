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

const titres = songs.map(song => song.titre);
console.log("Titres:", titres);

const rockSongs = songs.filter(song => song.genre === "Rock");
console.log("Rock:", rockSongs);

const formattedSongs = songs.map(song => {
  const minutes = Math.floor(song.duree / 60);
  const secondes = song.duree % 60;
  return {
    ...song,
    dureeFormat: `${minutes}:${secondes.toString().padStart(2, '0')}`
  };
});
console.log("Durées formatées:", formattedSongs);

const totalSeconds = songs.reduce((sum, song) => sum + song.duree, 0);
const totalMinutes = Math.floor(totalSeconds / 60);
const remainingSeconds = totalSeconds % 60;
console.log(`Durée totale: ${totalMinutes}:${remainingSeconds.toString().padStart(2, '0')}`);

const longestSong = songs.reduce((max, song) => 
  song.duree > max.duree ? song : max
);
console.log("Plus longue:", longestSong);

const allLessThan6Min = songs.every(song => song.duree < 360);
console.log("Toutes < 6 min:", allLessThan6Min);

const hasJazz = songs.some(song => song.genre === "Jazz");
console.log("Au moins une Jazz:", hasJazz);

const sortedSongs = [...songs].sort((a, b) => a.duree - b.duree);
console.log("Triées:", sortedSongs);