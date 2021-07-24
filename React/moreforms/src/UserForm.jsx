import React, { useState } from  'react';
    
    
const UserForm = (props) => {
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState(""); 
    

    
    const createUser = (e) => {
        e.preventDefault();
        const newUser = { firstname,lastname, email, password };
        console.log("Welcome", newUser);
        setFirstname("")
        setLastname("")
        setEmail("")
        setPassword("")
    };

    const validationfirstname=(e)=>{
        setFirstname(e.target.value)
        if(e.target.value.length < 2)
            alert("its must be more than 2 chars")
    }
    const validationLastname=(e)=>{
        setLastname(e.target.value)
        if(e.target.value.length < 2)
            alert("its must be more than 2 chars")
    }

    const validationEmail=(e)=>{
        setEmail(e.target.value)
        if(e.target.value.length < 5)
            alert("its must be more than 2 chars")
    }

    const validationPassword=(e)=>{
        setPassword(e.target.value)
        if(e.target.value.length < 8)
            alert("its must be more than 2 chars")
    }
    const validationConfirm=(e)=>{
        setPassword(e.target.value)
        if(e.target.value.length !== password.length)
            alert("Your Password is not matched!")
    }
    
    return(
        <div>
        <form onSubmit={ createUser }>
            <div>
                <label>First Name: </label> 
                <input type="text"  onChange={validationfirstname} />
            </div>
            <div>
                <label>Last Name: </label> 
                <input type="text" onChange={ ((e) => setLastname(e.target.value)),(validationLastname) } />
            </div>

            <div>
                <label>Email: </label> 
                <input type="text" onChange={ ((e) => setEmail(e.target.value) ),(validationEmail) }/>
            </div>

            <div>
                <label>Password: </label>
                <input type="text" onChange={ ((e) => setPassword(e.target.value)) ,(validationPassword)} />
            </div>

            <div>
                <label>Comfirm Password: </label>
                <input type="text" onChange={ ((e) => setPassword(e.target.value)),(validationConfirm) } />
            </div>
            <input type="submit" value="Create User" />
        </form>
        <p>
            {firstname}
            {lastname}<br></br>
            {email}<br></br>
        </p>
        </div>
        
    );
};
    
export default UserForm;