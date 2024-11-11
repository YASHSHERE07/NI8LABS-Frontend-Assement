const express = require("express");
const fs = require("fs");
const path = require("path");
const cors = require("cors");

const app = express();
const PORT = 5000;
const DATA_FILE = path.join(__dirname, "data.json");

app.use(cors());
app.use(express.json());

const readData = () => {
  const data = fs.readFileSync(DATA_FILE);
  return JSON.parse(data);
};

const writeData = (data) => {
  fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2));
};

app.get("/users", (req, res) => {
  const users = readData();
  res.json(users);
});

app.post("/users", (req, res) => {
  const users = readData();
  const newUser = { id: Date.now(), ...req.body };
  users.push(newUser);
  writeData(users);
  res.status(201).json(newUser);
});

app.put("/users/:id", (req, res) => {
  const { id } = req.params;
  const users = readData();
  const index = users.findIndex((user) => user.id == id);

  if (index === -1) {
    return res.status(404).json({ message: "User not found" });
  }

  users[index] = { ...users[index], ...req.body };
  writeData(users);
  res.json(users[index]);
});

app.delete("/users/:id", (req, res) => {
  const { id } = req.params;
  let users = readData();
  const userExists = users.some((user) => user.id == id);

  if (!userExists) {
    return res.status(404).json({ message: "User not found" });
  }

  users = users.filter((user) => user.id != id);
  writeData(users);
  res.status(204).end();
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
