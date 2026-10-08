const addBtn = document.querySelector(".taskmaker");
const todoNewElem = document.querySelector(".todo__input");
const todoBodyElem = document.querySelector(".todo__body");
const todoMainElem = document.createElement("div");
todoMainElem.className = "todo__main";

const popup = document.querySelector(".popup");
const cover = document.querySelector(".cover");
const createBtn = document.querySelector(".create");
const closeBtn = document.querySelector(".close-icon");
const cancelBtn = document.querySelector(".cancel");

//  Show/Hide popup
function showPopup() {
  popup.classList.add("show--element");
  cover.classList.add("show--element");
}
addBtn.addEventListener("click", showPopup);

function hidePopup() {
  popup.classList.remove("show--element");
  cover.classList.remove("show--element");
  todoNewElem.value = "";
}
closeBtn.addEventListener("click", hidePopup);
cancelBtn.addEventListener("click", hidePopup);

document.body.addEventListener("keydown", function (e) {
  if (e.which === 27) {
    popup.classList.remove("show--element");
    cover.classList.remove("show--element");
    todoNewElem.value = "";
  }
});

// Create and Delete element
function addToDo() {
  const todoText = todoNewElem.value;

  const newArticle = document.createElement("article");
  newArticle.className = "article";
  const newText = document.createElement("p");
  newText.className = "todo__text";
  newText.innerHTML = todoText;
  const newBtn = document.createElement("button");
  newBtn.className = "delete";
  newBtn.innerHTML = "حذف";

  newArticle.append(newText, newBtn);
  todoMainElem.append(newArticle);
  todoBodyElem.append(todoMainElem);

  newBtn.addEventListener("click", function (event) {
    event.target.parentElement.remove();
    if (todoMainElem.childElementCount === 0) {
      todoMainElem.remove();
    }
  });

  hidePopup();
}
createBtn.addEventListener("click", addToDo);