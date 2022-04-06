const express = require("express");
const router = express.Router();

router.get("/paris", (_req, res) => {
  res.render("paris");
});
router.get("/marseille", (_req, res) => {
  res.render("parseille");
});
router.get("/lyon", (_req, res) => {
  res.render("lyon");
});

module.exports = router;