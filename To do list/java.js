let addtask = document.querySelector("#addTask"); //button
let tasklist = document.querySelector("#taskList"); //task

addtask.onclick = function () {
  let taskinput = document.querySelector("#taskInput").value.trim();
  if (taskinput) {
    let li = document.createElement("li");
    li.textContent = taskinput;
    let deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.onclick = function () {
      li.remove();
    };
    li.appendChild(deleteBtn);
    tasklist.appendChild(li);
    document.querySelector("#taskInput").value = "";
  }
};
