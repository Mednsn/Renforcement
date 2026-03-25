let articles = [
    {'nom':'botato','quantite':'2','prix':'30'},
    {'nom':'eau','quantite':'3','prix':'40'},
    {'nom':'meat','quantite':'2','prix':'100'},
    {'nom':'banan','quantite':'4','prix':'35'},
    {'nom':'amlo','quantite':'2','prix':'60'}
]
let total = 0;
for(let i = 0 ; i < articles.length ;i++){
    console.log(articles[i].nom+" x"+articles[i].quantite+" = "+articles[i].prix+"£");
    total += articles[i].prix*articles[i].quantite;
}
total+=total*(20/100);
console.log(total);


