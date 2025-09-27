function addTask() {
  let input = document.getElementById("taskInput");
  let taskText = input.value.trim();

  if (taskText) {
    let li = document.createElement("li");
    li.classList.add("pending"); // default status

    // Task text
    let span = document.createElement("span");
    span.textContent = taskText;

    // Button container
    let btnContainer = document.createElement("div");
    btnContainer.className = "task-buttons";

    // Toggle button
    let toggleBtn = document.createElement("button");
    toggleBtn.textContent = "Mark Done";
    toggleBtn.onclick = function () {
      if (li.classList.contains("done")) {
        li.classList.remove("done");
        li.classList.add("pending");
        toggleBtn.textContent = "Mark Done";
      } else {
        li.classList.remove("pending");
        li.classList.add("done");
        toggleBtn.textContent = "Mark Pending";
      }
    };

    // Delete button
    let deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.onclick = function () {
      li.remove();
    };

    btnContainer.appendChild(toggleBtn);
    btnContainer.appendChild(deleteBtn);
    li.appendChild(span);
    li.appendChild(btnContainer);

    document.getElementById("taskList").appendChild(li);
    input.value = "";
  }
}

// 🔹 Filter tasks
function filterTasks(status) {
  let tasks = document.querySelectorAll("#taskList li");

  tasks.forEach(task => {
    if (status === "all") {
      task.style.display = "flex";
    } else if (status === "pending") {
      task.style.display = task.classList.contains("pending") ? "flex" : "none";
    } else if (status === "done") {
      task.style.display = task.classList.contains("done") ? "flex" : "none";
    }
  });
}
