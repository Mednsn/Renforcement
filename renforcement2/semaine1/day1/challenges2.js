let notes = [12, 8, 15, 6, 18, 9, 14];

let sum = 0;
let max = notes[0];
let min = notes[0];
let nbr=0;

for (let i = 0; i < notes.length; i++) {
    sum += notes[i];
}


for (let i = 0; i < notes.length; i++) {
    if (notes[i] > max) {
        max = notes[i];
    }
    if (notes[i] < min) {
        max = notes[i];
    }
    if(notes[i]>=10){
        nbr++;
    }
}
console.log("la somme des notes est : " + sum);
console.log("moyenne est : " + sum / notes.length);
console.log("max est : " + max + " et min est : " + min)
console.log("le nombre des eleves ayant moyenne plus de 10 est : "+nbr);