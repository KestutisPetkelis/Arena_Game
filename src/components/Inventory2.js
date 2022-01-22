import React from 'react'
import {useSelector} from "react-redux";
import { useDispatch } from 'react-redux';
import {getItemtoSlot} from '../features/playerinventory'
import { changeMoney } from '../features/player';

const Inventory2 = () => {
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
    const money = useSelector(state=>state.player.value.gold)

    const sell=(index)=>{
        let price=slots.find((x,i)=>i===index).price
        const item= slots.find((x,i)=>i===index)
        if(Object.keys(item).length===2){ 
            price +=price
        }
            
        // imam daiktus pgl. indeksa, nes gali buti daug vienodu daiktu
        const arr = [...slots.filter((x,i)=>i!==index),""]
        dispatch(getItemtoSlot(arr))
        dispatch(changeMoney(money+price/2))
        console.log("Sell",arr,price, item)
    }

    return (
        <div style={divStyle}>
           <h1>Inventory</h1>
           <div className='d-flex f-wrap'> 
                
                {slots.map((x,i)=>
                <div key={i} className='userSlot pointer'>
                    <img onClick={()=>sell(i)} src={x.image} alt="Empty slot"/>
                    {x.maxDamage && <p>Sell price: {x.price/2}</p>}
                    {x.effect && <p>Sell price: {x.price/2}</p>}
                    {(!(x.maxDamage || x.effect )&& x.price ) && <p>Sell price: {x.price}</p>}
                    {x.price && <p></p>}
                    
                </div>
                )}
           </div> 
        </div>
    )
}

export default Inventory2
