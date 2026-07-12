
//document.getElementById("demo") 
// document.getElementById('content');
// <div id=​"content" class=​"test container">​…​</div>​
// const name =document.getElementById('content');

// name.style.backgroundColor='green';
// 'green'

// undefined
// name.id
// 'content'
// name.class
// undefined
// name.className
// 'container'
// name.getAttribute('id');
// 'content'
// name.setAttribute('class','test container')
// undefined
// name.id
// 'content'
// name.class
// undefined
// name.className
// 'test container'


//innerHtml gives the content of the element which only visible on the screen and the tag which include inside that element

//innercontent gives the content of the element which is not visible on the screen and also the content of the element which is visible on the screen
//innerText gives element whic are visible on the screen  



//document.getElementByclassName("");


//imp it return the html collection of the element which is present in the document and it is not a array so we can not use the array method on it but we can convert to array  the for loop to iterate over it and also we can use the index to access the element of that html collection

//store in the varaible and use that for manipulation 
//it return html collection of the element which is present in the document and it is not a array so we can not use the array method on it but we can convert to array  the for loop to iterate over it and also we can use the index to access the element of that html collection

//document.querySelectorAll("");//


//document.quesrySelector("");
// //retrun the 1st 
//we can write the css selector in the querySelector and querySelectorAll to get the element of the document 
// as # . are allowed in the querySelector and querySelectorAll to get the element of the document








// Browser: has window, document, and DOM nodes.

// Node.js: has global, no DOM by default.

// To use DOM in Node → you need libraries like jsdom or cheerio.


// document.querySelector()
// Returns: The first matching element (only one).

// Type: A single Element object (or null if nothing found).

// Analogy: Like asking, “Give me the first book on the shelf that matches this title.”


// 📚 document.querySelectorAll()
// Returns: All matching elements.

// Type: A NodeList (looks like an array, but not exactly).

// You can loop through it to access each element.

// Analogy: Like asking, “Give me all the books on the shelf that match this title.”


// Method	Returns	Type
// querySelector	First matching element	Element
// querySelectorAll	All matching elements	NodeList


// 🖊️ getElementById()
// Returns: The single element with that ID.

// Type: An Element object (not a collection).

// Because IDs are unique in HTML, you only get one element.


// 📚 getElementsByClassName()
// Returns: All elements with that class name.

// Type: An HTMLCollection (looks like an array, but not exactly).

// You can loop through it to access each element.but you cannot use array methods directly on it. need to conert by Array.from(name of varaible store the html collection) or use for loop to iterate over it.



// HTMLCollection → returned by methods like getElementsByClassName, getElementsByTagName.

// NodeList → returned by querySelectorAll.

// Both look like arrays, but:

// HTMLCollection is live → updates automatically if DOM changes.

// NodeList is static → does not update unless you call again.