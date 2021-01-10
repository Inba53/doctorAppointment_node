//express package
const express = require('express');
//middleware package
const cors = require('cors');
const app = express();
const bodyParser = require('body-parser');
const appointmentRoutes = require("./routes/appointment.router");
require("./db");

const port = 4000;

app.listen(process.env.PORT || port , console.log(`Server is running at port ${port}`));
             
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
app.use(cors());
app.use('/api/appointment', appointmentRoutes);

app.use(function (req, res, next) {
  //set headers to allow cross origin request.
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  next();
});

app.get('/api', function (req, res) {
    res.end('file catcher example');
  });


