import React from 'react'
import {useSelector} from "react-redux";

const Character = () => {
    const divStyle = {
        width: "100%",
        height: "100%",
        minHeight: "600px",
        borderRadius: "10px",
        border: "1px solid blue",
        margin: "10px",
        backgroundColor: "aliceblue",
        padding: "10px"
      };

    const player = useSelector(state=>state.player.value)
    console.log(player)
    if (player==null){
        return (<div><h1>Please choose your Character!!!</h1></div>)
    }
    return (
        <div style={divStyle} className='d-flex'>
            
            <div  className='character flex1'>
                <h4>{player.race}</h4>
                <img src={player.image} alt=''/>
                <div className='userSlot'>
                    <img src='' alt='Slot for weapon'/>
                </div>
            </div>
            <div  className='character flex1'>
                <p> Damage: <b>{player.damage}</b></p>
                <p> Health: <b>{player.health}</b></p>
                <p> Energy: <b>{player.energy}</b></p>
                <p> Stamina: <b>{player.stamina}</b></p>
                <p> Strength: <b>{player.strength}</b></p>
                <p> Inventory slots: <b>{player.inventorySlots}</b></p>
                <p> Gold :<b>{player.gold}</b></p>
            </div>
        </div>
    )
}

export default Character
