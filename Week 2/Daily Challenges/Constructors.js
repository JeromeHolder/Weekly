//Constructor function

// 1. Create a constructor function that represents a pastry dessert.
 // a. This function should have 4 properties. (type, base flavour, frosting flavour, price)
 // b. Add a property called withTax which is a function that returns the price including tax (Ontario HST = 1.13)
 // c. Create a variable called cake and make it an instance of the dessert constructor.
 // d. Use the dessert prototype to add a description of the dessert.
      // description - 'This is a ' + add flavour here +  add type here + ' that has ' + add frosting here + ' frosting and costs $' + add price here +'. The grand total for this is $' + add with tax here + ' including HST.`
 // e. console.log the cake description
 

 function Dessert(type, baseFlavour, frostingFlavour, price) {
     this.type = type;
     this.baseFlavour = baseFlavour; 
     this.frostingFlavour = frostingFlavour;
     this.price = price;

     this.withTax = function() {
         return (this.price * 1.13).toFixed(2)
     }
 }

//  Dessert.prototype.withTax = function() {
//      this.inclTax = this.price * 1.13;
//  }

Dessert.prototype.printDessert = function() {
    return `This is a ${this.baseFlavour} ${this.type} that has ${this.frostingFlavour} frosting and costs $${this.price}. The grand total for this is $ ${this.withTax()} including HST.`
 }

 let cake = new Dessert('profiterole', 'vanilla', 'chocolate', 1);

 console.log(cake);
 console.log(cake.printDessert());