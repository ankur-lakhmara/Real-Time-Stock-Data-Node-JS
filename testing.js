// myFun();

// var myFun = function () {
//   console.log("first");
// };
// myFun();
// function myFun() {
//   console.log("second");
// }
// myFun();

//2nd problem

// var variable = 10;
// (() => {
//   console.log(variable);
//   variable = 20;
//   console.log(variable);
// })();
// console.log(variable);
// variable = 30;

//3rd problem
// foo = 30;
// console.log("my foo is ", foo);

// var foo = 45;
// console.log("my foo is+ ", foo);

//4tg problem

// variable = 10;
// (() => {
//   foo = 100;
//   console.log("my 1st foo", foo);
//   var foo = 20;
//   variable = 50;
//   console.log("my 1st var is ", variable);
// })();

// console.log("2nd foo is ", foo);
// console.log("2nd variable is ", variable);

// var variable = 60;

//5th problem

// for (let i = 0; i < 10; i++) {
//   setTimeout(() => console.log(i), 0);
// }
//||||||||||||||||||||||
/* key point is when we use var its has global scope then it will print the last value 
that got assigned to the var and in case if we use let then it will print 0-9 because let has
local scope and it will create an new variable locally for every itertaion */

//6th problem
var fullname = "ANkur Verma";

var obj = {
  fullname: "Hacked nasa",
  prop: {
    fullname: "Inside prop",
    getFullname: function () {
      return this.fullname;
    },
  },
  getFullname: function () {
    return this.fullname;
  },
  getFullnameV2: () => this.fullname,

  getFullnameV3: (function () {
    return this.fullname;
  })(),
};

console.log(obj.prop.getFullname());
console.log(obj.getFullname());
console.log(obj.getFullnameV2());
console.log(obj.getFullnameV3());
