let multiply = function (x, y) {
  console.log(x * y);
};

// using bind
let multiplyByTwo = multiply.bind(this, 2);
multiplyByTwo(3.5);

let multiplyByThree = multiply.bind(this, 3);
multiplyByThree(3);

// using closures

let multiplyByClosures = function (x) {
  return function (y) {
    console.log(x * y);
  };
};

multiplyByTwo = multiplyByClosures(2);
multiplyByTwo(3);

multiplyByThree = multiplyByClosures(3);
multiplyByThree(3);
