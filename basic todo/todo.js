let input = document.getElementById("input");
let add = document.getElementById("add");
let list = document.getElementById("list");

add.addEventListener("click", function (event) {
event.preventDefault();


let task = input.value;

let li = document.createElement("li");
li.textContent = task;

// Create Delete button
let delBtn = document.createElement("button");
delBtn.textContent = "Delete";

// Put button inside li
li.appendChild(delBtn);

// Add li into list
list.appendChild(li);

// Delete task when clicked
delBtn.addEventListener("click", function () {
    li.remove();
});

input.value = "";

});
