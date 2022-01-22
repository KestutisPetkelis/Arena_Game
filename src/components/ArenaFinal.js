import React from 'react';
import { useNavigate } from 'react-router-dom';

const ArenaFinal = ({setShowAction}) => {
    const divStyle = {
        maxWidth: "350px",
        height: "95%",
        minHeight: "600px",
        borderRadius: "10px",
        border: "1px solid blue",
        margin: "10px",
        backgroundColor: "aliceblue",
        padding: "10px"
    };

    const nav = useNavigate()
    const gotoMain = () =>{
        nav("/main")
    }

  return (
    <div style={divStyle} className='d-flex column ali-around just-center'>
        <span className='mh-50'>Battle is over... New Enemy or Go Back?</span>
        <button onClick={()=>setShowAction(1)}><h3>Find new Enemy</h3></button>
        <button onClick={()=>gotoMain()}><h3>Back to Main</h3></button>
    </div>
    );
};

export default ArenaFinal;
