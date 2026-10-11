const express = require("express");
const app = express();
const cors = require("cors");
const port = 3000;
const posts = require("./posts.json");

app.use(cors());

app.get("/", (req, res) => {
	res.send("Hello World!");
});

app.get("/posts", (req, res) => {
	res.json(posts);
});

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`);
});
