import React,{useState,useEffect} from 'react'
import Form from '../components/Form'
import DeleteButton from "../components/DeleteButton"
import axios from 'axios'
import { navigate } from '@reach/router'
const EditView = props =>{
    const {id} = props
    const [athlete , setAthlete] = useState({})
    const [load,setLoad]= useState(false)
    useEffect(()=>{
        axios.get("http://localhost:8000/api/athletes/"+id)
        .then(res =>{
            setAthlete(res.data)
            setLoad(true)
        })
        .catch(err=>{
            console.log(err)
        })
    })
    const onSubmitHandler = (e,data)=>{
        e.preventDefault()
        axios.put("http://localhost:8000/api/athletes/"+id,data)
        .then(res =>{
            navigate("/")
        })
        .catch(err=>{
            console.log(err)
        })
    }
    return(
        <div>
            <h1>Editing : {athlete.firstName} {athlete.lastName}</h1>
            { load &&
                <Form 
                    onSubmitHandler={onSubmitHandler}
                    

                />
            }
            <DeleteButton/>
        </div>
    )
}
export default EditView