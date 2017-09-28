var movie1 = require('./ModuleMovies');

var emiliyMovies = movie1();
emiliyMovies.favMovie1 = "Bahubali";
console.log("Emily's favorite move is : " + emiliyMovies.favMovie1);