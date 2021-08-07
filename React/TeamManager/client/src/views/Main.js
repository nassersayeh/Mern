import axios from 'axios'
import React , {useState,useEffect}from 'react'
import ListPlayers from "../components/ListPlayers"
import './main.css' 
import Nav from '../components/Nav'

const Main = (props) => {
    const {children, fetch, PlayerList} = props
    const[players,setPlayers]= useState([])

    useEffect(()=>{
        axios.get("http://localhost:8000/api/players")
        .then(res =>{
            console.log(res.data)
            setPlayers(res.data)
            fetch(res.data)
        })
        .catch(err=>{
            console.log(err)
        })
    },[])
    return (
        <div className="main">
            <Nav displayList={PlayerList}/>
            {children}
        </div>
    )
}

export default Main
