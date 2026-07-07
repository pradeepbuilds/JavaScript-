// these the way of declare with constrcuter so it became the singleton

const tinderUser = new Object();
//creates the object which is singleton 

tinderUser.id="5554elejIU";
tinderUser.namee="Pradeep Sanap";
tinderUser.isLogged=false;

//nesting of object and access 
//we can store object inside object ok
const regularUser ={
    email:"pradeeppsanap@gmail.com",
    fullName:{
        firstName:{
            name:"Pradeep"

        },
        lastName:{
            lastname:"Sanap"
        }
    }
}

//acess tp nested object

    console.log(regularUser.fullName?.firstName);
    //optional chaining ? is used to check if  not exist to avoif thee crash It means
    // imp 
    //  "look for this value, but if it doesn’t exist, don’t throw an error — just give undefined."



    //how to merger two objects 

    const obj1={1:"a"};
    const obj2={2:"b"};

    //method 1
    // const obj3 ={obj1,obj2}; //but these is wrong because it create the object inside object {{},{}}

    const obj3 =Object.assign({},obj1,obj2);
     console.log(obj3);
// assgin is the method which return the object which is mix
//{ }-> these is target means all will come here 
//which object need to merge are the soure 


//method 3
 // these is uesd more and easy 

 const obj4= {...obj1,...obj2};
 console.log(obj4);
 //these the spread operater used lot



 //when data comes from the database it comes in array and inside array it will have many object 

 const user=[{name:"Pradeep",},{name:"Pratap"}];

 //they will acessed in these format 
console.log(user[0].name);// array with index and object with dot and name of key ;

//these are the method are objects

   console.log( Object.keys(tinderUser));
  console.log( Object.values(tinderUser));
  // these method will return the array of key and values which can be used to  loop

  //imp method .length .entries give the array of each key value pair. key is at start and next to that index  value is store .


//.hasownProperty these is used to check the key is  persent or not hlep to not to crash the server ; return vaules the true or false 





//++++++++++destructure of object means taking values from object 
//everytime we write user.name ,age it every diffcult we use the destricture

const course={
    course:"JavaScript",
    price:"free",
    courseteacher ="Pradeep"
}

//destructure syntax
const{courseteacher:teacher}=course;
console.log(teacher);


//API just basic 

//api is the way the 2 software program talk each other 

// An API (Application Programming Interface) is a messenger between two software programs.

// You send a request (like “give me user data”).

// The API talks to the system and gets the result.

// Then it delivers the result back to you in a format you can use.

// 💡 Simple analogy:  
// API = waiter
// Kitchen = software system
// You = programmer or app







//format used in api to talk 


//  Most modern APIs prefer JSON because it’s lightweight and simple.


// JSON (JavaScript Object Notation)

// Looks like key–value pairs.

// Example:

// json
// {
//   "name": "Pradeep",
//   "age": 22,
//   "city": "Pune"
// }
// Easy for humans to read and for machines to process.

// XML (Extensible Markup Language)

// Uses tags, similar to HTML.

// Example:

// xml
// <user>
//   <name>Pradeep</name>
//   <age>22</age>
//   <city>Pune</city>
// </user>
// Other formats (less common today): CSV, plain text, or even HTML.

 
//data can come in object inside array or only object etc we need to handle 