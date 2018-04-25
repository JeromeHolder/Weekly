let fishes = require('./fishdata.js');

/* your task:
    write a function 'matchmaker' that takes 
    the following parameters
        1 - an array of fish
        2 - one fish object that is looking for a friend
    
    the 'matchmaker' function should look through the array
    and return an array of fish that would be compatible
    
    to be compatible with each other, two fish must
    a) have the same water type
    a) either both be predators or both be NOT predators    

*/

let phil = {
    name: 'phil',
    type: 'sole',
    water: "salt",
    predator: false
};

let philsFriends = matchmaker(phil, fishes);
console.log(philFriends);

function matchmaker(fishUser, fishes){
    let candidates = fishes.filter(function(currentFish){
        let waterMatch = (fishUser.water === currentFish.water)
        let predatorMatch = (fishUser.predator === currentFish.predator);

        return waterMatch && predatorMatch;
    });

    return candidates;
}