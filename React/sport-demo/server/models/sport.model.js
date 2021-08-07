const mongoose = require('mongoose')
const AthleteSchema = new mongoose.Schema({
    firstName: {
        type: String,
        require:[
            true,
            "First Name is required"
        ]
    },
    lastName: {
        type: String,
        require:[
            true,
            "Last Name is required"
        ]
    },
    sport : {type:String},
    team : {type:String}
},{timestamps:true})

module.exports.Athlete = mongoose.model('Athlete', AthleteSchema);