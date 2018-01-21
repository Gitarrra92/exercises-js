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

// function returnFullName1 (name, surname) {
//     return name + " " + surname
// }
//
// var x = returnFullName1("Natalia", "Pilewska")
// console.log(x)
//
// var returnFullName2 = function (name, surname) {
//     return name + " " + surname
// }
//
// var y = returnFullName2("Anna", "Kowalska")
// console.log(y)
//
// const returnFullName3 = (name, surname) => (name + " " + surname)
// var a = returnFullName3("dupa", "blada")
// console.log(a)

// Classes
//
// function Car(color, year){
//     this.color = color;
//     this.year = year;
// }
// Car.prototype.sound = function (s) {
//     console.log(s)
// }
//
//class Car1{
  //  constructor(color, year){
  //  this.color = color;
   // this.year = year;
//}
//sound(s){
    //console.log(s)
//}
//}



//const newObject = new Car1("blue", 1992)

//console.log(newObject)


//Inheritance in JavaScript

//class SportCar extends Car1{
    //constructor(par1,par2,speed){
   // super(par1, par2)
    //this.speed = speed
//}
//}
//const ferrari = new SportCar ("red",2001,250)
//console.log(ferrari)
//Constructor function

// ES6

//const name = "Natalia";
//const msg = "Message ${name}";



//const name = "Andrzej";
//const hi =" Hi ${name}";

//msg = `Hello ${name} how are you? `


// arrow function
//let up = function(name){
   // return name.toUpperCase();
//}

//let up = name => name.toUpperCase();


// arrow function- this
//let init = function() {
    //this.message = 'Arizona dream';
   // let self = this;
    //document.body.addEventListener("click", function() {
      //  alert(self.message);
    //});
//};
//init();

//let init = function() {
   // this.message = 'Arizona dream';
   // let self = this;
    //document.body.addEventListener("click" = () => alert(this.message))
//});
//};


//DESTRUKTURYZACJA TABLIC
//1.
//const a = ["one", "two", "three"];
//const[b,c,d] = a
//console.log(b)
//console.log(c)
//console.log(d)

//2.
//const arr = ["one", "two", "three"];
//const[a,b,c] = arr
//console.log(a)

//3.

//const myArray = ["one", "two", "three"];
//const[x,y,z] =myArray
//console.log(z)

//4.
//var a,b;
//[a,b] = [1,2];
//console.log(a);









