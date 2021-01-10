const mongoose = require('mongoose');

const appointmentSchema = new mongoose.Schema({

    endTime: String,
    slotDate: String,
    pateientName:String,
    startTime: String,
    appointment:String,
    pateientNumber:String,
    slotSession:String
});

module.exports = mongoose.model('appointment', appointmentSchema);