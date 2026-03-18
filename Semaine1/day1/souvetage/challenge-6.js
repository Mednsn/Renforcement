let courses =[
    {'nom':'lait','quantite':'2','prix':'12'},
    {'nom':'sucre','quantite':'6','prix':'10'},
    {'nom':'tea','quantite':'4','prix':'11'},
    {'nom':'bread','quantite':'1','prix':'6'},
    {'nom':'meat','quantite':'3','prix':'8'},
]
let total = 0;
for(let i = 0 ; i < courses.length ; i++){
  console.log(courses[i].nom+" x"+courses[i].quantite+" = "+courses[i].prix+"£");
  total+=courses[i].prix;
}
console.log(total);
