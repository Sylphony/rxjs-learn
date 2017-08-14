import Rx from "rxjs";

const btnClick = document.getElementById("btn-click");

console.log(btnClick);

Rx.Observable
  // fromEvent(): Create an observable from an event
  .fromEvent(btnClick, "click")
  .subscribe(() => {
    alert("Hello");
  });
