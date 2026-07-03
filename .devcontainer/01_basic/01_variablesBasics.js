//variable are the name given to memory location which can change or can be  constant ;
//keyword are reversed word which are known to compiler by which it get what to do the task and with extension also it get to know ;

// synatx type of varibale means const or variable then name of vaiable and then assignment operator then value ;

const accountId=33144899;
let accountName="Pradeep Sanap";
var accountCity ="Pune";
accountNumber=545464; // we can declare varible without keyword
// not good 

let accountState;//varaible without value assign get undefine by default 

console.log([accountId,accountCity,accountName,accountNumber,accountState]);

// //the variable declare with const keyword can't be change ;
// accountId=12323;

// console.log(accountId);

accountName="Sanap";
accountCity="Delhi";
accountNumber=88;

// to print all at once we can use console.table([])

console.log([accountId,accountCity,accountName,accountNumber,accountState]);

/*
in old javasript there was scope problem with var means  if varaible names get same by mistake then then values changes of old varaible ok . to slove these let is used for funtional and block scope  
 
therefore we should use let always

*/



