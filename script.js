document.getElementById("addBtn").addEventListener("click", function () {
  const input = document.getElementById("taskInput");
  const taskText = input.value.trim();

  if (taskText === "") return;

  const li = document.createElement("li");

  li.textContent = taskText;

  li.addEventListener("click", function () {
    li.classList.toggle("completed");
  });

  const removeBtn = document.createElement("button");
  removeBtn.textContent = "X";
  removeBtn.className = "remove-btn";
  removeBtn.addEventListener("click", function (e) {
    e.stopPropagation(); // prevent toggling completion
    li.remove();
  });

  li.appendChild(removeBtn);
  document.getElementById("taskList").appendChild(li);
  input.value = "";
});
