const {Athlete }= require('../models/sport.model')

module.exports.list = (req ,res)=>{
    Athlete.find({})
    .then(athletes =>{
        res.json(athletes);
    })
    .catch(err=>{
        res.status(400).json(athletes);
    })

}
module.exports.create = (req,res)=>{
    const {firstName,lastName,sport,team}= req.body;
    Athlete.create({
        firstName,
        lastName,
        team,
        sport
    })
    .then(athlete =>{
        res.json(athlete)
    })
    .catch(err=>{
        res.status(400).json(athlete)
    })
}
module.exports.detail =(req,res)=>{
    const{id}=req.params
    Athlete.findOne({_id:id})
    .then(athlet =>{
        res.json(athlet)
    })
    .catch(err=>{
        res.status(400).json(err)
    })
}
module.exports.update =(req,res)=>{
    const{id} = req.params;
    const{firstName,lastName,sport,team}=req.body;
    Athlete.findOneAndUpdate({_id:id},{
        firstName,
        lastName,
        sport,
        team
    },
    {
        new:true,
        useFindAndModify:true
    }
    )
    .then(athlet=>{
        res.json(athlet)
    })
    .catch(err=>{
        res.status(400).json(err)
    })
}

module.exports.delete =(req,res)=>{
    const {id} = req.params;
    Athlete.deleteOne({_id:id})
    .then(deleteconf =>{
        res.json(deleteconf)
    })
    .catch(err =>{
        res.status(400).json(err)
    })
}