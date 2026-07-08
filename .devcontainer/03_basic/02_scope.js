//The scope are the limit means which variable have excess till how much 

//{}  all the thing inside curely bracket are called scope 

//global scope varaible can be accessed by child means if  and function etc but parent can't access there varaible 

//problem with var , it  was not floowing the block scope these is big problem and  decalre without keyword also not follow the scope ;




// if(true){
//     let a=10;
// const b=20;
// var c=30;
// }

// console.log(c);
//check how c is accesible outside the scope so not to use that 

//concept of closure is parent can give but can't access is property in simple words;

// nested scope 

function one(){
 const userName="Pradeep Sanap";
 function two (){
    const website="youtube";
    console.log(userName);
 }   
//  console.log(website);// parent can't access the child vaiable 
 
}
//  two();//these the outoff scope so it can't be called outside of function is is nested ok 

// one();


//+++++++++++++++++type of declartion of function different 

function addOne(num){
   return num+1;
}
// for these declartion we can call function before or after declaration no worries 

const addTwo =function name(num){
   return num+1;
}
//these declaration can be called after only declare not before ok and the  variable we are stroing is called as experssion 

//concept of hositing 