import { navigate } from '@reach/router';
import axios from 'axios';
import React ,{useState} from 'react'
import Form from "../components/Form"
const CreateView = props =>{
    const[errors , setErrors]=useState([])
    const onSubmitHandler = (e,data)=>{
        e.preventDefault();
        axios.post("http://localhost:8000/api/athletes",data)
        .then(res =>{
            navigate('/');
        })
        .catch(err =>{
            console.log(err);
            const errorResponse = err.res.data.error;
            const errorArr = [];
            for (const key of Object.keys(errorResponse)){
                errorArr.push(errorResponse[key].message);
            }
            setErrors(errorArr);
        })
    }
    return(
        <div>
            <h1>Create a new athlete</h1>
            {errors.map((error,index)=>{
                return(
                    <p key={index}>{error}</p>
                )
            })}
            <Form
                onSubmitHandler={onSubmitHandler}
                
            />
        </div>
    )
}

export default CreateView