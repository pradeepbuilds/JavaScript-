//IIFE immendiately invoked function experssion 

//execuate the function after is made/define means done with function declartion immeditaley call it .It is wrap inside the () round bracket 
// why it is done so to avoid global scope pollution  
//Useful for initialization tasks.
//Helps organize code without interfering with other scripts.


//example
//it can be done all function decartion type arrow ,name , parameter

(function printName(name){
    console.log(`My name is ${name}`);
})("pradeep");//-> () 1st one is used for function defination and () 2nd one is used for execuation 
// to write the the mulitple  iife need to give semiclon by own then you can write below it ;

(()=>{
    console.log("DataBase is connected");
})();