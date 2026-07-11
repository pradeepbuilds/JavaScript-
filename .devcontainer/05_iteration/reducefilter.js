// A callback function in JavaScript is a function that is passed as an argument to another function and is executed later, usually after some task is completed.


//chaining of map, filter and reduce mean s we use multiple method together and 1st methid send the value to the next method and so on and at the end we get the final value.

// map()
// Meaning: Transform each item in an array into something new.

// Output: A new array with the same length.

const age=[22,34,11,45,67,89];
const newAge=age.map( (age)=>{
    return age*2;
});
console.log(newAge);//[ 44, 68, 22, 90, 134, 178 ]






// ➕ reduce()
// Meaning: Combine all items into a single value (sum, product, object, etc.).

// Output: One value (not an array).

// Analogy: Like squeezing all oranges to get one glass of juice.

// const myNumbers=[1,2,3,4,5,6];
// const sum= myNumbers.reduce((acc,curr)=>{
//     return acc+curr;
// },0);
// console.log(sum);//21
// acc at start it takes the intial values at start that we gave then it get total value it store in acc and curr is the value of arr in the array and it will keep on adding the value of curr to acc and return the total value at the end.






//filter
// Meaning: Pick only the items that match a condition.

// Output: A new array with fewer items (or same if all match).

//for example, if you have an array of numbers and you want to filter out only the even numbers, you can use the filter() method. It will return a new array containing only the even numbers from the original array.
//[{},{}]
// const UserName=age.filter((bk)=>{
//     return bk.genre=="male";

// })

const numbers = [1, 2, 3, 4, 5, 6];
const evenNumber=numbers.filter((num)=>{
    return num%2==0;//
})
console.log(evenNumber);//in these when we use the arrow function with curely barcket we need to write the return keyword always and without curely no need.

















//for each


// foreach have problem it not return a new array element so if we want to apply the conditonal checking so it became difficult  , it just executes a provided function once for each array element. It is mainly used for side effects, like logging or updating external variables, rather than transforming data.





//coding.foreach((item)=>{
    // console.log(item);
//it will print each item in the coding array to the console, but it won't return a new array or modify the original array.})

//filter is used these can be done with foreach

numbers.forEach((num)=>{
    if(num%2==0){
        console.log(num);//it will print only even number in the console.
    }
})// create array and store these you need to do ok 