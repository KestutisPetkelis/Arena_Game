import React from 'react';
import { useState } from 'react';
import {useSelector} from "react-redux";

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
    
    const [microIndex, setMicroIndex] = useState(null) // state modalo valdymui
    const [modalInfo, setModalinfo] = useState([])  // state info perdavimui i modala
    // console.log(effects)
    // console.log(weapons,weapons[0])

    const infoToModal=(arg)=>{
        const a = weapons.find(x=>x.image===arg)
        //console.log(a.effects)
        const b = a.effects
        const c = b.map(x => x=effects[x])
        console.log("b", b, c , "c")
        setModalinfo(c)     // galima optimizuoti koda bet kol kas man taip akivaizdziau
    }


    const buy=()=>{
        
        console.log("Buy")
    }

  return (
  <div>
     
        <div style={divStyle} className='d-flex f-wrap'>
            {weapons.map((x,index) =>
                <div key={index} className='itemCard'>
                    <img onClick={()=>buy()} src={x.image} alt="good weapon" className='pointer'/>
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
