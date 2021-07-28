import React , {useState,useEffect} from 'react';
import axios from 'axios';
const Starships = ({id}) => {
    const[ships,setShips] = useState([]);
    useEffect(()=>{
        axios
        .get(`https://swapi.dev/api/starships/${id}`)
        .then(res => {setShips(res.data)});
    },[id]);
    return (
        <div>
            <h1>{ships.name}</h1>
            <div>
                <h3>Model:</h3>
                <h3>{ships.model}</h3>
            </div>

            <div>
                <h3>Manfacturer :</h3>
                <h3>{ships.manufacturer}</h3>
            </div>

            <div>
                <h3>Class :</h3>
                <h3>{ships.starship_class}</h3>
            </div>

            <div>
                <h3>Cost :</h3>
                <h3>{ships.cost_in_credits} credits</h3>
            </div>

            <div>
                <h3>Length:</h3>
                <h3>{ships.length}</h3>
            </div>

            <div>
                <h3>Crew:</h3>
                <h3>{ships.crew}</h3>
            </div>

            <div>
                <h3>HyperDrive Rating:</h3>
                <h3>{ships.hyperdrive_rating}</h3>
            </div>
        </div>
    )
}

export default Starships
