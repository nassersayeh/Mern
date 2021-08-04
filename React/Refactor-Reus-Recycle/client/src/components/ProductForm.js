import React , {useState} from 'react';
import axios from 'axios';

export default props =>{
    const {initialTitle , initialPrice , initialDesc , onSubmitProp} = props;
    const [title, setTitle] = useState(initialTitle);
    const[price,setPrice] = useState(initialPrice);
    const[desc,setDesc] = useState(initialDesc);

    const onSubmitHandlet = (e) =>{
        e.preventDefault();
        onSubmitProp({title,price,desc});
    }

    return(
        <form onSubmit={onSubmitHandlet}>
            <h2>Create a Product</h2>
            <div>
                <label for="title">Title</label>
                <input type="text" name="title" value={title} onChange={(e)=> {setTitle(e.target.value)}}/>
            </div>

            <div>
                <label for="price">Price</label>
                <input type="number" name="price" value={price} onChange={(e)=> {setPrice(e.target.value)}}/>
            </div>

            <div>
                <label for="desc">Description</label>
                <input type="text" name="desc" value={desc} onChange={(e)=> {setDesc(e.target.value)}}/>
            </div>

            <input type="submit" value="submit"></input>
        </form>
    )
}