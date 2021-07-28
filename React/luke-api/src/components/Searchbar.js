import React , {useState} from 'react';
import {navigate} from '@reach/router'

const Searchbar = props =>{
    const [formState , setFormState]= useState({
        category:"people",
        id:""
    });

    const onChange = e=>{
        setFormState({
            ...formState,
            [e.target.name]:e.target.value
        });
    }

    const onSubmit = e =>{
        e.preventDefault();
        navigate('/' + formState.category + '/' +formState.id);
    }

    return (
        <div>
            <h1>Luke API Walker</h1>
            <form onSubmit={onSubmit}>
                <div>
                    <label for="category">Seatvh For :</label>
                    <select name="category" onChange={onChange}>
                        
                        <option value="planets">planet</option>
                        <option value="starships">starships</option>
                        <option value="people">people</option>
                        <option value="vehciles">vehciles</option>
                        <option value="spacies">spacies</option>
                        <option value="films">films</option>
                    </select>
                </div>
                <label for="id">ID:</label>
                <input type="number" name="id" onChange={onChange}/>
                <div>
                    <button type="submit">Submit</button>
                </div>
            </form>
        </div>
    
    )
}
export default Searchbar;