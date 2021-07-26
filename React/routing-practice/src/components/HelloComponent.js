import React from 'react'

const HelloComponent = (props) => {
    const isnun = () =>{
        if(isNaN(props.text))
    {
        return <div><h1>The world is : {props.text}</h1></div>;
    }
    else{
        return <h1>this is number : {props.id}</h1>;
    }
}

    return (
        <div>
            {isnun()}
        </div>
    )
}

export default HelloComponent
