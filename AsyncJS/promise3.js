//Function returning a promise

const bucket = ["coffee", "chips", "vegetables", "salt", "rice"];

function friedRicePromise() {
  return new Promise((resolve, reject) => {
    if (
      bucket.includes("vegetables") &&
      bucket.includes("salt") &&
      bucket.includes("rice")
    ) {
      resolve({ value: "friedRice" });
    } else {
      reject(new Error("not enough ingredients"));
    }
  });
}

friedRicePromise()
  .then((myfriedRice) => {
    console.log("lets make", myfriedRice);
  })
  .catch((error) => {
    console.log(error);
  });
