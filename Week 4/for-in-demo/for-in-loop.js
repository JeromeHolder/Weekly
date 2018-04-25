const canada = {
    name: "Canada",
    population: 30,
    nationalSport: "Lacrosse",
    nationalFood: "Poutine",
    capital: "Ottawa",
    nationalHero: "Terry Fox"
};

for(let prop in canada){
    console.log(prop); //prop = the key name, NOT the value
    console.log(canada[prop]); //use bracket notation to access the value associated with the key
}