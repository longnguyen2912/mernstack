//class - template/abstraction - Area
//circle, rectangle, square, etc

// Area arr = new Area();

// arr.circle()
// arr.rectangle()
// arr.square()
//functions in javascript are first class member citizens and hold almost all power present in runtime
session = "MERNStack session"
//keyword is function, name of the function, then params
// return - is mandatory in js function, by default js will return default value - undefined
// pure functions - which must have something returned

//1. Named function 
function UserName(params){
    console.log(params)
    console.log(this.session)
    //definition and the scope of the function
    console.log(this)
}

UserName("Romant") // it executes in global scope - this (global object, execution context)

//2. Funtion Expression - when we assign func definition to a var its termed as Function Expression
console.log(validUser(5,9));

var validUser = function (a,b){
    return a+b
}

console.log(validUser(5,9));

// Area arr = new Area();

// arr.circle()
// arr.rectangle()
// arr.square()

//3. IIFE - Immediately Invoked Function Expression - helps us to execute a function for one time only

//Username("David")

(function IIFE_Name(params){
    console.log(params)
    console.log(this.session)
})("David")

//as soon as function executes at ln 46 it cant be accessed any further
//IIFE_Name("params")

//4. Constructor function : is used to create a class like structure using functions

function Area(length, width, radius){
    this.length = length,
    this.width = width,
    this.radius = radius,

    this.rectangle = function (){
        return this.length * this.width
    }

    this.square = function (){
        return this.length * this.length 
    }

    this.circle = function (){
        return 3.1412 * this.radius * this.radius
    }
}
var areaObj = new Area(2, 5, 10)

console.log(areaObj.rectangle())
console.log(areaObj.square())
console.log(areaObj.circle())