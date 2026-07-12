//function is that container which increse the reusablity of code and that packes the code   in on one packet and acess 
 

//synax of function making and calling 
// function sayMyName(){
//     console.log("My name is Pradeep ");
// }



// sayMyName();
//only satMyName just show the address that function exsit here to call we use () then it get execute 



function addTwo(num1 ,num2){ // value passed are parameter
    return num1+num2;
}

let sum=addTwo(4,5);//value passed are argunment 
console.log(sum);

//if I don't passed any value it shows undefined 


//can give the default value also by (name = "pradeep") these will be treated as deault 


//(!undefined ) undefined is consider as flase when it comes it will covert to true then if condition run 



//the number of parametr pass are more we take only one so these can be handle with (...rest operater) it store all parameter in array then we can acess and get one one value 
//function ( ...myname)
// //function sayname(a,...b){
// return a;
// }
//sayname(2,3,4,5,5)//the value 2 will store in a and other will store in array of b it rest operator 

//methodcurry 
/*
sayname(2,3);
sayname(2)(3);

function syname(a,b){

 if(b !=undefined){return a+b

 else return function sayname(b){
 return a+b

}


*/



//object and array in function pass directly or pass with variable 
function printPerson(person) {
  console.log("Name:", person.name);
  console.log("Age:", person.age);
}

// Example object
const personObj = { name: "Pradeep", age: 22 };

printPerson(personObj);
// Output:
// Name: Pradeep
// Age: 22
function printNumbers(numbers) {
  numbers.forEach(num => console.log(num));
}

// Example array
const numArray = [10, 20, 30, 40];

printNumbers(numArray);
// Output:
// 10
// 20
// 30
// 40




//imp check the type of data type ,isaaviable or not 

