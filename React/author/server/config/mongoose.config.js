const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/authorsdb', {
    useNewUrlParser:true,
    useUnifiedTopology:true,
})
.then(()=> console.log("Established connection to the database"))
.catch(err=>console.log("Somethong went wrong in the database", err));