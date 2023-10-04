const items = document.querySelector(".input-box");
document.querySelector(".btn").addEventListener("click", function () {
  if (!items.value) {
    alert("Add an item");
  } else {
    let li = document.createElement("li");
    li.innerHTML = items.value;
    document.querySelector(".list-container").appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }

  items.value = "";
  saveData();
});

document.querySelector(".list-container").addEventListener(
  "click",
  function (event) {
    if (event.target.tagName == "LI") {
      event.target.classList.toggle("checked");
      saveData();
    } else if (event.target.tagName == "SPAN") {
      event.target.parentElement.remove();
      saveData();
    }
  },
  false
);

function saveData() {
  localStorage.setItem(
    "data",
    document.querySelector(".list-container").innerHTML
  );
}

function showList() {
  document.querySelector(".list-container").innerHTML =
    localStorage.getItem("data");
}

showList();
