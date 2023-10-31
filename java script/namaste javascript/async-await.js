const p = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("promise resolved");
  }, 10000);
});

// conventional way using promises

function getData() {
  // js engine will not wait for the promise to resolve
  p.then((res) => console.log(res));
  console.log("Namaste javascript");
}
getData();
// output -->
// namaste javascript (immediately)
// promise resolved (after 10 secs)


// using async-await 
async function handlePromise() {
  // js engine waits for the promise to resolve
  const val = await p;
  console.log("namaste javascript");
  console.log(val);
}

handlePromise();
// output -->
// namaste javascript (after 10 secs)
// promise resolved (after 10 secs)

const API_URL = "https://api.github.com/users";

async function fetchData() {
  const data = await fetch(API_URL);
  const jsonValue = await data.json();
  console.log(jsonValue);
}

fetchData().catch((err) => console.log(err))
