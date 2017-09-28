var Manu = {
    printFirstName : function(){
        console.log("My name is Manu");
        console.log(this === Manu);
    }
};
Manu.printFirstName();
//default calling context is Global
function doSomeThingWorthy(){
    console.log("This is worthy I guess");
    console.log(this === global);
}
doSomeThingWorthy();

//Prototype
function user (){
    this.name = "";
    this.life = 100;
    this.giveLife = function giveLife (targetPlayer) {

        targetPlayer.life += 1;
        console.log(this.name + " given 1 life to " + targetPlayer.name);
    }
}
var Madhan = new user();
var Raj = new user();
Madhan.name = "Madhan";
Raj.name = "Raj";

Madhan.giveLife(Raj);
console.log("Madhan : " + Madhan.life);
console.log("Raj : " + Raj.life);

//you can add functions to all objects
user.prototype.uppercut = function uppercut (targetPlayer){
    targetPlayer.life -= 4;
    console.log(this.name + " Just uppercutted " + targetPlayer.name);
};
Raj.uppercut(Madhan);
console.log("Madhan : " + Madhan.life);
console.log("Raj : " + Raj.life);

//you can add properties to all objects
user.prototype.magic = 60;
console.log(Madhan.magic);
console.log(Raj.magic);