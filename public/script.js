let display = document.getElementById("display");
const showInUi = (data) => {
  display.innerText = data;
};
let submit = document.getElementById("submit");
submit.addEventListener("submit", (e) => {
  e.preventDefault();
  let method, api;
  let form = e.target;
  method = form.method.value;
  api = form.api.value;
  let datas = {};
  if (method == "GET") {
    fetch(api)
      .then((res) => res.json())
      .then((data) => showInUi(data));
  } else if (method == "DELETE") {
  } else {
    
  }
});
