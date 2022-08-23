require("dotenv").config();
const express = require("express");
const path = require("path");
const port = process.env.PORT || 8866;


const app = express();

app.set('view engine', 'ejs');

// tell Express where the view folder will live
app.set('views', path.join(__dirname, '/src/templates/views'));

app.use(express.json());


app.get("/", (req, res) => {
    res.render("index");
});

app.get("/posts", (req, res) => {
    res.render("posts", {
        posts: [
            { author: "Bob", body: "Hey guys, what's poppin?", created_on: "today lol" }
        ]
    });
});

app.get("/login", (req, res) => {
    res.render("login");
});
app.get("/register", (req, res) => {
    res.render("register");
});
app.get("/profile", (req, res) => {
    res.render("profile");
});


app.listen(port, () => {
    console.log(`Server running at http://localhost:${port} ...`)
});