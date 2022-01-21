import React from 'react';
import { useState } from 'react';

//  REDUX elements //
import {useSelector} from "react-redux";
import { useDispatch } from 'react-redux';
import {getItemtoSlot} from '../features/playerinventory'
import { changeMoney } from '../features/player';

import EffectModal from '../modals/EffectModal';


const Weapons = ({trader}) => {
    const divStyle = {
        width: "90%",
        minHeight: "450px",
        maxHeight: "450px",
        borderRadius: "10px",
        border: "1px solid blue",
        margin: "10px",
        backgroundColor: "aliceblue",
        padding: "10px",
        // paddingBottom: "30px",
        overflowY: "scroll"
    };

    const effects=useSelector(state=>state.effects.value) 
    const weapons  = trader.weapons
    const slots = useSelector(state=>state.playerinventory.value)
    const money = useSelector(state=>state.player.value.gold)

    const dispatch = useDispatch()

    const [microIndex, setMicroIndex] = useState(null) // state modalo valdymui
    const [modalInfo, setModalinfo] = useState([])  // state info perdavimui i modala
    

    const infoToModal=(arg)=>{
        const a = weapons.find(x=>x.image===arg)
        //console.log(a.effects)
        const b = a.effects
        const c = b.map(x => x=effects[x])
        console.log("b", b, c , "c")
        setModalinfo(c)     // galima optimizuoti koda bet kol kas man taip akivaizdziau
    }


    const buy=(arg)=>{
        
        const item = weapons.find(x=>x.image===arg) // perkamas itemas
        if(money-item.price>=0){
            // cia patikrinimas ar yra tusciu slotu ir daikto idejimas jei yra
            const arr = slots.map((x, index) => (index === slots.findIndex(x => x === "")) ? item:x)
            dispatch(getItemtoSlot(arr))
            dispatch(changeMoney(money-item.price))
        }
        console.log(money, item.price)
    }

  return (
  <div>
     
        <div style={divStyle} className='d-flex f-wrap'>
            {weapons.map((x,index) =>
                <div key={index} className='itemCard'>
                    <img onClick={()=>buy(x.image)} src={x.image} alt="good weapon" className='pointer'/>
                    <div onMouseOver={()=>{setMicroIndex(index); infoToModal(x.image)}} onMouseOut={()=>setMicroIndex(null)}>
                        <p>Energy per hit: {x.energyPerHit}</p>
                        <p>Max damage: {x.maxDamage}</p>
                        <p>Effects: {x.effects.length}</p>
                        <p>Price: <b>{x.price}</b></p>
                    </div>
                    {microIndex === index ? <EffectModal modalInfo={modalInfo}/> : null}
                </div>
          
          
            )}
        </div>
  </div>
  
  );
};

export default Weapons;
