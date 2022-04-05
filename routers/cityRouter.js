const express = require("express");
const router = express.Router();

router.get("/paris", (_req, res) => {
  res.render("Paris");
});
router.get("/marseille", (_req, res) => {
  res.render("Marseille");
});
router.get("/lyon", (_req, res) => {
  res.render("Lyon");
});

module.exports = router;