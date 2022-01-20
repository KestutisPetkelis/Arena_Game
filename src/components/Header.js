import React from 'react'
import { useNavigate } from 'react-router-dom';
import {useSelector} from "react-redux";

const Header = () => {
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
    const money = useSelector(state=>state.player.value.gold)
    


    return (
        <div style={divStyle} className='d-flex just-between'>
            <div className='d-flex just-start'>
                <button onClick={()=>nav("/trader")}>Shop</button>
                <button onClick={()=>nav("/arena")}>Arena</button>
            </div>
            <div className='d-flex ali-center'>
                <p>Money: <b>{money}</b></p>
            </div>
        </div>
    )
}

export default Header
