import React from 'react'
import {useSelector} from "react-redux";
import { useDispatch } from 'react-redux';
import {changeSlotPlaces, getItemtoSlot} from '../features/playerinventory'
import {updateWeapon} from '../features/weapon'
import { updateAdvancers } from '../features/advancer';



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

        // ************************************//

        console.log("Equip", item)
    }

    // ******* DEDAM ADVANCERIUS ANT GINKLU ************//
    const addAdvancer=(index)=>{
        const item = slots.find((x,i)=>i===index)
        let advancWeapon ={
            damage: 0,
            strength: 0,
            stamina: 0,
            health: 0,
            energy: 0,
        }
            // *** strength ****//
            let stre= item.effects.find(x => x.includes("s")&&!x.includes("st"))
            if(stre===undefined) stre="s0" // jei nera papildomo "strength", tai tada priskiriam "s0"  
            stre=Number(stre.slice(1))
            
            // *** damage ***** //
            let dmg= item.effects.find(x => x.includes("d"))
            if(dmg===undefined) dmg="d0"
            dmg=Number(dmg.slice(1))

            // *** stamina **** //
            let stm= item.effects.find(x => x.includes("sta"))
            if(stm===undefined) stm="sta0"
            stm=Number(stm.slice(3))

            // *** health **** //
            let hlth= item.effects.find(x => x.includes("h"))
            if(hlth===undefined) hlth="h0"
            hlth=Number(hlth.slice(1))*10

            // *** energy **** //
            let enrg= item.effects.find(x => x.includes("e"))
            if(enrg===undefined) enrg="e0"
            enrg=Number(enrg.slice(1))*10

            console.log("STRENGTH", stre)
            console.log("DAMAGE", dmg)
            console.log("STAMINA", stm)
            console.log("HEALTH", hlth)
            console.log("ENERGY", enrg)
        
            advancWeapon ={
                damage: dmg,
                strength: stre,
                stamina: stm,
                health: hlth,
                energy: enrg,
            }
            dispatch(updateAdvancers(advancWeapon))

        console.log("advanc", item, advancWeapon)
    }












    console.log("SLOTS", slots)
    return (
        <div style={divStyle}>
           <h1>Inventory</h1>
           <div className='d-flex f-wrap'> 
                
                {slots.map((x,i)=>
                <div key={i} className='userSlot'>
                    <img  src={x.image} alt="Empty slot"/>
                    {x.maxDamage && <button onClick={()=>{equip(i); addAdvancer(i)}}>Equipt </button>}
                    {x.effect && <p>{x.title}</p>}
                </div>
                )}
           </div> 
        </div>
    )
}

export default Inventory
