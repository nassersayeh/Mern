import axios from 'axios';
import React from 'react'

const ListPlayers = (props) => {
    const {ListPl,fetch}= props;
    console.log("ListPl")
    console.log(ListPl)
    const onDeleteHandler = (id)=>{
        axios.delete("http://localhost:8000/api/delete/"+id)
        .then(res=>{
            fetch(ListPl.filter((item,indx)=>{
                return item._id !== id;
            }))
        })
    }
    return (
        <div>
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>Player Name</th>
                            <th>preffered postion</th>
                            <th>action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {ListPl.map((item,indx)=>{
                            return(<tr>
                            <td>{item.playerName}</td>
                            <td>{item.perferedPosition}</td>
                            <td><input type="submit" value="Delete" onClick={()=>{onDeleteHandler(item._id)}}/></td>
                        </tr>)
                        })}
                        
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default ListPlayers
