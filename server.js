const express = require("express");
const app = express();
const port = 5000;

// Data Source, could be replaced with a real database
const todos = [
  {
    title: "Todo 1",
    desc: "This is my first Todo",
    completed: true,
  },

  {
    title: "Todo 2",
    desc: "This is my second Todo",
    completed: true,
  },

  {
    title: "Todo 3",
    desc: "This is my third Todo",
    completed: true,
  },

  {
    title: "Todo 4",
    desc: "This is my fourth Todo",
    completed: true,
  },

  {
    title: "Todo 5",
    desc: "This is my fifth Todo",
    completed: true,
  },
];
// Data source ends here

// Endpoint starts here
app.get("/", (req, res) => {
  res.status(200).json(todos);
});

app.get("/todos", (req, res) => {
  res.status(200).json(todos);
});

app.get("/todos/:id", (req, res) => {
  res
    .status(200)
    .json({ data: todos.find((todo) => todo.id === req.params.id) });
});

app.post("/todos", (req, res) => {
  todos.push(req.body);
  res.status(201).json({ msg: "Todo created successfully" });
});

app.put("/todos/:id", (req, res) => {
  const todo = todos.find((todo) => todo.id === req.params.id);
  if (todo) {
    const { title, desc, completed } = req.body;
    todo.title = title;
    todo.desc = desc;
    todo.completed = completed;
    res.status(200).json({ msg: "Todo updated sucessfully" });
    return;
  }
  res.status(404).json({ msg: "Todo not found" });
});

app.delete("/todos/:id", (req, res) => {
  const todoIndex = todos.findIndex((todo) => (todo.id === req.params.id));
  if (todoIndex) {
    todos.splice(todoIndex, 1);
    res.status(200).json({ msg: "Todo deleted successfully" });
  }
  res.status(404).json({ msg: "Todo not found" });
});
// Endppoint ends here

// App listens to incoming reqs here
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});