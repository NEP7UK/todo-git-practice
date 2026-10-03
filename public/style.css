const list = document.getElementById("list");
const input = document.getElementById("taskInput");
const form = document.getElementById("taskForm");

async function loadTasks() {
  const res = await fetch("/api/tasks");
  const tasks = await res.json();
  list.innerHTML = "";
  tasks.forEach((t) => {
    const li = document.createElement("li");
    li.textContent = t.text;
    const btn = document.createElement("button");
    btn.textContent = "Delete";
    btn.onclick = async () => {
      await fetch(`/api/tasks/${t.id}`, { method: "DELETE" });
      loadTasks();
    };
    li.appendChild(btn);
    list.appendChild(li);
  });
}

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  await fetch("/api/tasks", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ text: input.value }),
  });
  input.value = "";
  loadTasks();
});

loadTasks();