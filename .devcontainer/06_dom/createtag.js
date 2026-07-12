document.createElement('h1');//inside thst bracket that are the single quotes you can put any tag name you want to create. For example, if you want to create a paragraph tag, you would write document.createElement('p').

// we can make attributes for the tag we created using the setAttribute method. For example, if we want to give our h1 tag an id of "title", we would write:

div.className=""
div.id="";
div.style.color="";
div.style.fontSize="";
//add the text 

div.innerText="Hello World";//but it takes 2 turn another approach

const textNode=document.createTextNode("Hello World");//this will create a text node with the text "Hello World" and we can append it to the h1 tag using the appendChild method. For example, if we want to append the text node to the h1 tag, we would write:
// div.appendChild(textNode)


//these is all in memory , we need to append it to the body of the document using the appendChild method. For example, if we want to append the h1 tag to the body of the document, we would write:     
     document.body.appendChild(div);
     //these will append the h1 tag to the body of the document and we will see the text "Hello World" on the page.