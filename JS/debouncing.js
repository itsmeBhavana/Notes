let counter = 0;

const getData = () => {
  console.log("Fetching Data...", counter++);
};

//debounce function takes in a function as an argument and a delay.

const debounce = function (fn, d) {
  let timer;
  return function () {
    let context = this,
      args = arguments;
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(context, args);
    }, d);
  };
};

const betterFunction = debounce(getData, 300);
// Only debounce only when the difference of the time between 2 keypress events is greater tahn 300ms.
//And if keystrokes occur between that time, we need to clear the timer.

