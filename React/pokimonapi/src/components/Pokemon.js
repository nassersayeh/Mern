import React ,{useState} from 'react';

const Pokemon=(props)=>{
    const [poke,setPoke] = useState([]);
    const onClick = (e) =>{
        fetch('https://pokeapi.co/api/v2/pokemon?limit=807')
        .then(res => {
            return res.json();
        })
        .then(res => {
            setPoke(res.results);
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
export default Pokemon;