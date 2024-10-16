const express = require('express');

const app = express();
app.use(express.json());

// TODO: Create a crude api for managing user todos
const users = [
  {
    firstname: "John",
    lastname: "Doe",
    email: "john.doe@example.com",
    phone: "1234567890",
  },
  {
    firstname: "Jane",
    "lastname": "Doe",
    "email": "jane.doe@example.com",
    phone: "1234567890",
  }
]

const todos = [
  {
    id: 2,
    date: '15/10/24',
    title: 'my tuesday tasks',
    isDone: false,
   tasks: [
    'going to study',
    'going to gym',
    'going to mall'
   ]
  },
  {
    id: 3,
    date: '15/10/24,',
    title: 'weekend tasks',
    isDone: false,
    tasks: [
      'make week plan',
      "going to grandma's place",
      "going to beach",
      "going to usrah"
    ]
  }
]

const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World!',);
});

app.get("/users", (req, res) => {
  res.status(200).send(users);
})

app.get("/todos", (req, res) => {
  res.status(200).send(todos);
})

app.post("/todos", (req, res) => {
  // create a new todo
 const newTodo = req.body
  todos.push(newTodo);
  res.status(201).send(todos);
})

app.get("/todos/:id/:name", (req, res) => {
  const id = req.params.id;
  const todo = todos.find(todo => todo.id === parseInt(id));
  if (!todo) {
    res.status(404).send("Todo not found");
  }
  res.status(200).send(todo);
})


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});