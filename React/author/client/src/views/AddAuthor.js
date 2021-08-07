import React ,{useState}from "react";
import AuthorForm from '../components/AuthorForm';
import { Link,navigate } from "@reach/router";
import axios from 'axios';
import { object } from "prop-types";

export default()=>{
    const [authors,setAuthos] = useState([]);
    const [errors,setErrors]= useState([]);

    const addNewAuthor = (newAuthor) =>{
        axios.post('http://localhost:8000/api/authors', newAuthor)
        .then(res => {
            setAuthos([
                ...authors,
                res.data
            ]);
            navigate("/");
        })
        .catch(err=> {
            const errRes = err.res.data.errors;
            const errorArr = [];
            for(const key of object.keys(errRes)){
                errorArr.push(errRes[key].message)
            }
            setErrors(errorArr);
        })
    }
    return(
        <div>
            <Link to="/">Home</Link>
            <h4>Add a new Author</h4>
            <AuthorForm onSubmitProp={addNewAuthor} initialName={""} errors = {errors}/>
        </div>
    )
}