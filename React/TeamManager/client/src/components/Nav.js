import React from 'react'
import {Link} from "@reach/router"

function Nav(props) {
    const {displayList} = props
    return (
        <div className="nav">
            <ul>
                <li>
                    {displayList.map((item,index) =>{
                        return displayList.length-1 > index?
                        (<Link key={index}to={item.path}>{item.disc} | </Link>)
                        :
                        (<Link key={index}to={item.path}>{item.disc} </Link>)
                    })}
                </li>
            </ul>
        </div>
    )
}

export default Nav
