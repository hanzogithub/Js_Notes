//promise is a asynchronous task
console.log("script start");

var bucket = ["rice", "egg", "fish", "cofee", "oil", "vegetables", "salt"];

var friedRicePromise = new Promise((resolve, reject) => {
  if (
    bucket.includes("vegetables") &&
    bucket.includes("rice") &&
    bucket.includes("salt")
  ) {
    resolve("fried rice");
  } else {
    reject("couldn't do it");
  }
});

friedRicePromise
  .then((myfriedRice) => {
    console.log("lets eat", myfriedRice);
  })
  .catch((error) => {
    console.log(error);
  });

setTimeout(() => {
  console.log("hello from settime out")
},0);
for (i = 0; i < 100; i++) {
  console.log(Math.random(), i);
}

console.log("script end");
