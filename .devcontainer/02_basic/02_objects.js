//symbol
/*

What is Symbol?
A Symbol is a special data type in JavaScript.

It is used to create unique keys for objects.

Think of it as a secret name tag that nobody else can copy.

*/

// const mysym=Symbol("name");

// console.log(typeof mysym);



//+++++++++++++++object++++++++++++++++


//  An object in JavaScript is like a box where you can store things together.

// Inside the box, you keep information in pairs: a name (called a key) and its value.

// Example: Think of a student’s record card. It has a name, age, and marks. All these details are stored together in one object.

// +++++++how to declare symbol and use in object 
 const  mysym= Symbol("myKey1");



//there 2 ways of object declartion  literals and using constructer 

            //constrcuter
// the object created with constructer is singleton means that object is only one like that no one like that and It means: only one object (instance) of a class can exist.
            // Object.create

            //literals

//with literlas have multiple copies 

// const jsUser={}//way of creating object , which is empty 


const jsUser={
    name :"Pradeep Sanap",
    age:21,
    email:"pradeepSanap@gmail.com",
    "fullName":"Pradeep Sumant Sanap",
    [mysym]:"myKey1"
};

//mysym will return the value but imp is it is string not symbol so the syntax is [mysym]
console.log( jsUser[mysym]);//for acess also need these square bracket [] and name of symbol 

// console.log(jsUser);

//imp the name is key and value is my name 
//key are store as string in object by default means "name" is store like these 

//access

console.log(jsUser.name);//these way to access the object value with dot operater but imp the key we  declare by own like these "name" can't be accessed like these .--->

//these are accessed like these

    console.log(jsUser["fullName"]);
//we use sqaure bracket with double qoutaed name of key ;




//manipulate the value jsUser.name="Pratap sanap"
//it changes the values  and override old values ok 
    jsUser.name="Pratap sanap"


//if we want to keep the oject unchanged then we use object.freeze(jsUser);


//function in object 

jsUser.greeting=function(){
    console.log(`hello user name ${this.name}`);
}

console.log(jsUser.greeting)//just return thee ref of function not do the exexcaution 

//for execuation to use 
console.log(jsUser.greeting());

//"this" is keyword use to refer the current the object and with that we can access the value of the object 