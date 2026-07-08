//this keyword is used to refer the current context means for eg if we are in object and we use this.name so it will take name from that current object 


// In Classes / Constructors

// this refers to the newly created object.

// js
// class Car {
//   constructor(model) {
//     this.model = model;
//   }
// }
// let c = new Car("Baleno");
// console.log(c.model); // "Baleno

const user={
    userName:"Pradeep",
    price:999,
    welcomeMessage: function (){
        console.log(`${this.userName} welcome to Pradeep console`);
        console.log(this);
    }

}

user.welcomeMessage();

console.log(typeof this);//imp in node envrionment these refer to  empty object
//but in browser it refer to window globl object 

//function in this

function chai(){
    console.log( typeof this);
    //imp in function it have differnt global values it is not empty
}
chai();//context works only on the object not with the function it not refer the current context ok .


//it is same with variable stroing  function same 

//+++++++++arrow function ++++++++++

    const name=()=>{
        console.log("These is the syntax of arrow function");
        //but imp in function that arraow function this object is empty not store any value it is empty like node this object 
        //Arrow Functions

// Arrow functions do not have their own this.

// They use this from the surrounding (parent) scope.

// js

return;
    }



    //implict return 

    //it  means no need to write the return if we are wrting all in one line and inside ()

    const addTwo =(num1,num2)=>num1+num2 ;//these also correct no error 
    const addone=(num1,num2)=>({})//inside same you can return the object ,array all thing but these () bracket are needed ok and no need to write return keyword speicifcally 
    

