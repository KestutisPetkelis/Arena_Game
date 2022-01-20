import React from 'react'
import {useSelector} from "react-redux";

const Inventory = () => {
    const divStyle = {
        width: "100%",
        height: "100%",
        minHeight: "600px",
        borderRadius: "10px",
        border: "1px solid blue",
        margin: "10px -30px 10px 10px",
        backgroundColor: "aliceblue",
        padding: "10px"
    };
    
    const slots = useSelector(state=>state.playerinventory.value)
    console.log(slots)


    return (
        <div style={divStyle}>
           <h1>Inventory</h1>
           <div className='d-flex f-wrap'> 
                
                {slots.map((x,i)=>
                <div key={i} className='userSlot'>
                    <img src={x} alt="Empty slot"/>
                </div>
                )}
           </div> 
        </div>
    )
}

export default Inventory
