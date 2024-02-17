const express = require("express");
const router = express.Router();
const { getRecords } = require("../controllers/getRecordsController");

router.post("/getRecords", getRecords);

module.exports = router;
