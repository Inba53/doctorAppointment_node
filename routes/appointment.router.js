const express = require('express');
const { bookAppointment, insertSlot, searchSlot, getAllAppointments } = require('../controller/appointment.controller');
const router = express.Router();

router.post("/saveSlot", insertSlot);
router.post("/searchSlot", searchSlot);
router.post("/bookAppointment", bookAppointment);
router.get("/getAllAppointments", getAllAppointments);

module.exports = router