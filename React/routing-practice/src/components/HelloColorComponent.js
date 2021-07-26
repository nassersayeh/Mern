import React from 'react'

const HelloColorComponent = (props) => {
    const isnun = () =>{
        if(isNaN(props.text))
    {
        return <div><h1 style={{color:props.color , 'background-color': props.backcolor}}>The world is : {props.text}</h1></div>;
    }
}
    return (
        <div>
            {isnun()}
        </div>
    )
}

export default HelloColorComponent
