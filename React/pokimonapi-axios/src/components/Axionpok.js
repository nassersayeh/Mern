import React ,{useState} from 'react';
import axios from 'axios';
const Axionpok=(props)=>{
    const [poke,setPoke] = useState([]);
    const onClick = (e) =>{
        axios.get('https://pokeapi.co/api/v2/pokemon?limit=807')
        .then(res => {
            setPoke(res.data.results);
            console.log(poke);
        })
        .catch(error=>{
            console.log(error);
        })
    }

    return(
        <>
        <button onClick={onClick}>Fetch Pokemon</button>
        {poke.map((kiapicanto,i) =>(
            <p key={i}>{kiapicanto.name}</p>
        )
        
        )}
        </>
    );
}
export default Axionpok;