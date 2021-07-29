const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost/asmaandnasser", {
    useNewUrlParser:true,
    useUnifiedTopology:true,
})
.then(() => console.log("Connected to db as asma said"))
.catch(err => console.log("somthing went wrong", err));