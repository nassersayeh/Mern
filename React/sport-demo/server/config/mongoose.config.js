const mongoose = require("mongoose")

mongoose.connect("mongodb://localhost/athlete",{
    useCreateIndex:true,
    useNewUrlParser:true
})
.then(() =>{
    console.log("Connected to database")
})
.catch(()=>{
    console.log("There is Error in connecting to database")
});