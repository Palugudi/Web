//diff files in node.js called as modules
/* var movies = require('./ModuleMovies');
//movies.avatar();  for 2nd model to do individually

movies.printAvatar();
movies.printBahubali();
movies.printAvatar2();
movies.printBahubali2();

console.log(movies.favMovie); */

require('./emily');
require('./Madhan');

setInterval(function(){
    console.log("Paris");
    }, 2000

);