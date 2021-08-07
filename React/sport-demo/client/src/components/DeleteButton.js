import { navigate } from '@reach/router'
import axios from 'axios'
import React from 'react'

const DeleteButton = props =>{
    const {id} = props
    const onClickHandler = e=>{
        e.preventDefault();
        axios.delete('http://localhost:8000/api/athletes/'+id)
        .then(res=>{
            console.log(res)
            navigate("/")
        })
        .catch(err=>{
            console.log(err)
        })
    }
    return(
        <button onClick={onClickHandler}>Delete</button>
    )
}

export default DeleteButton