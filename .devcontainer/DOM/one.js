// How the Browser Stores Things
// Window object

// The browser creates a window object for every webpage.

// It’s like the big container that holds everything related to that page (location, history, alert boxes, timers, etc.).

// Document object inside window

// Inside the window, there’s a document object.

// This represents the actual webpage (HTML).

// So when you write document.getElementById(...), you’re telling JavaScript: “Go inside the document and find this element.”

// Tree-like structure (DOM)

// The document is stored as a tree of nodes (DOM).

// Root = <html>

// Branches = <head> and <body>

// Leaves = elements like <h1>, <p>, <button>

// JavaScript can walk through this tree and manipulate (add, remove, change) any part.

// //DOM (Document Object Model) is a way for JavaScript to see and control a webpage.
// It turns the HTML of a page into a tree-like structure where every element (like <p>, <div>, <img>) becomes a node that JavaScript can access, change, or remove.

//manipulating the DOM 
//document.getElementById('title')