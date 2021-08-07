import React,{useState,useEffect} from 'react'
import DeleteButton from "../components/DeleteButton"
import {Link} from "@reach/router"
import axios from 'axios'
const IndexView = props =>{
    const [athletes, setAthletes]= useState([])
    useEffect(()=>{
        axios.get("http://localhost:8000/api/athletes")
        .then((res)=>{
            setAthletes(res.data);
        })
        .catch(err=>{
            console.log(err);
        })
    },[])
    return(
        <div>
            <Link to="/create">Add Athlete</Link>
            <h1>Athlets</h1>
            <ul>
                {athletes.map((athlte,indx)=>{
                    return(

                        <li key={indx}><Link to={"/"+athlte._id}>{athlte.firstName} {athlte.lastName}</Link> | <Link to={"/"+athlte._id+"/edit"}>Edit</Link> | <DeleteButton id={athlte._id}/></li>
                    )
                })}
            </ul>
        </div>
    )
}

export default IndexView