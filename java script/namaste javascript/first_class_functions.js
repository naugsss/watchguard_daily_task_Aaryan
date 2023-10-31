// function statement OR function declaration
function a() {
  console.log("a called");
}

// function expression
var b = function () {
  console.log("b called");
};

// anonymous function
// function (){
//     console.log("anonymous function called");
// }

// named function expression
var c = function xyz() {
  console.log("c called");
};

// first class function
var d = function () {
  return function xyz() {
    console.log("d called");
  };
};

// passing function as an argument
var e = function (param1) {
  console.log("e called");
  return param1();
};

e(function () {
  console.log("e passed");
});
