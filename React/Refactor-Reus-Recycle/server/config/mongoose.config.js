const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost/productdb", {
    useNewUrlParser:true,
    useUnifiedTopology:true,
})
.then(() => console.log("Established a connection to the database"))
.catch((err)=> console.log("Somthing wrong when the connection start" , err));