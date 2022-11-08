
document.getElementById("addButton").addEventListener("click", getNewTask);

const item = document.querySelector(".item");
item.addEventListener("click", deleteItem);
item.addEventListener("click", completeItem);

const postBoard = document.getElementById("postBoard");
const toDoInput = document.getElementById("toDoInput");

function getNewTask() {
    
    const newItem = document.createElement('li');
    newItem.innerText = toDoInput.value;
    postBoard.appendChild(newItem);

    const completedButton = document.createElement("button");
    completedButton.setAttribute("id", "completedButton");
    completedButton.innerHTML = "Completed";
    completedButton.addEventListener("click", completeItem);
    
    const deleteButton = document.createElement("button");
    deleteButton.setAttribute("id", "deleteButton");
    deleteButton.innerHTML = "Delete";
    deleteButton.addEventListener("click", deleteItem);

    newItem.appendChild(completedButton);
    newItem.appendChild(deleteButton);

    toDoInput.value = "";
    event.preventDefault();
}

function completeItem() {
    const completedButton = document.getElementById("completedButton");
    const item = completedButton.parentElement;
    item.style.textDecoration = "line-through";
}

function deleteItem() {
    const deleteButton = document.getElementById("deleteButton");
    const item = deleteButton.parentElement;
    item.remove();
}


