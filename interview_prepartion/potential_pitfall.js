// What is a potential pitfall with using typeof bar === "object" to determine if bar is an object? How can this pitfall be avoided?


var bar = null ;

// true null is considered as object in javascript
console.log(typeof bar === "object");
//To avoid error (checking bar === null) if it is function =>
console.log((bar!==null) && (typeof bar === "object")); //false after avoiding error
// if you we want to return true for function => 
console.log((bar !== null) && ((typeof bar === "object") || (typeof bar === "function"))); //false after avoiding
// array are object so  result will come true (for sitution where we want false)
console.log((bar !== null) && (typeof bar == "object") && (toString.call(bar) !== "[object Array]"))
// false for null and array but true for object
console.log((bar !== null) && (bar.constructor === Object));
// Es5 own null check
console.log(Array.isArray(bar));