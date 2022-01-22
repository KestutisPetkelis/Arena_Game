import React from 'react'
import {useDispatch, useSelector} from "react-redux";

import {changeSlotPlaces,getItemtoSlot} from '../features/playerinventory'
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
       
        //    ***** papildomi slotai ********//
        let remove
        if(gun!==null){      // kai pradzioje nera ginklo
             remove = gun.effects.find(x => x.includes("i"))
            
             console.log("AAAAAAAAAAAA remove", remove)
        }
        if(remove===undefined) remove="i0" // jei nera papildomu slotu, tai tada priskiriam "i0"    
        let removeSlots=0
        if (remove!==undefined||remove!==null){
            console.log ("REMOVE", remove)
            removeSlots = remove.slice(1)
        }else{
            removeSlots=0
        }
        console.log("Remove slots from inventory = ", removeSlots)
        if( slots.filter(x=>x==="").length-removeSlots>0){

            dispatch(getItemtoSlot(arr))
            dispatch(changeSlotPlaces(0-removeSlots))
            dispatch(disarmWeapon())

        }else{
            alert("You need freed additional slots and place for weapon first")
        }

       

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
