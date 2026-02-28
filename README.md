# Assignment-4-Job-Tracker
<!-- question no 1 -->
1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
   Answer:
   a.getElementById()?:getElementById() is a JavaScript method used to find and select an HTML element by its id within the document.
   Selects an element using a specific id

i.Always returns only one element
ii.Works very fast (high performance)
iii.Since an id is unique, it usually returns a single element only

b.getElementsByClassName?():
Answer:getElementsByClassName() is a JavaScript method used to select all elements from an HTML document that have a specific class name.

i.Selects elements using a specific class name
ii.Returns all elements if there are multiple matches
iii.Returns an HTMLCollection
iv.It is a live collection (automatically updates when the document changes)

c.querySelector()?:
Answer:querySelector() is a powerful JavaScript method used to select the first matching element from the DOM.
Here, we can use a class, id, or any CSS selector to find the element.

i.Selects an element using a CSS selector
ii.Returns the first matching element
iii.A modern and flexible method

d.querySelectorAll()?
Answer:querySelectorAll() is a JavaScript method used to select all matching elements from the DOM.
It works similarly to querySelector(), but instead of returning only the first match, it returns all matching elements.

i.Uses a CSS selector
ii.Returns all matching elements
iii.Returns a NodeList
iv.It is a static collection (does not automatically update when the DOM changes)

performance comparison:

(1.a).getElementById()

i.The fastest method, because it directly finds a specific ID in the DOM.
ii.Usually, there’s only one element, so the search is quick.

(1.b)getElementsByClassName()

i.Relatively fast. It creates a live collection of all matching elements in the DOM.
ii.However, if there are many elements, it can take some time, but it’s often faster than querySelectorAll.

(1.c) querySelector() / querySelectorAll()

i.Selects elements using a CSS selector.
ii.If the query is complex, it’s slower than getElementById or getElementsByClassName.
iii.querySelectorAll returns a static NodeList.querySelector returns only the first matching element.



<!-- question no 2 -->

2.How do you create and insert a new element into the DOM?
Answer:To create and insert a new element into the DOM, you typically follow a three-step process: create, configure, and append.

<!-- question no 3 . -->


3. What is Event Bubbling? And how does it work?
   Answer:Event Bubbling is a DOM event propagation mechanism where an event starts at the innermost target element and then "bubbles up" through its parent and ancestor elements in the DOM tree until it reaches the root.


<!-- question no 4 -->
4. What is Event Delegation in JavaScript? Why is it useful?
   Answer:Event Delegation is a technique where, instead of adding separate event listeners to each child element, a single event listener is added to their parent element.
   It works through event bubbling. When an event occurs on a child element, the event bubbles up to the parent, and the parent can handle that event.


<!-- question no 1 -->

5. What is the difference between preventDefault() and stopPropagation() methods?
   Answer:
   a.preventDefault():It prevents the default behavior of an element in the browser.
   In other words, whatever the browser would normally do by default, it will no longer do.

b.stopPropagation():It stops an event from bubbling up to the parent or ancestor elements.
In other words, it prevents event propagation.
