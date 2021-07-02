class test {
    constructor() {
        this.name = "ahmed";
        this.age = "25";
        this.color = "red";
    }
sayhellow () {
  return this.name
}
}
var myobj = {
    names : "ahmed",
    color : "reda",
    agessss : "545"
}

Object.defineProperty(myobj,"position" , {
    value : "center"
})
console.log(Object.getOwnPropertyDescriptor(myobj,"position"))
console.log(Object.keys(myobj))
console.log();
Object.defineProperties(myobj,{
    a: {
        writable: true,
        configurable:true,
        enumerable : true,
        value : 2
    },
    b : {
        writable: true,
        configurable:true,
        enumerable : true,
        value : 88
    }
})