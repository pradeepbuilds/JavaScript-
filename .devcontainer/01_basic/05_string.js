//string created with these is directly store in stack not in heap ;
const name ="Pradeep";
const repo =50;
//imp while using the method with these type of string declare js automatically wrap in object in backend called as autoboxing.after that it is discard.

// but string created with these ref in stack and heap object 


console.log(`My name is ${name} I have Created the total ${repo} repo `);

console.log(typeof(name))

let gameName = new String("Freefire");

console.log(`These is been created by new string method so it is object not string ${gameName}`);

console.log(typeof(gameName));



//method in string 


console.log(gameName.slice(1,5));
//ending index is exculded and it can take negative value ,means it will count from back of string  
console.log(gameName.substring(0,5));
//same return string but imp no negative value giving is include

console.log(gameName.charAt(3));
//give the character at that ith index la ok 

// console.log(str[3]);
//same as charAt but little shorthand ok 

console.log(gameName.indexOf('t'));
//return character is at which index at 1st found and if not return -1

console.log(gameName.includes('x'));

//returns the if contain true if not false 


console.log(gameName.startsWith("f"));
console.log(gameName.endsWith("e"));
//check if string end or start with the letter I have mention return true or false


console.log(gameName.toUpperCase());
console.log(gameName.toLowerCase());
//make all character to lower and upper 

//remove the spaces from start and end 
console.log(gameName.trim());

//similar method trimstart() and trimEnd()


console.log(gameName.replace("f","p"));
//replace the f with 1st match with p and return 

console.log(gameName.replaceAll("a","b"));
//it replace all a present in string with b not just 1st finding 

console.log(gameName.split(" "));
//it spilt according to the space and return us array means what we give 


// console.log(gameName.join("-"));
//these join the array and add these between them and join and return string ;

console.log(gameName.padStart(1,"0"));
// add zero to left of string 
console.log(gameName.padEnd(4,"0"));
//adds 0 to left of string 


//.length givese the length of string ok 






