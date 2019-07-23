const express = require("express");
const app = express();

app.get("/", function(req, res) {
	res.send("Hello World");
});

app.listen(8080, () => {
	console.log("Running on 8080");
});
