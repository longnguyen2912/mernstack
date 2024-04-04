//Javascript is - Interpreted Languages and Partially Compiled as well due to hoisting feature

//Case sensitive

var myName = "Arda"
var MyName = "Garcia"

console.log(myName)
console.log(MyName)

// semi-colon : is optional, expect few edge cases (IIFE function) 
// we can declare variables -
// using string
// using alphanumeric, but shouldn't start with number
// var 1_name1 is not allowed
// only two special chars can be used - $ and _
// var $name, _name //, name@
// space is not allowed between var name 

//expressions and operators
// && - and, || - or, ! - not, =, ==, ===, ? (ternary operator)

var a = 10 // number, 10
var b = 10
if(a===b){
    console.log("are actually equal");
} else if (a==b){
    console.log("only values are equal not it type");
}
a == b ? console.log("are actually equal") : console.log("only values are equal not it type")