import React from 'react'
import {useSelector} from "react-redux";
import { useDispatch } from 'react-redux';
import {getItemtoSlot} from '../features/playerinventory'


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
    
    const dispatch = useDispatch()
    const slots = useSelector(state=>state.playerinventory.value)
    console.log(slots)
  

    const sell=(index)=>{
        // imam daiktus pgl. indeksa, nes gali buti daug vienodu daiktu
        const arr = [...slots.filter((x,i)=>i!==index),""]
        dispatch(getItemtoSlot(arr))

        console.log("Sell",arr)
    }

    return (
        <div style={divStyle}>
           <h1>Inventory</h1>
           <div className='d-flex f-wrap'> 
                
                {slots.map((x,i)=>
                <div key={i} className='userSlot pointer'>
                    <img onClick={()=>sell(i)} src={x.image} alt="Empty slot"/>
                    {x.maxDamage && <button>Equip </button>}
                    
                </div>
                )}
           </div> 
        </div>
    )
}

export default Inventory
