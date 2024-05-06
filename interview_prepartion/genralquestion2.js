var myObject = {
  foo: "bar",
  func: function () {
    var self = this;
    console.log("outer func: this.foo=" + this.foo);//=> bar 
    console.log("outer func: self.foo=" + self.foo); // => bar
    (function () {
      console.log("outer func: this.foo=" + this.foo); // in (this) no longer refers to myObject =>  undefined
      console.log("outer func: self.foo=" + self.foo); // it is (self) still accessiable referance to local variable
    }());
  },
};
myObject.func();