const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://admin:admin@task-database.qwqebwm.mongodb.net/?retryWrites=true&w=majority');
const db = mongoose.connection;
db.on('error',console.error.bind(console,'erroe connecting to db'));
db.once('open',function(){
    console.log('Success fully connected to the database')
})