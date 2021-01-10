const mongoose = require('mongoose');
mongoose.set('useFindAndModify', false);

const db = "mongodb+srv://doctorAppointment:skinba@cluster0.327mv.mongodb.net/doctorAppointment?retryWrites=true&w=majority";

mongoose.connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
                                .then(() => console.log('connected to mongoDB'))
                                .catch((err) => console.log('Failed to connect DB' + err))
