
function addLanguage(lang){

    //created the tag and which is empty and in memory
const add=document.create('li');

//add to text

// add.innerHTML=`${lang}`;


//but with these value putting it need ro travel full dom tree which is complex so little optimization 

add.appendChild(document.createTextNode(lang));//text added means append directy

document.querySelector('.lamguage').appendChild(add);



//then append that new element in exact element

// let elementAdd=document.querySelector('.language').appendChild(add);


}

//then call the that function addLanguage('hindi);

//then how we can edit 

function edit(){
    const secondLanguage = document.querySelector('li:nth-child(2)');
    secondLanguage.textContent="Mojo";

    //another function replacewith ();
    //outerHTML='<li> </ii>' in these we need to type the direct html tag

}


//remove 


//select that element and remove that with direct .remove 
const lastLanguage =document.querySelector('li:lastChild');

lastLanguage.remove;