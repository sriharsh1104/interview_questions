(function() {
    var a = b = 3;
})();
// inshort b = 3  if not using strict mode 
console.log("a defined?" + (typeof a !== 'undefined '));
console.log("b defined?" + (typeof b !== 'undefined '));
 // if using strict mode than it will give error realted to Referance  b is not defined