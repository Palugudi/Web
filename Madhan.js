var movie2 = require('./ModuleMovies');

var MadhanMovies = movie2();
MadhanMovies.favMovie1 = "Fida";
console.log("Madhan's favorite movie is : " + MadhanMovies.favMovie1);