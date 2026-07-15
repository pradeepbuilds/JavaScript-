/*

JavaScript does support classes and objects, but they are not “true” classes like in Java or C++—instead, ES6 classes are syntactic sugar built on top of JavaScript’s prototype-based inheritance system. I

//js follows the protoypial behaviour means access the child parent grand like wise until , you get the result .

What is a Prototype?
Every JavaScript object has a hidden property called [[Prototype]].

This property points to another object, which acts as a blueprint or fallback for properties and methods.

If you try to access a property on an object and it doesn’t exist, JavaScript looks into its prototype chain.


That prototype itself is an object.
 constructor (with new), the created object’s internal [[Prototype]] points to that function’s prototype object.


 Arrays, Strings, Functions → All Objects
In JS, everything except primitives (like number, string, boolean values) is an object.

Even arrays and functions are objects with extra behavior.

Example:

js
console.log(typeof []);        // "object"
console.log(typeof function(){}); // "function" (but functions are objects too!)
console.log(typeof {});        // "object"
Arrays inherit from Array.prototype.

Strings (when used as objects, e.g. new String("abc")) inherit from String.prototype.

Functions inherit from Function.prototype.

function Car(name) {
  this.name = name;
}

Car.prototype.drive = function() {
  return `${this.name} is driving`;
};

const myCar = new Car("Baleno");
console.log(myCar.drive()); // "Baleno is driving"

Functions have a .prototype property (used when creating new objects).

Objects have an internal [[Prototype]] link (used for inheritance lookup).

Both point to other objects.

What does new do?
When you write new ConstructorFunction(), JavaScript performs four hidden steps:

What is a Constructor Function?
A constructor function is just a normal function.

But when you use it with the new keyword, it becomes a blueprint for creating objects.

Think of it like a recipe:

The function tells how to make a cake (object).

new actually bakes the cake using that recipe.

What does new do?
When you write new Something(), JavaScript secretly does 4 steps:

Makes a new empty object → like building a new house.

Connects that object to the prototype → so it can use shared methods (like a clubhouse).

Runs the constructor function → fills the house with furniture (properties).

Returns the object → gives you the keys to the house.

function Car(name) {
  this.name = name; // step 3: put property inside object
}

Car.prototype.drive = function() {
  return this.name + " is driving";
};

const myCar = new Car("Baleno"); // use 'new'

console.log(myCar.name);   // Baleno
console.log(myCar.drive()); // Baleno is driving






We used constructor functions and manually added methods to the prototype:

function Car(name) {
  this.name = name; // property
}

Car.prototype.drive = function() {
  return this.name + " is driving"; // method
};

const myCar = new Car("Baleno");
console.log(myCar.drive()); // Baleno is driving



class Car {
  constructor(name) {
    this.name = name; // property
  }

  drive() {
    return this.name + " is driving"; // method
  }
}

const myCar = new Car("Baleno");
console.log(myCar.drive()); // Baleno is driving

What’s Happening Behind the Scenes
The class version is secretly converted into the constructor + prototype version.

constructor in the class = the function body in the old way.

Methods inside the class = added to Car.prototype.

So both examples above are exactly the same internally.



*/




/*
1. .call()
Immediately calls the function with a given this value.

Arguments are passed one by one.
function greet(city) {
  console.log("Hello " + this.name + " from " + city);
}

const person = { name: "Pradeep" };

greet.call(person, "Pune"); 
// Hello Pradeep from Pune



*/

//Same as .call(), but arguments are passed as an array.
//greet.apply(person, ["Mumbai"]); 
// Hello Pradeep from Mumbai


// //.bind()
// Does not call immediately.

// Instead, it returns a new function with this permanently set.

// const boundGreet = greet.bind(person);
// boundGreet("Delhi"); 
// // Hello Pradeep from Delhi


// .call() → call function now, pass args one by one.

// .apply() → call function now, pass args as array.

// .bind() → don’t call now, but create a new function with fixed this.


// Class Basics

// A class is just a cleaner way to write a constructor function.

// The constructor method is where you define properties.

// Other methods inside the class are automatically added to the prototype.

// js
// class Person {
//   constructor(name) {
//     this.name = name;
//   }
//   greet() {
//     return "Hello " + this.name;
//   }
// }

// const p = new Person("Pradeep");
// console.log(p.greet()); // Hello Pradeep
// 👉 Internally, this is the same as:

// js
// function Person(name) {
//   this.name = name;
// }
// Person.prototype.greet = function() {
//   return "Hello " + this.name;
// };
// Inheritance with extends

// extends lets one class inherit from another.

// Under the hood, it sets up the prototype chain.

// js
// class Student extends Person {
//   constructor(name, roll) {
//     super(name); // calls Person constructor
//     this.roll = roll;
//   }
//   study() {
//     return this.name + " is studying";
//   }
// }

// const s = new Student("Pradeep", 101);
// console.log(s.greet()); // Hello Pradeep (from Person)
// console.log(s.study()); // Pradeep is studying
// 👉 Internally, this is like:

// js
// function Student(name, roll) {
//   Person.call(this, name); // borrow Person constructor
//   this.roll = roll;
// }
// Student.prototype = Object.create(Person.prototype);
// Student.prototype.constructor = Student;
// Student.prototype.study = function() {
//   return this.name + " is studying";
// };
// 📚 Analogy
// Class + extends = neat cookbook recipe with chapters (easy to read).

// Constructor + prototype chain = same recipe written in rough notes (harder to read).

// The cake (object) is identical — only the recipe format changed.

// ✅ Key Takeaway from Sir’s Teaching
// JavaScript is prototype-based at its core.

// Classes and extends are syntactic sugar — they don’t add new inheritance power.

// super is just a way to call the parent constructor.

// Internally, extends = Object.create(parent.prototype).












// Lexical Scoping
// Imagine a house.

// The parent has a box of chocolates.

// The child can eat from the parent’s box because it’s in the house.

// But if the child hides a toy in their room, the parent cannot see it.

// Same with functions:

// Child functions can use parent’s variables.

// Parent functions cannot use child’s variables.

// Brothers (sibling functions) don’t share toys unless the parent gives them.

// 🔒 Closures
// Think of a closure like a school lunchbox 🍱.

// When a child leaves home, they carry the lunchbox filled with food (variables) packed by the parent.

// Even if the parent is not around, the child still has the lunchbox.

// In coding: when a function is returned, it carries its parent’s variables with it, so it can still use them later.

function outer() {
  let count = 0; // parent’s variable

  return function inner() {
    count++; // inner remembers "count"
    console.log(count);
  };
}

let counter = outer(); // outer is finished, but inner still remembers "count"
counter(); // 1
counter(); // 2
counter(); // 3



function parent() {
  let chocolate = "Dairy Milk"; // parent’s variable

  function child() {
    console.log(chocolate); // ✅ child can use parent’s chocolate
  }

  child();

  // console.log(toy); ❌ parent cannot use child’s toy
  function anotherChild() {
    let toy = "Car"; // child’s private variable
    console.log(toy); // ✅ child can use its own toy
  }
}
parent();


/*


Basics of Getters and Setters
Getter (get) → works when you read a property.

Setter (set) → works when you change a property.

They let you add custom logic instead of directly accessing the variable.

js
class User {
  constructor(name) {
    this._name = name; // internal storage
  }

  get name() {
    return this._name.toUpperCase(); // custom logic when reading
  }

  set name(value) {
    if (value.length < 3) {
      console.log("Name too short!");
    } else {
      this._name = value;
    }
  }
}

let user = new User("Pradeep");
console.log(user.name); // Output: PRADEEP (getter runs)
user.name = "Al";       // Output: Name too short! (setter runs)
👉 Think of it like a gatekeeper:

Getter = gatekeeper when you enter (read).

Setter = gatekeeper when you leave (write/change).

⚠️ Common Error: Infinite Loop
If you use the same property name inside the setter, it keeps calling itself → crash (Maximum call stack size exceeded).

❌ Wrong way:

js
set password(value) {
  this.password = value; // calls itself again → infinite loop
}
✅ Correct way (use underscore _ for internal storage):

js
set password(value) {
  this._password = value; // safe
}
🏛️ Different Syntax Styles
1. Class-based (Modern Way)
js
class Account {
  constructor(balance) {
    this._balance = balance;
  }

  get balance() {
    return this._balance;
  }

  set balance(amount) {
    if (amount < 0) {
      console.log("Balance cannot be negative!");
    } else {
      this._balance = amount;
    }
  }
}

let acc = new Account(100);
console.log(acc.balance); // 100
acc.balance = -50;        // Balance cannot be negative!
2. Object.defineProperty (Old Way)
js
let person = {};
Object.defineProperty(person, "age", {
  get: function() {
    return this._age;
  },
  set: function(value) {
    if (value < 0) {
      console.log("Age cannot be negative!");
    } else {
      this._age = value;
    }
  }
});

person.age = 25;
console.log(person.age); // 25
3. Object Literal Syntax
js
let car = {
  _speed: 50,
  get speed() {
    return this._speed;
  },
  set speed(value) {
    if (value > 200) {
      console.log("Too fast!");
    } else {
      this._speed = value;
    }
  }
};

console.log(car.speed); // 50
car.speed = 250;        // Too fast!
🔒 Private Properties (New ES2022 Feature)
Now JavaScript supports true private fields using #.

js
class Bank {
  #pin; // private property

  constructor(pin) {
    this.#pin = pin;
  }

  get pin() {
    return "Access Denied"; // cannot show directly
  }

  set pin(value) {
    this.#pin = value; // safe update
  }
}

let b = new Bank(1234);
console.log(b.pin); // Access Denied
b.pin = 5678;       // updates safely


Property Descriptors
Every property in JavaScript has hidden settings (metadata).

You can check them with Object.getOwnPropertyDescriptor().

js
console.log(Object.getOwnPropertyDescriptor(Math, "PI"));
👉 Output shows:

js
{
  value: 3.141592653589793,
  writable: false,      // cannot change
  enumerable: false,    // won’t show in loops
  configurable: false   // cannot delete or redefine
}
That’s why Math.PI = 4; doesn’t work.

⚙️ Manipulating Properties
You can change these flags with Object.defineProperty().

js
let obj = {};

Object.defineProperty(obj, "name", {
  value: "Pradeep",
  writable: true,      // can change value
  enumerable: true,    // shows in loops
  configurable: true   // can delete or redefine
});

console.log(obj.name); // Pradeep
🏷️ Flags Explained
writable → can we change the value?

js
Object.defineProperty(obj, "age", { value: 25, writable: false });
obj.age = 30; // ❌ won’t change
console.log(obj.age); // 25
enumerable → will it show in loops?

js
Object.defineProperty(obj, "secret", { value: "hidden", enumerable: false });
for (let key in obj) {
  console.log(key); // "name" only, not "secret"
}
configurable → can we delete or redefine?

js
Object.defineProperty(obj, "country", { value: "India", configurable: false });
delete obj.country; // ❌ won’t delete
console.log(obj.country); // India
🌍 Practical Use
Suppose you get data from an API and want to protect some properties.

Example: make id read-only and hidden from loops.

js
let user = {};
Object.defineProperty(user, "id", {
  value: 101,
  writable: false,   // cannot change
  enumerable: false, // hidden in loops
  configurable: false
});

user.id = 200; // ❌ won’t change
console.log(user.id); // 101

for (let key in user) {
  console.log(key); // id won’t appear
}










Alright Pradeep 👍 let’s break this **JavaScript Arrays (engineering side)** video into **super simple points** with easy examples.

---

### 🛠 JavaScript Engines and Debugging
- JavaScript runs inside engines like **V8** (used in Chrome, Node.js).  
- Tools like `d8` and `JSVU` let developers peek inside how the engine optimizes code.  
- This is like opening the hood of a car to see how the engine works.

---

### 📦 Array Types and Optimization
Engines classify arrays into different “types” for speed:

1. **Packed SMI (Small Integer)** → fastest arrays, only integers.  
   ```js
   let arr = [1, 2, 3, 4]; // Packed SMI
   ```

2. **Packed Double** → when you add floating numbers.  
   ```js
   let arr = [1.1, 2.2, 3.3]; // Packed Double
   ```

3. **Packed/Continuous** → mixed data types.  
   ```js
   let arr = [1, "hello", true]; // General packed
   ```

4. **Holey Arrays** → arrays with gaps (missing elements).  
   ```js
   let arr = [1, , 3]; // Holey (expensive)
   ```

---

### 💸 Why Holes Are Expensive
- When the engine sees a “hole” (empty spot), it must check:  
  - Is there a value here?  
  - Does the prototype have something?  
  - Are we out of bounds?  
- These extra checks slow things down.  
- Example:
  ```js
  let arr = [1, , 3]; // hole at index 1
  console.log(arr[1]); // undefined, but engine does many checks
  ```

---

### ⚖️ Optimization Rules
- If an array starts as **Packed SMI** (fast) but later gets a hole or mixed types, it **downgrades**.  
- Once downgraded, it **cannot upgrade back**.  
- Example:
  ```js
  let arr = [1, 2, 3]; // Packed SMI
  arr[5] = 10;         // creates holes → becomes Holey
  ```

---

### ✅ Recommendations
1. **Use built-in methods** like `map`, `forEach`, `filter`.  
   - Engines optimize these internally.  
   ```js
   let arr = [1, 2, 3];
   arr.forEach(num => console.log(num)); // fast
   ```

2. **Avoid holes** → always initialize arrays properly.  
   ```js
   let arr = new Array(3).fill(0); // [0,0,0] → no holes
   ```

3. **Avoid mixing types** → keep arrays consistent.  
   ```js
   let arr = [1, 2, 3]; // good
   let arr2 = [1, "two", true]; // slower
   ```

---

✅ **Summary in easy words:**
- Arrays have hidden “types” for speed.  
- Holes (missing values) make arrays slow.  
- Once downgraded, arrays stay slow.  
- Use built-in methods and avoid holes/mixed types for best performance.  

Would you like me to also show a **side-by-side performance example** (fast vs slow arrays) with code so you can see the difference clearly?x
xxvv
dddsf





*/
