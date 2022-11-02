const express = require("express");
const controller = require("../controllers/noteController.js")
const web = require("../controllers/webController.js")

const router = express.Router();

// Api End Points
router.get("/getAllNotes", controller.getAllNotes)
router.post("/insertNote", controller.insertNote)
router.put("/updateNote/:id", controller.updateNote)
router.delete("/deleteNote/:id", controller.deleteNote)


// FrontEnd End Points
router.get("/", web.home);
module.exports = router;