const express = require("express"),
  router = express.Router(),
  controller = require("../controllers/memory.controller");

const multer = require("multer");

const upload = multer({ dest: "uploads/" });

router.post("/create", upload.array("content", 5), controller.create);
router.post("/delete", controller.deleteM);
router.get("/list", controller.getMemory);

module.exports = router;
