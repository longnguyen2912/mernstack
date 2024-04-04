console.log("Client side scripting language, interpreted, oojs, functional, dynamic typing, case sensitive, auto");

PrintName(user_Name)

var user_Name = "Romant" //undefined is default value- got hoisted with default value

//PrintName(user_Name)

function PrintName(name){ // get hoisted (snapshot created)
    console.log(name)
}

//PrintName(user_Name)