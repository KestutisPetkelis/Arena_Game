import React from 'react';
import {useDispatch, useSelector} from "react-redux";

const ArenaPlayer = ({userHP, userEnergy, drink}) => {
    const divStyle = {
        width: "90%",
        minWidth: "700px",
        height: "95%",
        minHeight: "400px",
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

    



  return (
    <div style={divStyle} className='d-flex ali-center just-center flex1'>

        <div  className='character2 flex1'>
            <h3>{player.race}</h3>
            <div className='d-flex just-around'>
                <img className='arenaImg' src={player.image} alt=''/>
                <div> 
                    <p><b>Basic stats: </b></p>
                    <p> Damage: <b>{player.damage}</b></p>
                    <p> Health: <b>{player.health}</b></p>
                    <p> Energy: <b>{player.energy}</b></p>
                    <p> Stamina: <b>{player.stamina}</b></p>
                    <p> Strength: <b>{player.strength}</b></p>
                    <p> Inventory slots: <b>{player.inventorySlots}</b></p>  
                    
                </div>
                </div>
            <br></br>
            <h4>Equiped with: </h4>
            <div className='d-flex'>
                <div className='arenaSlotWeapon'>
                    <img src={gun && gun.image} alt='Slot for weapon'/>
                </div>
                <div className='advancersContainer'> 
                    {!!gun && 
                        <div className='font12 d-flex  m-2'> 
                            <div>
                                <p><b>Advansers from weapon: </b></p>
                                <p>Energy per hit: {gun.energyPerHit}</p>
                                <p>Max damage: {gun.maxDamage}</p> 
                            </div>
                            <div className='d-flex ali-center f-wrap'>
                                {gun.effects.length===0 &&
                                    <div> <p><i><b>No addition effects</b></i></p></div>
                                }
                                {gun.effects.length>0 &&
                                    gun.effects.map(x => x=effects[x]).map((x, index) =>
                                        <div className='m-2' key={index}>
                                            <p>{x.title}</p>
                                        </div>
                                    )
                                }
                            </div>
                        </div>
                    }
                    
                </div>
            </div>
            <div className='d-flex'>
                <div className='slider'>
                    <div className='innersliderHP' style={{width: `${userHP/player.health*400}px` }}></div>    
                </div> <span>HP : <b>{userHP}</b></span>
            </div>
            <div className='d-flex'>
                <div className='slider'>
                    <div className='innersliderEnergy' style={{width: `${userHP/player.health*400}px` }}></div></div><span>Energy: <b>{userEnergy}</b></span>
            </div>
            <h4>Slots: </h4>
            <div className='d-flex f-wrap'> 
                {slots.map((x,i)=>
                <div key={i} className='arenaSlot '>
                    <img src={x.image} alt="Empty slot"/>
                    {x.effect && 
                        <div>
                            <p>{x.title}</p>
                            <button onClick={()=>drink(x.effect,i)}>Drink</button>
                        </div>
                    }
                    
                </div>
                )}
            </div>
        </div>
           
    </div>
    );
};

export default ArenaPlayer;
