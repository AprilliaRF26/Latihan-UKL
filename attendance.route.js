const express = require("express");
const router = express.Router();
const attendanceController = require("../controllers/attendance.controller");

// POST /api/attendance
router.post("/", attendanceController.addAttendance);

// GET /api/attendance/history/:user_id
router.get("/history/:user_id", attendanceController.getHistory);

// GET /api/attendance/summary/:user_id
router.get("/summary/:user_id", attendanceController.getMonthlySummary);

// POST /api/attendance/analysis
router.post("/analysis", attendanceController.analyzeAttendance);

module.exports = router;
