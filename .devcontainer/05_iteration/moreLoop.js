//these are more loop used for making thing easy 

//1st loop for of

let arr=[1,2,4,5,3];

// for(const val of arr){
//     console.log(val);
// }

//map  values are unique and it store in key value format and they maintain the order also 

//to .set 
const map = new Map();//create the map 


map.set('IN',"India");
map.set('USA',"United state of america");
map.set('IN',"India");//set the values 

// for (const [key,values] of map) {
//     console.log(`the key is ${key} and value ${values}`);
// }// to excess the values we need to destriucture the map

// object can't  iterate here means with these loop 

//++++++++to travrse the object we for in+++++++

// const myObject ={
//     name:"Pradeep"
// }

// for (const key in myObject) {
// console.log(myObject[key]);
// }
//by these we try to access ok but with key access more object

//but these loop not work for map 

//+++for each imp for the array mainly and object


// array.forEach(element => {
    
// });// means need to pass the funtion

// arr.forEach((item,index,arr)=>{
//     console.log(`iteam is ${item} value is ${index} stored are ${arr}`);
// })

// in these all type function declare 

//mainly these is used in 
//[{},{},{},{}];
//object get store in iteam and that we can excess these value by . oprator 
//means we get direct access of object 



//map with the for each

let myMap = new Map([
  ["name", "Pradeep"],
  ["age", 22],
  ["city", "Pune"]
]);

myMap.forEach((value, key) => {
  console.log(key + " → " + value);
});