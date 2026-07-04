//conversion iss converting one form of data into another form data according our need 

//all datatypes are written in small means but for convertinng there 1st letter is written as capital 

// observation

//  numbers in string will get easily convert 
//but number+ string = NAN (not a number ) type will be number 

//null get converted to 0;type will be number 
//undefined -> get converted into nan(not a number ) type will be number 
//NaN get convert to NaN same value


//  let age =NaN;

//  console.log(typeof age);

//  let newAge= Number(age);

//  console.log(typeof newAge);
//  console.log( newAge);


// conert to boolean
//observation 

//0 convert -> false
//1 ->true  vlaue other than 0 is always  true 
//empty string is consider -> fasle ;
// not empty is -> true means space are also counted
//null -> false
//undefined -> false 
//NaN -> false
// let logged = NaN;

// console.log(typeof logged);

// let newlogged =Boolean(logged);
// console.log(typeof newlogged);
// console.log(newlogged);

//convert to stirng 
// means everything get converted in string 
let namee =undefined;

console.log(typeof namee);

let newn = String(namee);

console.log(typeof newn);
console.log( newn);
console.log(newn.charAt(0));



//******************************* */

        //operation 

    //arithmatic +,-,*,/,%,** 
    // string concatnation str1+ str2 

    //eg ("1"+2+2)= it will be 122
    //eg (1+2+"2") it will be 32 means if string at start it will get convert to all string no add and if number 1st then add will happen then concatenate 

    //pre and post fix operator increment and dcrement 
    // pre means update then use 
    //post use then update 
// operator percendence 

/*


| **[Operator](ca://s?q=JavaScript_operator_examples)** | **Precedence Level** | **Associativity** | **Example** |
| --- | --- | --- | --- |
| **Parentheses **``()`` | Highest | N/A | ``(3 ``+ ``4) ``* ``5 ``= ``35`` |
| **Member Access **``.``**, **``[]`` | High | Left-to-right | ``obj.key``, ``arr[0]`` |
| **Function Call **``()`` | High | Left-to-right | ``myFunc()`` |
| **Postfix **``++``**, **``--`` | High | N/A | ``i++`` |
| **Prefix **``++``**, **``--``**, **``!``**, **``typeof`` | High | Right-to-left | ``++i``, ``!x`` |
| **Exponentiation **``**`` | Medium | Right-to-left | ``2 ``** ``3 ``** ``2 ``= ``512`` |
| **Multiplication, Division, Modulus **``* ``/ ``%`` | Medium | Left-to-right | ``10 ``/ ``2 ``* ``3 ``= ``15`` |
| **Addition, Subtraction **``+ ``-`` | Medium | Left-to-right | ``10 ``+ ``5 ``- ``2 ``= ``13`` |
| **Shift Operators **``<< ``>> ``>>>`` | Lower | Left-to-right | ``4 ``<< ``1 ``= ``8`` |
| **Relational **``< ``> ``<= ``>= ``in ``instanceof`` | Lower | Left-to-right | ``3 ``< ``5 ``= ``true`` |
| **Equality **``== ``!= ``=== ``!==`` | Lower | Left-to-right | ``5 ``=== ``'5' ``= ``false`` |
| **Bitwise `& ^ | `** | Lower | Left-to-right | ``5 ``& ``3 ``= ``1`` |
| **Logical `&& |  | ??`** | Lower | Left-to-right | ``true ``&& ``false ``= ``false`` |
| **Conditional **``?:`` | Very Low | Right-to-left | ``x ``> ``0 ``? ``'yes' ``: ``'no'`` |
| **Assignment **``=`` | Lowest | Right-to-left | ``a ``= ``b ``= ``5`` |

*/