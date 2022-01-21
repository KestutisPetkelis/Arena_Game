import React from 'react';

//  REDUX elements //
import {useSelector} from "react-redux";
import { useDispatch } from 'react-redux';
import {getItemtoSlot} from '../features/playerinventory'
import { changeMoney } from '../features/player';

function Potions({trader}) {

    const divStyle = {
        width: "90%",
        minHeight: "450px",
        maxHeight: "450px",
        borderRadius: "10px",
        border: "1px solid blue",
        margin: "10px",
        backgroundColor: "aliceblue",
        padding: "10px",
        overflowY: "scroll"
    };

    const dispatch = useDispatch()
    const slots = useSelector(state=>state.playerinventory.value)
    const money = useSelector(state=>state.player.value.gold)

    const potions  = trader.potions
    console.log(potions)
    const buy=(arg)=>{
        const item = potions.find((x,index)=>index===arg)  // perkamas daiktas
        if(money-item.price>=0){
        // cia patikrinimas ar yra tusciu slotu ir daikto idejimas jei yra
        const arr = slots.map((x, index) => (index === slots.findIndex(x => x === "")) ? item:x)
        dispatch(getItemtoSlot(arr))
        dispatch(changeMoney(money-item.price))
        }
        console.log("Buy", arg, item.img)
    }

  return (
  <div>
      <div style={divStyle} className='d-flex f-wrap'>
            {potions.map((x,i) =>
                <div key={i} className='itemCard'>
                    <img onClick={()=>buy(i)}src={x.image} alt="good drink" className='pointer'/>
                    <p>Title: {x.title}</p>
                    {x.effect.health && <p>Effect (health): {x.effect.health}</p>}
                    {x.effect.energy && <p>Effect (energy): {x.effect.energy}</p>}
                   
                    <p>Price: <b>{x.price}</b></p>

                </div>
          
          
            )}
        </div>
  </div>
  );
}

export default Potions;
