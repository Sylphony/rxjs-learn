import Rx from "rxjs";

const container = document.getElementsByClassName("container")[0];

const addUser = (userData) => {
  const { avatar_url, login, html_url } = userData;

  const ava = document.createElement("img");
  ava.src = avatar_url;

  const name = document.createElement("span");
  name.innerText = login;

  const link = document.createElement("a");
  link.innerText = html_url;
  link.href = html_url;

  const wrap = document.createElement("div");
  wrap.appendChild(ava);
  wrap.appendChild(name);
  wrap.appendChild(link);

  container.appendChild(wrap);
};

const users$ = 
  Rx.Observable
    .ajax({
      url: "https://api.github.com/users",
      method: "GET"
    })
    .catch(error => {
      console.error("Something went wrong:\n", error);
    });

const usersData$ = 
  users$
    // map(): Convert a data set to another
    .map(data => data.response)
    // mergeMap(): Map to inner observable and flatten the users data
    .mergeMap(users => users) 
    // take(): Take the first N users
    .take(3);

usersData$.subscribe(data => {
  addUser(data);
});
