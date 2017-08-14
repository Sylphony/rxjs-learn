import Rx from "rxjs";

const btnClick = document.getElementById("btn-click");
const input = document.getElementById("input");

Rx.Observable
  // fromEvent(): Create an observable from an event
  .fromEvent(btnClick, "click")
  .subscribe(event => {
    alert("Hello");
  });

Rx.Observable
  // Like event listeners, it is possible to attach multiple events to an element
  .fromEvent(btnClick, "click")
  .subscribe(event => {
    alert("Why");
  });

Rx.Observable
  .fromEvent(input, "keyup")
  .subscribe(event => {
    console.log(event.target.value);
  });
