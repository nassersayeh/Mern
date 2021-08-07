const { Player } = require('../models/TeamManager.model');
module.exports.getPlayers = (request, response) => {
    Player.find({}).then(res=>response.json(res))
    .catch(err=>{
        response.json(err)
    })
}
    // The method below is new
module.exports.createPlayer = (request, response) => {
    const { playerName, perferedPosition } = request.body;
    Player.create({
        playerName,
        perferedPosition,
        Game1:"undecided",
        Game2:"undecided",
        Game3:"undecided"
    })
        .then(player => console.log(player))
        .catch(err => response.status(400).json(err));
}

module.exports.updatePlayer = (request, response) => {
    console.log(request.body)
        // const { Game1,Game2,Game3 } = request.body;
        Player.findOneAndUpdate({_id:request.params.id}, request.body, {new:true})
        .then(update=> response.json(update))
        .catch(err=> response.json(err));
    }

    module.exports.delete = (request, response) => {
        console.log(request.body)
            // const { Game1,Game2,Game3 } = request.body;
            Player.deleteOne({_id:request.params.id})
            .then(deleteConf=> response.json(deleteConf))
            .catch(err=> response.json(err));
        }
