function PlaceAnOrder(OrderNumber){
    console.log("Custmer Order :",OrderNumber );

    CookAndDeliverFood(function(){
        console.log("Delivered Food order :", OrderNumber );

    });
}
// evaluate a 5sec operation
function CookAndDeliverFood(callback){
    setTimeout(callback, 5000);

}
//evaluate users web requests
PlaceAnOrder(1);
PlaceAnOrder(2);
PlaceAnOrder(3);
PlaceAnOrder(4);
PlaceAnOrder(5);
PlaceAnOrder(6);
PlaceAnOrder(7);
//references to objects
var Kon = {
    favfood : "Biryani",
    favmovie : "Bahubali"
};
var Don = Kon;
Don.favfood = "Item : POORI";
console.log(Kon.favfood);
//console.log(19 == '19'); // true compare values
//console.log(19 === '19'); // true compare data types
