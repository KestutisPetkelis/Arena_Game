import React from 'react';
import { useNavigate } from 'react-router-dom';

const Header2 = () => {
    const divStyle = {
        width: "100%",
        // height: "100vh",
        borderRadius: "10px",
        border: "1px solid blue",
        margin: "10px",
        backgroundColor: "lightgreen",
        padding: "10px "
    };

    const nav= useNavigate()

  return (
    <div style={divStyle} className='d-flex just-start'>
        <button onClick={()=>nav("/main")}>Main</button>
        <button onClick={()=>nav("/arena")}>Arena</button>
    </div>
)
};

export default Header2;
