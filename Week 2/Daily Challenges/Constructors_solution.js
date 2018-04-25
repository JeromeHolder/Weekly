//Constructor function

// 1. Create a constructor function that represents a dessert.
 // a. This function should have 4 properties. (type, base flavour, frosting flavour, price)
 // b. Add a property called withTax which is a function that returns the price including tax (Ontario HST = 1.13)
 // c. Create a variable called cake and make it an instance of the dessert constructor.
 // d. Use the dessert prototype to add a description function for the dessert.
      // description - 'This is a ' + add flavour here +  add type here + ' that has ' + add frosting here + ' frosting and costs $' + add price here +'. The grand total for this is $' + add with tax here + ' including HST.`
 // e. console.log the cake description
 
 function Dessert(type, base, frosting, price){
     this.type = type;
     this.base = base;
     this.frosting = frosting;
     this.price = price;
     // to save some memory, withTax can be created with prototype just like description below.
     this.withTax = function(){
         return (this.price * 1.13).toFixed(2)
     }
 }

 let cake = new Dessert('cake', 'carrot', 'cream cheese', 25);

 console.log(cake)

 Dessert.prototype.description = function(){
     //This string is called a template literal 
     return `This is a ${this.base} ${this.type} that has ${this.frosting} frosting and costs $${this.price}. The grand total is $${this.withTax()}.`
 }

 console.log(cake.description())