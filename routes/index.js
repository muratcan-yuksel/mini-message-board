var express = require("express");
var router = express.Router();

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date(),
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date(),
  },
];

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Mini Messageboard", messages: messages });
});

// get form page

router.get("/new", function (req, res) {
  res.render("form", { title: "Mini Messageboard" });
});

router.post("/new", function (req, res) {
  // Add the new message to the messages array
  messages.push({
    text: req.body.text,
    user: req.body.user,
    added: new Date(),
  });

  // Redirect the client back to the main page
  res.redirect("/");
});

module.exports = router;
