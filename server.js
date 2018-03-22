// dependencies and imports
const express = require("express"),
			parser = require("body-parser"),
			exphbs = require("express-handlebars"),
			routes = require("./controllers/burger_controller.js");

const port = process.env.port || 8080;

const app = express();

app.use(express.static("public"));

app.use(parser.urlencoded({ extended: true }));
app.use(parser.json());

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.use(routes);

// Start server
app.listen(port, () => console.log(`Server listening on: http://localhost:${port}`));