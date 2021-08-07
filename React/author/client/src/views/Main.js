import React , {useState}from 'react';
import { Link } from '@reach/router';
import axios from 'axios';
import AuthorList from "../components/AuthorList";

export default () =>{
    const [ authors ,setAuthor ]= useState([]);
    axios.get('http://localhost:8000/api/authors')
    .then(res => {
        setAuthor(res.data);
    },[])

    return(
        <div>
            <Link to={"/new"}>Add new Author</Link>
            <h4>we have quotes by : </h4>
            <AuthorList authors={authors}/>
        </div>
    )
}