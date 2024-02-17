const express = require("express");
const router = express.Router();

const addPatientRoutes = require("./addPatientRoutes");
const uploadRoutes = require("./uploadRoutes");
const addRecordRoutes = require("./addRecordRouter");
const getRecordsRoutes = require("./getRecordsRouter");

router.use("/", addPatientRoutes);
router.use("/", uploadRoutes);
router.use("/",addRecordRoutes);
router.use("/", getRecordsRoutes);

module.exports = router;
