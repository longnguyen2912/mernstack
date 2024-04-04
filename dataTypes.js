// String, float, Numbers, Object, Int, short, long, Bytes
// Primative Types
// String, Number, Boolean, Undefined, Null 

// Non primative Types (assigned as reference)
// Object

// ES-6 : Symbol - (ES6 : class bae)

//var - is a keyword used in core-js to declare variables, function etc
console.log(data_name)

var data_name = "learning MERNStack"

console.log(data_name)
console.log("Data Type", typeof data_name) 

var data_name = "Learning Vanilla JavaScript"

console.log(data_name)
console.log("Data Type", typeof data_name) 

var data_name = null

console.log(data_name)
console.log("Data Type", typeof data_name) 

data_name = {}

data_name = {
    FirstName : "Hemant", 
    Address : "Somewhere on earth"
}

console.log(data_name)
console.log("Data Type", typeof data_name)

data_name = null

console.log(data_name)
console.log("Data Type", typeof data_name)

data_name = {
    FirstName : "Mark",
    Address : "Somewhere in London"
}

data_name = 1 == 2

console.log(data_name)
console.log("Data Type", typeof data_name)

var emptyObj = null
var emptyObj2 = null

data_name = emptyObj == emptyObj2

console.log(data_name)
console.log("Data Type", typeof data_name)

//symbol is used to create customized variable of our choice
var symbol_1 = Symbol("New Value of my choice")

console.log(symbol_1)
console.log("Data Type", typeof symbol_1)