//way of creating the number variable
const score=400;

const out =new Number(100);

//toString() method convert the number to string 

console.log(out.toFixed(2));
//these is the method in which fixed decimal tell that will come ;

//toprecsion method  signicant digit and it return the string so we can apply string method also 

let num=100000;


console.log(num.toLocaleString('en-IN'));

//max_value,min_value 

//++++++++++++++++++++Math++++++++++++++

//.abs means make negative number to positive
//.round it roundoff the values
// .ceil roundoff to the higher value 
// .floor round off to lower value 
// .min return min value 
// .max return max value 
//.sqrt sqaure root 
// .pow
// .random return random value between value bewteen 0 to 1
 /*

 math.floor(math.random()*(max-min+1)+min)
 */

 let min=300;
 let max=500;
let randomNumber =Math.floor(Math.random()*(max-min +1)+min);

console.log(randomNumber);
//uiii