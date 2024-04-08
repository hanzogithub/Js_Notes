var bucket = ["rice", "egg", "fish", "cofee", "oil", "vegetables", "salt"];
//how to make promise
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

//how to consume promise
//method 1
friedRicePromise.then(
  (myfriedRice) => {
    console.log("lets eat", myfriedRice);
  },
  (error) => {
    console.log(error);
  }
);

//method 2

friedRicePromise
  .then((myfriedRice) => {
    console.log("lets eat", myfriedRice);
  })
  .catch((error) => {
    console.log(error);
  });
