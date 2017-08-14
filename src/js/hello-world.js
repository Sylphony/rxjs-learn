import Rx from "rxjs";

Rx.Observable
  // of(): Convert to observables from one or more comma-separated values
  .of("Hello", "World")
  // subscribe(): Watch over the observables and get its results
  .subscribe(result => {
    console.log("of(...strings):", result);
  });


Rx.Observable
  // from(): Convert to observables from an array, array-like or iterables.
  .from(["Cat", "Dog"])
  .subscribe(result => {
    console.log("from(array):", result);
  });
