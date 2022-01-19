import React from 'react'
import {useNavigate} from 'react-router-dom'
import { useDispatch } from 'react-redux';
import {updatePlayer} from '../features/player'

const Start = ({characters}) => {
    const divStyle = {
        // width: "100%",
        // height: "100vh",
        borderRadius: "10px",
        border: "1px solid blue",
        margin: "10px",
        backgroundColor: "lightgreen",
        padding: "10px "
    };

    const nav = useNavigate()
    const dispatch = useDispatch()
    const chooseCharacter =(arg)=>{
        console.log("choose",arg, arg.race)
        dispatch(updatePlayer(arg))
        nav("./main")
    }
    console.log(characters)

    return (
        <div className='d-flex just-center'>
            <div style={divStyle} className='d-flex f-wrap'> 
                {characters.map((x,index)=>
                <div key={index} className='character'>
                    <h4>{x.race}</h4>
                    <img src={x.image} alt=''/>
                    <p> Damage: <b>{x.damage}</b></p>
                    <p> Health: <b>{x.health}</b></p>
                    <p> Energy: <b>{x.energy}</b></p>
                    <p> Stamina: <b>{x.stamina}</b></p>
                    <p> Strength: <b>{x.strength}</b></p>
                    <p> Basic inventory: <b>{x.inventorySlots}</b></p>
                    <p> Start with the gold :<b>{x.gold}</b></p>
                    <button onClick={()=>chooseCharacter(x)}> Choose</button>
                </div>
                )}
            </div>
        </div>
    )
}

export default Start
