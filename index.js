const express = require("express");
const handlebars = require("express-handlebars");
const path = require("path");
const cookieParser = require("cookie-parser");
const app = express();

// Handlebars config
app.engine("handlebars", handlebars.engine());
app.set("view engine", "handlebars");

// Middlewares
app.use(cookieParser());
// pour le css et le js dans le html
app.use(express.static(path.join(__dirname, "/public")));

app.get("/", (_req, res) => {
    res.render("homepage");
});

app.use("*", (err, req, res, next) => {
	res.send("error");
});

app.listen(8000, () => console.log("Listening"));