import React from 'react'
import {useDispatch, useSelector} from "react-redux";

import {getItemtoSlot} from '../features/playerinventory'
import { disarmWeapon } from '../features/weapon';

const Character = () => {
    const divStyle = {
        width: "80%",
        height: "100%",
        minHeight: "600px",
        borderRadius: "10px",
        border: "1px solid blue",
        margin: "10px",
        backgroundColor: "aliceblue",
        padding: "10px"
    };

    const player = useSelector(state=>state.player.value)
    const gun = useSelector(state=>state.weapon.value)
    const effects=useSelector(state=>state.effects.value)
    const slots = useSelector(state=>state.playerinventory.value)

    const dispatch = useDispatch()

    const disarm=(arg)=>{
        // const item = weapons.find(x=>x.image===arg)   
        const arr = slots.map((x, index) => (index === slots.findIndex(x => x === "")) ? arg:x)
        dispatch(getItemtoSlot(arr))
        dispatch(disarmWeapon())

        console.log("disarm")
    }
    

    console.log(player)
    if (player==null){
        return (<div><h1>Please choose your Character!!!</h1></div>)
    }
    return (
        <div style={divStyle} className='d-flex ali-center just-evenly'>
            
            <div  className='character flex1'>
                <h4>{player.race}</h4>
                <img src={player.image} alt=''/>
                <div className='userSlot pointer'>
                    <img src={gun && gun.image} alt='Slot for weapon'/>
                    {gun && <button onClick={()=>disarm(gun)}>Disarm</button>}
                </div>
            </div>
            <div  className='character flex1'>
                <p> Damage: <b>{player.damage}</b></p>
                <p> Health: <b>{player.health}</b></p>
                <p> Energy: <b>{player.energy}</b></p>
                <p> Stamina: <b>{player.stamina}</b></p>
                <p> Strength: <b>{player.strength}</b></p>
                <p> Inventory slots: <b>{player.inventorySlots}</b></p>
                <p> Gold :<b>{player.gold}</b></p> <br></br>
                {!!gun && 
                    <div> <p><b>Advansers from weapon </b></p>
                        <p>Energy per hit: {gun.energyPerHit}</p>
                        <p>Max damage: {gun.maxDamage}</p>
                        {gun.effects.length===0 &&
                            <div> <p><i><b>No addition effects</b></i></p></div>
                            }
                        {gun.effects.length>0 &&
                            gun.effects.map(x => x=effects[x]).map((x, index) =>
                                <div key={index}>
                                    <p>{x.title}</p>
                                </div>
                            )
                        }
                    </div>
                }
                
            </div>
            
        </div>
    )
}

export default Character
