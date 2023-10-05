const taskInput = document.getElementById("task");
const pendingList = document.getElementById("pending-list");
const completedList = document.getElementById("completed-list");

// Function to add a new task
function addTask() {
  // while Taking the input, removing the whitespaces. If empty task then simply return.
  const taskTextInput = taskInput.value.trim();
  if (taskTextInput === "") return;

  // We are storing the input to edit it further.
  const storeInput = taskTextInput;

  // Creating new "li" elements using createElement method
  const newTask = document.createElement("li");
  newTask.textContent = taskTextInput;

  // Creating complete Button, adding it to the newTask.
  const completeButton = document.createElement("button");
  completeButton.textContent = "Complete";
  completeButton.style.backgroundColor = "yellowGreen";
  newTask.appendChild(completeButton);

  // Creating edit button
  const editButton = document.createElement("button");
  editButton.textContent = "Edit";
  editButton.style.backgroundColor = "chocolate";
  newTask.appendChild(editButton);

  // Creating delete Button
  const deleteButton = document.createElement("button");
  deleteButton.textContent = "Delete";
  newTask.appendChild(deleteButton);

  // Adding EventListeners to perform specific action on click
  completeButton.addEventListener("click", () => {
    markAsCompleted(newTask, completeButton, editButton);
  });
  deleteButton.addEventListener("click", () => {
    markToDeleteTask(newTask);
  });
  editButton.addEventListener("click", () => {
    newTask.parentNode.removeChild(newTask);
    taskInput.value = storeInput;
  });

  // adding the new "li" elements to the pending list.
  pendingList.appendChild(newTask);

  taskInput.value = "";
}

// Function to add the tasks into the completed List
const markAsCompleted = (newTask, completeButton, editButton) => {
  pendingList.removeChild(newTask);
  newTask.removeChild(completeButton);
  newTask.removeChild(editButton);
  completedList.appendChild(newTask);
};

// Function to delete the task from the DOM itself
const markToDeleteTask = (newTask) => {
  newTask.parentNode.removeChild(newTask);
};
