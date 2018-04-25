let artist = {
    name: {
        given: 'Abel',
        sur: 'Tesfaye'
    },
    stageName: 'The Weekend',
    age: '28',
    'latest Album': 'Starboy'
}
/*First*/
// 1. Create a function that will take in an object as a parameter and use that object to return the completed sentence.
    // /*First*/ + /*Last*/ + ' aka ' +  /*stage name*/ + 'is ' + /*age*/ + ' years old. If you haven’t heard their latest album ' + /*album*/ + ' YOU ARE SERIOUSLY MISSING OUT!!'

// function printOut(x) {
//     console.log(x.name.given + " " + x.name.sur + " aka " + x.stageName + " is " + x.age + " years old. If you haven’t heard their latest album " + x['latest Album'] + " YOU ARE SERIOUSLY MISSING OUT!!");
// }
// printOut(artist);
    
const grade8List = [{name: 'Ian',inClass: true}, {name: 'Alice',inClass: false}, {name: 'Will',inClass: false}, {name: 'Dan1',inClass: true}, {name: 'Shane',inClass: true},]
const grade9List = [{name: 'Dani',inClass: true},{name: 'Ben',inClass: true},{name: 'Graeme',inClass: true},{name: 'Dan2',inClass: true},{name: 'Franny',inClass: false},]
// 2. Time to create a school attendance system.
    // a. Create a global variable called school and make it an empty array.
    // b. Create a function that takes in an array of students and a number representing the grade they are in. Name the function classAttendance.
    // c. Within the classAttendance function push all the names of the students that have an 'inClass' equal to true to a local variable called students.
    // d. Once you have pushed all students present in class, create an object with the grade and array of students.
    // e. Push the object to the school array and return the object.
    // f. Invoke the classAttendance function with each list of students.
    // g. console.log the global variable to ensure both objects were pushed correctly. 

let school = [];

function classAttendance(arr, num) {
    let students = [];
    for(let i = 0; i < arr.length; i++) {
        if(arr[i].inClass === true) {
            students.push(arr[i].name)
        }
    }
    let classroom = {
        grade: num,
        class: students
    }

    school.push(classroom);

    return classroom;
}

classAttendance(grade8List, 8);
console.log(JSON.stringify(school));
