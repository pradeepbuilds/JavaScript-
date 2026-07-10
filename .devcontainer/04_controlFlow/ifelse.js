//control flow means , we don't want to run all the code at once and for that we need to control run for that we have if-else , switch ternary 

// if(condition){ if run only when the value is true if false then else run 
//     //scope these is block scope 
// }
// else{

// }

//in condition we check with >,<,>=,<=,!=,==,===, use and && , or  || , not !
// = assignment operator 

//let do for blanace 

let i =5000;

if(i>6000){
    console.log("You have sufficent amount");
}
else{
    console.log("add some amount");
}

// implicit scope means we can write 
//if(condition) console.log("without barcket"),console.log("")  but not good practice 

//var is always global scope so aviod/don't  using that 

//nesting  in if else

    // if(condition){
// check multiple contiion one after , execte which is true only 
    // }
    // else if(){

    // }
    // else{}



        //++++++++++++++++switch+++++++++
    // same like if else no change ok but not used that much
    // In JavaScript, the main difference is that if-else can handle complex logical conditions (like ranges, comparisons, multiple operators), while switch is best for checking one variable against multiple fixed values.
    // switch(key){
    //     case 1:{
    //         console.log("my name is pradeep");
    //         break;
    //     }
    //     case 2:{
    //         break;
    //     }
    //     default :{

    //     }
    // }

//falsy value 
//0,-0,BigInt 0n,"",null,undefined,nan;

//all other then these value are true 
//"0","false",empety object,array , function all are true


//how to now the array is empty or object is empty 
// if(Array.length==0){
// []these also true;
// }

//object 
// let myObject={}
// if(Object.keys(myObject).length==0){

// }

//imp operator 


//nullish caleseing operator 
// it used handle error means if from database null or defined error comes we assign the value if our 
//let val2= null (these will come from another function /operation) ?? 10(means take these value)
//let val1=10?? 20 it will take 10 not 20

// let val1 =null??10??20;
// again it will take 10 only ;

//ternary operator 
//condition?true:false
//a>10?console.log(""):console.log("");




