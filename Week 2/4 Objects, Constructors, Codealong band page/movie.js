function Movie(release_year, rating, director) {

    this.release_year = release_year;
    this.rating = rating;
    this.director = director;

    this.studio = null;
    this.location = null;

    this.likes = 0;

    // defining methods via constructor
    // there will be an instance of the below functions (methods) for each new Movie object
    this.watch = function() {
        console.log("starting!");
        // some code to do with watch
    };

    this.getAge = function() {
        var today = new Date();
        var currentYear = today.getFullYear();
        var age = currentYear - this.release_year;
        return age;
    }

}

console.log(Movie.prototype);

// defining methods via prototype
// this will create just one instance in the original prototype unlike the ones defined in the constructor
Movie.prototype.like = function() {
    this.likes = this.likes + 1;
};

console.log(Movie.prototype);

var readyPlayerOne = new Movie(2017, 'PG', 'Steven Spielberg');
var theHatefulEight = new Movie(2015, 'R', 'Quentin Tarantino');
var jurassicPark = new Movie(1993, 'PG', 'Steven Spielberg');
var backToTheFuture = new Movie(1985, 'PG', 'Steven Spielberg');

readyPlayerOne.watch();

var age = readyPlayerOne.getAge();
console.log(age);

console.log(backToTheFuture.getAge());

console.log(backToTheFuture.likes);
backToTheFuture.like();
console.log(backToTheFuture.likes);