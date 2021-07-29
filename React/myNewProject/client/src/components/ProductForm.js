import React ,{useState}from 'react'
import axios from 'axios';
export default() =>{

const [ title , setTitle] = useState("");
const [price ,setPrice] = useState("");
const [disc , setDisc] = useState("");

const onSubmitHandler = e =>{
    e.preventDefault();

    axios.post("http://localhost:8000/api/products/new", {
        title,
        price,
        disc
    })
    .then(res => console.log(res))
    .catch(err => console.log(err))

}
return(
    <form onSubmit={onSubmitHandler}>
        <p>
            <label> Title</label> <br/>
            <input type="text" onChange={(e)=>setTitle(e.target.value)} value={title}/>
        </p>

        <p>
            <label> Price</label> <br/>
            <input type="text" onChange={(e)=>setPrice(e.target.value)} value={price}/>
        </p>

        <p>
            <label> Discreption</label> <br/>
            <input type="text" onChange={(e)=>setDisc(e.target.value)} value={disc}/>
        </p>
        <input type ="submit" value="create"/>
    </form>
)
}
