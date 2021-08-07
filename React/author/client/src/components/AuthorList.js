import React , {useState} from 'react';
import { navigate,Link } from '@reach/router';
import DeleteButton from './DeleteButton';

export default props =>{
    const [authors, setAuthor]=useState([]);
    const removeFromDom = authorId=>{
        setAuthor(authors.filter(authors=>authors._id!== authorId))
    }
    return(
        <div>
            <table>
                <tbody>
                    <tr>
                        <th><h1>Author</h1></th>
                        <th><h1>Actions</h1></th>
                    </tr>
                    {props.authors.sort((auth,index)=> (auth.name.toLowerCase() > index.name.toLowerCase()) ? 1 : -1).map((author,idx) => {
                        return(
                            <tr key={idx}>
                                <td><Link to={`/${author._id}`}><h1>{author.name}</h1></Link></td>
                                <td>
                                    <button onClick={(e)=>navigate(`/${author._id}/edit`)}>Edit</button>
                                    <DeleteButton authorId={author._id} successCallback={()=>removeFromDom(author._id)}/>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}