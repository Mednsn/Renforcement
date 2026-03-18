let notes = [12, 8, 15, 6, 18, 9, 14];
let sum = 0;
let avg = 1;
for(let i = 0 ; i < notes.length ; i++){
    sum+=notes[i];
}
console.log(sum/notes.length);
let max = notes[0];
for(let i = 0 ; i < notes.length ; i++){
    if(notes[i]>max){
        max=notes[i];
    }
}
let min = notes[0];
for(let i = 0 ; i < notes.length ; i++){
    if(notes[i] < min){
        min=notes[i];
    }
}