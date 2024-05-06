function foo1(){
    return{
        bar:"hello"  // as thier is return statment for this case we will get outpout
    };
}


console.log("foo1 returns:");
console.log(foo1());

function foo2(){
    {
        return
        {
            bar: "hello" // in this case bar is defined inside object in another object . as thier is no return statement
        }
    }
}
console.log("foo2 returns:");
console.log(foo2());