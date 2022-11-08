
document.getElementById("addButton").addEventListener("click", getNewTask);

const item = document.querySelector(".item");
item.addEventListener("click", deleteItem);
item.addEventListener("click", completeItem);

const completedButton = document.createElement("button");
completedButton.innerHTML = "Completed";
completedButton.addEventListener("click", completeItem);

const deleteButton = document.createElement("button");
deleteButton.innerHTML = "Delete";
deleteButton.addEventListener("click", deleteItem);

const postBoard = document.getElementById("postBoard");
const toDoInput = document.getElementById("toDoInput");

function getNewTask() {
    event.preventDefault();
    const newItem = document.createElement('li');
    newItem.innerText = toDoInput.value;
    postBoard.appendChild(newItem);
    newItem.appendChild(completedButton);
    newItem.appendChild(deleteButton);
    toDoInput.value = "";
}

function completeItem() {
    const item = completedButton.parentElement;
    item.style.textDecoration = "line-through";
}

function deleteItem() {
    const item = deleteButton.parentElement;
    item.remove();
}


