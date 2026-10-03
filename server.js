const express = require("express");
const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.static("public")); // serves the front end

let tasks = [];
let nextId = 1;

app.get("/api/tasks", (req, res) => res.json(tasks));

app.post("/api/tasks", (req, res) => {
  const task = { id: nextId++, text: req.body.text };
  tasks.push(task);
  res.status(201).json(task);
});

app.delete("/api/tasks/:id", (req, res) => {
  tasks = tasks.filter((t) => t.id !== Number(req.params.id));
  res.status(204).end();
});

app.listen(PORT, () => console.log(`Running at http://localhost:${PORT}`));