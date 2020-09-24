"use strict";

const promise = new Promise((resolve, reject) => {
  delay(1000)
    .then(() => {
      console.log("Something...");
    })
    .catch(console.error);
});

function delay(ms) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, ms);
  });
}

function printNumbers(from, to) {
  setTimeout(function print() {
    if (from > to) {
      console.error("your from is bigger than to");
    }
    console.log(from);
    if (from < to) {
      setTimeout(print, 100);
    }
    from++;
  }, 100);
}
