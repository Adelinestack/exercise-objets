// Créer un objet qui s’appelle me.
// Modifier cet objet pour qu’il contienne vos informations personnelles:
// lastname: votre nom
// firstname: prenom
// age: …
// city: ville de naissance
// job: métier actuel
// family: un tableau avec les prénoms des personnes de votre famille
const me = {};
me.lastname = 'Colombo';
me.firstname = 'Adeline';
me.age = '34';
me.city = 'Paris';
me.job = 'dev web';
me.family = [
  {
    name: 'Eric',
  },
  {
    name: 'Monique',
  },
  {
    name: 'Valérie',
  },
  {
    name: 'Marie',
  },
];

// Faites une fonction qui lorsqu’on lui donne me en paramètre retourne
//le prénom de la première personne de la famille de me.
function firstMemberFam(objet) {
  return objet.family[0].name;
}
console.log(firstMemberFam(me));

// Créez une variable city1 qui contient la valeur city en y accédant
//par la dot notation
const city1 = me.city;
console.log(city1);

// Créez une une variable city2 qui contient la valeur de city en y
// accédant par la array notation
const city2 = me['city'];
console.log(city2);

// Affichez dans la console si les deux variables sont égales.
if (city2 === city1) {
  console.log('Egales');
}

// Créez la variable friends qui vaut la string friends
// Utilisez cette variable pour initialiser dans me un tableau d’amis
// (tips array notation)
const friends = 'friends';
me[friends] = [
  {
    name: 'ami1',
  },
  {
    name: 'ami2',
  },
  {
    name: 'ami3',
  },
  {
    name: 'ami4',
  },
];
console.log(me.friends[0].name);
