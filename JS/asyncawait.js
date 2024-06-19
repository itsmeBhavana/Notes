const p = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise Resolved value");
  }, 5000);
});

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise Resolved value 2");
  }, 10000);
});

// function getData() {
//     p.then(res=>console.log(res));
//     console.log("Namaste JS");
// }
// getData();

async function getData() {
  console.log("Hello World");
  const val = await p;
  console.log("Namaste Javascript");
  console.log(val);

  const val2 = await p2;
  console.log("Namaste Javascript 2");
  console.log(val2);
}
getData();

const APIURL = "https://api.github.com/users/itsmebhavana";
async function handlePromise() {
  const res = await fetch(APIURL);
  console.log(await res.json());
}
handlePromise();
/* 
    handlePromise() started executing and saw await near fetch().
    The function was suspended as soon as it got to await at fetch() statement for 40ms.
    The function resumed(again got into the call stack after 40ms.)
*/

// Try-catch to handle errors.
async function handlePromise1() {
  try {
    const data = await fetch(APIURL);
    const jsonValue = await data.json();
  } catch (err) {
    console.log(err);
  }
}

handlePromise1();

/* Whenever an incorrect URL is used in the fetch and fetch is enclosed in the try block, then,
control goes to catch statement. */
