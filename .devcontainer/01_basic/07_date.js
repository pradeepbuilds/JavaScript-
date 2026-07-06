//date are very imp in real world project 
// let mydate= new Date();
// //it is can object 
// console.log(mydate);//have particular format

// console.log(mydate.toString());
// console.log(mydate.toDateString());
// console.log(mydate.toLocaleString());

// let mycreatedate=new Date(2023,0,23);
// console.log(mycreatedate);
// //in these declaration month start with 0;
// let newdate = new Date("2005-5-18");
// console.log(newdate)


let timestamp=Math.floor((Date.now()/1000))
//yyy

console.log(new Date(timestamp * 1000));

