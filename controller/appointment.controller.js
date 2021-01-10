const appointmentModel = require("../models/appointment.model");

exports.insertSlot = async(req,res,next) => {

    let checkStartDateandTime = await appointmentModel.find({
        '$and':[
            
           {slotDate:{$exists:true, $eq:req.body.slotDate}},
           {endTime:{$exists:true, $eq:req.body.endTime}},
           {startTime:{$exists:true, $eq:req.body.startTime}}
        ]               
        }).exec();

  if(checkStartDateandTime.length>0)
  {
    res.status(200).send({ status: true,statusCode:400, msg: "Slot Already Alloted!" })
  }
 else
  {
    let slotData = req.body;
    let slot = new appointmentModel(slotData);
    await slot.save((error, slotData) => {
      if (error) {
      } else {
        res.status(200).send({ status: true,statusCode:200, msg: "Slot data Saved!", data: slotData });
      }
    })
  }
  
}

exports.searchSlot = async(req,res,next) => {

    let searchData = req.body;
    console.log( searchData);
    await appointmentModel.find({ slotDate: searchData.slotDate }, (error, slots) => {
      if (error) {
        console.log(error)
      } else {
        res.status(200).send({ status: true,statusCode:200, msg: " Data Fetched Successfully!", data: slots })
      }
    });
}

exports.bookAppointment = async(req,res,next) => {

    console.log(req.body)
      await appointmentModel.findByIdAndUpdate(
        req.body._id,
        {
          $set: {
            pateientNumber: req.body.pateientNumber,
            pateientName: req.body.pateientName,
            appointment:req.body.appointment
          }
        },
        {
          new: true
        },
        function (err, updateSlot) {
          if (err) {
            res.send('Error updating ID status');
          } else {
            res.status(200).send({ status: true,statusCode:200, msg: " Appointment Booked!", updateSlot });
          }
        }
      );
}

exports.getAllAppointments = async(req,res,next) => {

    await appointmentModel.find((error, slots) => {
        if (error) {
          console.log(error)
        } else {
          res.status(200).send({ status: true,statusCode:200, msg: " Data Fetched Successfully!", data: slots })
        }
      });
}