import React from 'react'
import {useSelector} from "react-redux";
import { useDispatch } from 'react-redux';
import {changeSlotPlaces, getItemtoSlot} from '../features/playerinventory'
import {updateWeapon} from '../features/weapon'



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
    const gun = useSelector(state=>state.weapon.value)
    const effects=useSelector(state=>state.effects.value)

    console.log(slots)
    

    const equip=(index)=>{
        // imam daikta pgl. indeksa, nes gali buti daug vienodu daiktu
        const item = slots.find((x,i)=>i===index)
        let arr=[]
        if (gun!==null){
            // imam daiktus pgl. indeksa, nes gali buti daug vienodu daiktu
            arr = [gun,...slots.filter((x,i)=>i!==index)]
        }else{
            arr = [...slots.filter((x,i)=>i!==index),""]
        }

        //  ****** apsidoroti papildomus slotus ********//

        const add = item.effects.find(x => x.includes("i"))
        let remove
        if(gun!==null){      // kai pradzioje nera ginklo
             remove = gun.effects.find(x => x.includes("i"))
            
             console.log("LLLLLLLL remove", remove)
        }
        if(remove===undefined) remove="i0" // jei nera papildomu slotu, tai tada priskiriam "i0"    
        let addSlots=0
        let removeSlots=0
        if (add!==undefined){
            addSlots = add.slice(1)
        }else{
            addSlots=0
        }
        if (remove!==undefined||remove!==null){
            console.log ("REMOVE", remove)
            removeSlots = remove.slice(1)
        }else{
            removeSlots=0
        }
          console.log("Add slots to inventory = ", addSlots)
          console.log("Remove slots from inventory = ", removeSlots)
        if( slots.filter(x=>x==="").length-removeSlots>=0){
            dispatch(getItemtoSlot(arr))
            dispatch(changeSlotPlaces(addSlots-removeSlots))
            dispatch(updateWeapon(item))
        }else{
            alert("You need freed additional slots first")
        }


        console.log("Equip", item)
    }
    console.log("SLOTS", slots)
    return (
        <div style={divStyle}>
           <h1>Inventory</h1>
           <div className='d-flex f-wrap'> 
                
                {slots.map((x,i)=>
                <div key={i} className='userSlot'>
                    <img  src={x.image} alt="Empty slot"/>
                    {x.maxDamage && <button onClick={()=>equip(i)}>Equipt </button>}
                    {x.effect && <p>{x.title}</p>}
                </div>
                )}
           </div> 
        </div>
    )
}

export default Inventory
