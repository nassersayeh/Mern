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
    
    return(
        <div>
        <form onSubmit={ createUser }>
            <div>
                <label>First Name: </label> 
                <input type="text"  onChange={ (e) => setFirstname(e.target.value) } />
            </div>
            <div>
                <label>Last Name: </label> 
                <input type="text" onChange={ (e) => setLastname(e.target.value) } />
            </div>

            <div>
                <label>Email: </label> 
                <input type="text" onChange={ (e) => setEmail(e.target.value) } />
            </div>

            <div>
                <label>Password: </label>
                <input type="text" onChange={ (e) => setPassword(e.target.value) } />
            </div>

            <div>
                <label>Comfirm Password: </label>
                <input type="text" onChange={ (e) => setPassword(e.target.value) } />
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