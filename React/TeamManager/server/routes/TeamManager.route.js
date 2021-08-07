const PlayerController = require('../controllers/TeamManager.controller');
module.exports = function(app){
    app.get('/api/players', PlayerController.getPlayers);
    app.post('/api/addplayer', PlayerController.createPlayer);
    app.put('/api/update/:id', PlayerController.updatePlayer);
    app.delete('/api/delete/:id', PlayerController.delete);

}
