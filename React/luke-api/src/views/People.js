import React,{useState,useEffect} from 'react';
import { navigate,Link } from '@reach/router';
import axios from 'axios';

const People =({id})=>{
    const [people,setPeople]=useState([]);
    const [home,setHome] = useState({name:"Loding.."});

    useEffect(() =>{
        axios
        .get('https://swapi.dev/api/people/' + id)
        .then(res =>{setPeople(res.data)})
        .catch(() => navigate('/error'));
    }, [id],2500);

    useEffect(() => {
        axios
        .get(people.homeworld)
        .then(res=>{
            setHome(res.data)
        })
        .catch(console.log);
    },[id,people]);

    const getHomeWorldId = () =>{
        if(home.url){
            const url = home.url;
            let path = url.length -2 ;
            let Hwid = "";

            while(url[path] !=="/"){
                Hwid = url[path] + Hwid;
                path--;
            }
            return Hwid;
        }
    }

    return(
        <div>
            <h1>{people.name}</h1>
            <div>
                <h3> Height :</h3>
                <h3> {people.height} cm</h3>
            </div>
            <div>
                <h3> Weight :</h3>
                <h3> {people.mass} kg</h3>
            </div>

            <div>
                <h3> Hair Color : :</h3>
                <h3> {people.hair_color}</h3>
            </div>

            <div>
                <h3> Skin Color :</h3>
                <h3> {people.skin_color}</h3>
            </div>

            <div>
                <h3> Eye Color :</h3>
                <h3> {people.eye_color}</h3>
            </div>

            <div>
                <h3> Birth Year :</h3>
                <h3> {people.birth_year}</h3>
            </div>

            <div>
                <h3> Home World :</h3>
                <h3><Link ro={`/planets/${getHomeWorldId()}`}>{home.name}</Link> </h3>
            </div>
        </div>
    )
}

export default People;