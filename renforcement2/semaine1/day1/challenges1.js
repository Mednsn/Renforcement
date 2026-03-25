let participants =[
    {'nom':'khalil','prenom':'mahjoubi'},
    {'nom':'khalil','prenom':'mahjoubi'},
    {'nom':'khalil','prenom':'mahjoubi'},
    {'nom':'khalil','prenom':'mahjoubi'}
]
for(let i = 0 ; i < participants.length ; i++){
    console.log(participants[i].nom,participants[i].prenom);  
}

console.log(participants[0],participants[participants.length-1],participants.length);

let participant = [{'nom':'salah','prenom':'maroco'}]

participant.push(participant);
console.log(participants);
participant.pop(participant);
console.log(participants);
participants.unshift();
console.log(participants);
