import Rx from "rxjs";

Rx.Observable
  // interval(): Create an observerable which execute the stream in an interval.
  .interval(1000)
  .subscribe(val => {
    console.log("First interval:", val);
  });

Rx.Observable
  .interval(1000)
  // skip(): Skip the first set of numbers.
  .skip(5)
  .subscribe(val => {
    console.log("Skip interval", val);
  });
