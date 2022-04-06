const express = require("express");
const handlebars = require("express-handlebars");
const mongoose = require("mongoose")
const path = require("path");
const cookieParser = require("cookie-parser");
const user = require("./models/userModel");
const cityRouter = require("./routers/cityRouter");
const loginRouter = require("./routers/loginRouter");
const signupRouter = require("./routers/signupRouter");
const productsRouter = require("./routers/productsRouter");
const profileRouter = require("./routers/profileRouter");
const dotenv = require("dotenv");
dotenv.config({
    path: "./config.env",
  });
const app = express();

// Handlebars config
app.engine("handlebars", handlebars.engine());
app.set("view engine", "handlebars");

// Middlewares

app.use(cookieParser());
// pour le css et le js dans le html
app.use(express.static(path.join(__dirname, "/public")));
app.use(express.urlencoded({ extended: true }));

mongoose
	.connect(process.env.MONGO_URI,
		{
			useNewUrlParser: true,
		}
	)
	.then(() => console.log("Connected to MongoDB"));

app.get("/", (_req, res) => {
	res.render("homepage");
});

app.use("/city", cityRouter);
app.use("/signup", signupRouter);
app.use("/login", loginRouter);
app.use("/products", productsRouter);
app.use("/profile", profileRouter);

app.use("*", (err, req, res, next) => {
	res.send("error");
});

app.listen(8000, () => console.log("Listening"));