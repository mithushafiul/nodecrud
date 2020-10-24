const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://sa:123@cluster0.vmzjk.mongodb.net/EmployeeDB?retryWrites=true&w=majority', { useNewUrlParser: true }, (err) => {
    if (!err) { console.log('MongoDB Connection Succeeded.') }
    else { console.log('Error in DB connection : ' + err) }
});

require('./employee.model');