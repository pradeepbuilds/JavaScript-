//understand datatypes are the type of keyword which tells us what type data we are stroing in variable have sepific value and range according to type ;
// no need to mention data type specifically in javascript it detect automatically 


//"use strict" these treat all js code as new version 

//imp while writing the code it should be readable 

//alert("") are used to give alert from code 

// alert("hello"); // in node have difernt syntax of delcaration m these is for browser ;


//datatypes all premitive type 

let name="Pradeep"; // string which should be written in "" double ,single qoute both are allowed 

let age=55; // number in these decimal , negative ,positive can be store range max 2 power 53 -1 and negative of these ok 
// can be seen through Number.MAX_VALUE;Number.MIN_VALUE


let bulb= true;// boolean mean either yes/true/on or off/false/no

//bigint more greater int 


let value =null;// datatype is null representing the empty value  means stand alone value but it is object 

let rollNo;//datatype is undefined value is not given 

//symbol it is for repersent uniquness 


// no primitive  eg. object,array

// to see the type of values/ varaible the default function used is typeof
console.log(typeof(name));

console.table([typeof(name),typeof(age),typeof(bulb),typeof(value)]);