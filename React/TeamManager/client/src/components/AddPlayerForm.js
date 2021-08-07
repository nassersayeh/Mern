import React ,{useState}from 'react'
import axios from 'axios'
import { navigate } from '@reach/router';

const AddPlayerForm = () => {
    const [playerName,setPlayerName]= useState("");
    const [perferedPosition,setPosition]= useState("");
    const [errorsfe,setErrorsfe]= useState([]);
    const [errors,setErrors]= useState([]);
    const [disabled,setDisabled]= useState(true);
    const onSubmitHandler = (e)=>{
        e.preventDefault();

        axios.post("http://localhost:8000/api/addplayer",
            {playerName,perferedPosition})
            .then(res=>{
                console.log(res)
                navigate('/players')
            }
            
            )
            
            .catch(err=>{
                const errorResponse = err.response.data.errors; // Get the errors from err.response.data
                const errorArr = []; // Define a temp error array to push the messages in
                for (const key of Object.keys(errorResponse)) { // Loop through all errors and get the messages
                    errorArr.push(errorResponse[key].message)
                }
                // Set Errors
                setErrors(errorArr);
            })
            
    }
    
    return (
        <div>
            <form onSubmit={onSubmitHandler}>
                <legend>Add Player</legend>
                <label>Player Name :</label>
                <input type="text" placeholder="Enter Player Name" onChange={(e)=>{
                    if(e.target.value.length>2){
                        setDisabled(false)
                        setErrorsfe([])
                    }else{
                        setErrorsfe(["* Name Must be 2 Char long"])
                        setDisabled(true)
                    }
                    setPlayerName(e.target.value)
                }}
                    value={playerName}
                    /><br/>
                {errorsfe.length>0 ? <p>{errorsfe[0]}</p>:null}
                <label>Prefferd Possition</label>
                <input type="text" placeholder="Enter Preffered Postion" onChange={(e)=>{setPosition(e.target.value)}} value={perferedPosition}/><br/>
                <input type="submit" disabled={disabled} value="Add Player"/>
                {errors.map((err, index) => <p key={index}>{err}</p>)}
            </form>
        </div>
    )
}

export default AddPlayerForm
