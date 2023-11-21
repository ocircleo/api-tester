let submit = document.getElementById("submit");
let display = document.getElementById("display");
let addField = document.getElementById("addField");
const showInUi = (data) => {
  display.innerText = data;
};
const deleteField = (e) => {
  e.target.parentElement.parentElement.removeChild(e.target.parentElement);
};
addField.addEventListener("change", (e) => {
  if (e.target.value == "Add") return;
  let fieldset = document.createElement("fieldset");
  fieldset.classList.add("inputs");
  let key = document.createElement("input");
  key.name = "key";
  key.type = "text";
  key.placeholder = "key";
  key.required = true;
  let value = document.createElement("input");
  value.name = "value";
  value.required = true;
  if (e.target.value == "file") {
    value.type = "file";
    value.accept = "image/*";
  } else {
    value.type = e.target.value;
  }

  value.placeholder = "value";
  fieldset.appendChild(key);
  fieldset.appendChild(value);
  let btn = document.createElement("button");
  btn.classList.add("btn");
  btn.innerText = "Delete";
  btn.addEventListener("click", deleteField);
  fieldset.appendChild(btn);
  e.target.parentElement.parentElement.appendChild(fieldset);
});

submit.addEventListener("submit", (e) => {
  e.preventDefault();
  let method, api;
  let form = e.target;
  // method = form.method.value;
  // api = form.api.value;
  // let datas = {};
  // if (method == "GET") {
  //   fetch(api)
  //     .then((res) => res.json())
  //     .then((data) => showInUi(data));
  // } else if (method == "DELETE") {
  // } else {
  // }
});

function showTab(data, btn) {
  let allTabs = document.getElementsByClassName("tab-content");
  let allTabBtns = document.getElementsByClassName("tabs-button");
  for (let i = 0; i < allTabs.length; i++) {
    allTabs[i].classList.remove("block");
    allTabs[i].classList.add("hidden");
  }
  for (let i = 0; i < allTabBtns.length; i++) {
    allTabBtns[i].classList.remove("btn-active");
  }
  document.getElementById(data).classList.add("block");
  document.getElementById(data).classList.remove("hidden");
  document.getElementById(btn).classList.add("btn-active");
}
