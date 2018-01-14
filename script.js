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

//
// function Car(color, year){
//     this.color = color;
//     this.year = year;
//
// }
// Car.prototype.makeSound = function () {
//     console.log("wrrr")
// }
//
// var car = new Car("blue", 1990)
//  car.makeSound()

// arrow functions

function returnFullName1 (name, surname) {
    return name + " " + surname
}

var x = returnFullName1("Natalia", "Pilewska")
console.log(x)

var returnFullName2 = function (name, surname) {
    return name + " " + surname
}

var y = returnFullName2("Anna", "Kowalska")
console.log(y)

const returnFullName3 = (name, surname) => (name + " " + surname)
var a = returnFullName3("dupa", "blada")
console.log(a)

