// var car = {
//     color : "red",
//     year : 2017,
//     makeSound : function () {
// console.log("wrrr")
//     }
// }
//
// car.makeSound()

// function Car(color, year){
//     this.color = color;
//     this.year = year;
//     this.makeSound = function() {
//         console.log("wrrr")
//     }
// }
//
// var car = new Car("blue", 1990)
//
// console.log(car.makeSound())


function Car(color, year){
    this.color = color;
    this.year = year;

}
Car.prototype.makeSound = function () {
    console.log("wrrr")
}

var car = new Car("blue", 1990)
 car.makeSound()



