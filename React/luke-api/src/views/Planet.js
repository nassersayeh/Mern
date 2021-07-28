import React , {useState,useEffect} from 'react'
import axios from 'axios';


const Planet = ({id}) => {
    const [planet,setPlanet] = useState([]);
    useEffect(()=>{
        axios
        .get(`https://swapi.dev/api/planets/${id}`)
        .then(res=>{setPlanet(res.data)});
    },[id]);
    return (
        <div>
            <h1>{planet.name}</h1>
            <div>
                <h3>Terrain:</h3>
                <h3>{planet.terrain}</h3>
            </div>

            <div>
                <h3>Climate:</h3>
                <h3>{planet.climate}</h3>
            </div>

            <div>
                <h3>Population:</h3>
                <h3>{planet.population}</h3>
            </div>

            <div>
                <h3>Gravity:</h3>
                <h3>{planet.gravity}</h3>
            </div>

            <div>
                <h3>Diameter :</h3>
                <h3>{planet.diameter} km</h3>
            </div>

            <div>
                <h3>Rotation Period :</h3>
                <h3>{planet.rotation_period} days</h3>

            </div>

            <div>
                <h3>Orbit Period:</h3>
                <h3>{planet.orbital_period} days</h3>
            </div>
        </div>
    )
}

export default Planet
