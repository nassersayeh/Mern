const mongoose = require('mongoose');
const PlayerSchema = new mongoose.Schema({
    playerName: { type: String,
        required: [
            true,
            "PlayerName is required"
        ],
        minlength:[
            4,"it must be Greater than 4"
        ]
    },
    perferedPosition: { type: String },
    Game1: { type: String },
    Game2: { type: String },
    Game3: { type: String }

}, { timestamps: true });
module.exports.Player = mongoose.model('Player', PlayerSchema);
