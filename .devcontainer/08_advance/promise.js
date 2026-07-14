/* 

What is a Promise in JavaScript?
A Promise is like a guarantee of a future result.
It’s used when something takes time (like fetching data from a server). Instead of stopping everything, JavaScript says:

👉 “I promise I’ll give you the result later. For now, keep doing other work.”

✅ Creating a Promise
When you have a task that takes time (like reading data from a database, fetching from an API, or writing to a file), you can wrap that task inside a Promise.
This Promise will represent the future result of that task.

✅ Using .then, .catch, .finally
.then() → Runs when the Promise is resolved (success).

.catch() → Runs when the Promise is rejected (error).

.finally() → Runs always, whether success or error (like cleaning up).


Because some tasks take time (like downloading data, reading files, or talking to a server).
If JavaScript waited for these tasks, the whole program would freeze. That’s bad.

So instead, JavaScript says:
👉 “I’ll keep working. When the slow task finishes, I’ll give you the result through a Promise.”


📦 Real-life Analogy
Imagine you order food online:

You place the order → This is like creating a Promise.

The restaurant says: “We’ll deliver soon” → The Promise is pending.

If food arrives → Promise is fulfilled (resolved).

If delivery fails → Promise is rejected.



*/


//create the promise 
const promise1 =new Promise((reslove,reject)=>{
//in these async task db calls ,cryptograpy,network
setTimeout(function(){
    console.log("Doing the promise ")
    reslove();
},1000)

//then and reslove are diretly link so we need to call the  reslove 


//the way give the parameter 


})
//these the way to create the promise and it take the callback function and have parameter reslove and reject  and inside that function we write the task 

promise1.then(()=>{
    console.log("done")
})
.catch(()=>{console.log("done")})



//another syntacx

const promise2= new Promise((reslove,reject)=>{
setTimeout(function(){
    console.log("done with async");
    reslove();
})
}).then(()=>{}).catch(()=>{})


//.then madhe chaining  means these used to passed vlaue by relsove



const promise3= new Promise((reslove,reject)=>{
setTimeout(function(){
    let error=false;
    if(!error){
  reslove({username: "hitesh", password: "123"});//in reslove mainly object is passed 
    }
    else{
        reject("Error : something went wrong ")
    }
  
},1000)
}).then((userdetails)=>{
    return userdetails
}).then((userdetails)=>{console.log(userdetails)}).catch((error)=>{console.log(error)})
//these userdetails I can't store in vaiable it will be undefined .
//chaininng return will send value ti next then 



//as we can handle the promise with async and await keyword  but with these we need to use try and catch blok also ok 
async function consumePromiseFive(){
    try {
        const response = await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}


//understand .fetch return the promise and response also we need to handle these with either aync and await and .then .catch 

fetch('https://api.github.com/users/hiteshchoudhary')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error))

// promise.all
// yes this is also available, kuch reading aap b kro.










//fetch 
// fetch is a built-in function in JavaScript used to get data from a server (API) or send data to it.
// Think of it like a delivery boy who goes to the server, brings back the information, and gives it to you.
// fetch() always returns a Promise.

// You use .then() to handle success, .catch() for errors.

// Commonly used to call APIs (get data like users, posts, weather, etc.).

// Works asynchronously → JavaScript doesn’t freeze while waiting.


//it has special prioity queue like 


//how fetch works 
// //fetch works 
// one data reverse the meomory snd have 2 array onfullfiled and rejectfullfild and they function which return the data to data which have responsiblity to send the response
//  and then webbroswer/ node run on network request which send data to array then array to data then ressponse 

//  //micro task queue 


//with fectch we can the send also ok 