// //array is the data structure which allow us to store multiple values/collection of value  in single varible .
// // let the values be any data type , it has not fixed size we can store multiple values 

// // let myArr=[1,3,4,"Pradeep","Sanap"];

// // const myHeros= new Array(1,2,3,4);



// // //access by index which is 0 based 
// // console.log(myArr[0]);

// //array store the length property and protype also 

// //shallow copy -> means the array copy operation makes just point to the value with new refernce not new values ok 
// // deep copy not just point value they make new values and then refernce point to old 

// // let i=0;
// // while(i<10){
// //     myArr.push(i*10);
// //     i++;
// // }



// // let j=0;;
// // while(j<10){
// //  console.log(myArr[j]);
// //     j++;
// // }

// //push
// //push adds the elemet to last of array


// //pop
// //myArr.pop() remove the last emelement from array;

// // console.log(myArr.pop());

 let myArr=[10,9,8,7,6];


// //unshift
// // myArr.unshift(0 or any element ) add element in start of array
// console.log( myArr.unshift(12));
// console.log(myArr);


// //shift
// // myArr.shift() reemove the element  from start
// console.log( myArr.shift());
// console.log(myArr);


// //include
// // myArr.include(9) //check wheather the element the is persent in arrat return true or false and 


// //indexOf
// // myArr.indexOf(3);//retrun the index of element if persent 



// //slice 
// console.log(myArr.slice(0,4));
// //slice take number return subarray and it caan also take negative value not manipulate orginal array last range is not include 

// //splice 
// console.log(myArr.splice(0,4));
//last range is included  and it manipulate the orignal array 

//join 
//array.join(separator) it joiin the array 
 let name=["hi ","hello"];//join return string and need separteor by which it will make stiring that string need to store 
// let result=myArr.join(name);

// console.log( result);

//if we push array in differnt array we think one one element will index and they be store but not it directly store the exact array 

//concat
//store single single element at one one index and return the new array not old  

// console.log(myArr.concat(name));



//spread 
//it spread the array means make each each element spreate 

// let newArr=[...myArr,...name];
// console.log(newArr);

//flat 
//array ke andhar array ko single element 
//anotherarray.flat(infinntity);

//Array.from("") string to array

//object to string need to give on what basics key or value 


//array.of(1,2,3,4)-> make the value to array 