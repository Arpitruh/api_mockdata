const express = require("express");

//baba ye sample data hai aise hi website se uthaya h ek 1000 logo ka
const users = require("./MOCK_DATA.json");

const app = express();
const PORT = 8000;

//Routes
app.get("/users", (req, res) => {
    return res.json(users);
});

app.listen(PORT, () => console.log(`Server Started at PORT: ${PORT}`));