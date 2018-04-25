//full structure (verbose, not very nice or portable)

const people = [
    {
        name : 'Joe',
        age : 30,
        cereals : [
            {
                name : 'Crispix',
                manufacturer : 'Kellogs',
                sugar : 8
            }
        ]
    },
    {
        name : 'Mary',
        age : 30,
        cereals : [
            {
                name : 'Crispix',
                manufacturer : 'Kellogs',
                sugar : 8
            }
        ]
    },
    {
        name : 'Joe',
        age : 30,
        cereals : [
            {
                name : 'Crispix',
                manufacturer : 'Kellogs',
                sugar : 8
            }
        ]
    }
];

console.log(people);

//better (more modular) way

var cereal1 = {
    name : 'Crispix',
    manufacturer : 'Kelloggs',
    sugar : 8
};

var cereal2 = {
    name : 'Froot Loops',
    manufacturer : 'Kelloggs',
    sugar : 80
};

var cereal3 = {
    name : 'Mini-wheats',
    manufacturer : 'Kelloggs',
    sugar : 10
};

var person1 = {
    name : 'Anne',
    age : 30,
    cereals : [cereal1, cereal3]
};

var person2 = {
    name : 'Bill',
    age : 29,
    cereals : [cereal2]
};

var cerealPeople = [person1, person2];

console.log(cerealPeople);

cerealPeople[0].cereals[1].name = 'New Name';

//variation of above

var cereals = [
    {
        name : 'Mini-wheats',
        manufacturer : 'Kelloggs',
        sugar : 10
    },
    {
        name : 'Froot Loops',
        manufacturer : 'Kelloggs',
        sugar : 80
    },
    {
        name : 'Crispix',
        manufacturer : 'Kelloggs',
        sugar : 8
    }
];

var person1 = {
    name : 'Anne',
    age : 30,
    cereals : [cereals[0], cereals[2]]
};

var person2 = {
    name : 'Bill',
    age : 29,
    cereals : [cereals[1]]
};

var cerealPeople = [person1, person2];