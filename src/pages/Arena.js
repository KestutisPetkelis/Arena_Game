import React from 'react'
import { useState } from 'react'
import {useNavigate} from 'react-router-dom';

import ArenaFinal from '../components/ArenaFinal'
import ArenaPlayer from '../components/ArenaPlayer'
import FindEnemy from '../components/FindEnemy'
import Fight from '../components/Fight'
import Drop from '../components/Drop'
import Enemy from '../components/Enemy'

import {useSelector} from "react-redux";
import { useDispatch } from 'react-redux';
import {getItemtoSlot} from '../features/playerinventory'




const Arena = () => {

    const [showAction, setShowAction] = useState(1) // state action langu rodymui
    const [showEnemy, setShowEnemy] = useState(true) // state enemy/drop langu rodymui
    const [enemy, setEnemy]=useState() // state oponentu parinkimui

    const dispatch = useDispatch()
    const slots = useSelector(state=>state.playerinventory.value)
    const player = useSelector(state=>state.player.value)
    const gun = useSelector(state=>state.weapon.value)

    const [userHP,setUserHP]= useState(player.health)
    const [userEnergy, setUserEnergy] =useState(player.energy)
    const [enemyHP, setEnemyHP] = useState(0)

    const nav=useNavigate()
    
    const monsters = [
        {
            image: "https://static.wikia.nocookie.net/wowwiki/images/b/b1/Basilisk.png",
            name: "Basilisk",
            maxDamage: 5,
            health: 100,
            maxItemsDrop: 1
        },
        {
            image: "https://static.wikia.nocookie.net/wowwiki/images/7/75/VampireBat.png",
            name: "Bat",
            maxDamage: 8,
            health: 80,
            maxItemsDrop: 1
        },
        {
            image: "https://static.wikia.nocookie.net/wowwiki/images/a/a4/Bear.png",
            name: "Bear",
            maxDamage: 20,
            health: 150,
            maxItemsDrop: 3
        },
        {
            image: "https://static.wikia.nocookie.net/wowwiki/images/6/60/Beetle.png",
            name: "Beetle",
            maxDamage: 3,
            health: 300,
            maxItemsDrop: 1
        },
        {
            image: "https://static.wikia.nocookie.net/wowwiki/images/6/6f/Boar.png",
            name: "Boar",
            maxDamage: 7,
            health: 85,
            maxItemsDrop: 1
        },
        {
            image: "https://static.wikia.nocookie.net/wowwiki/images/0/01/Vulture.png",
            name: "Carrion bird",
            maxDamage: 6,
            health: 170,
            maxItemsDrop: 1
        },
        {
            image: "https://static.wikia.nocookie.net/wowwiki/images/3/36/Chimera.png",
            name: "Chimaera",
            maxDamage: 12,
            health: 190,
            maxItemsDrop: 2
        },
        {
            image: "https://static.wikia.nocookie.net/wowwiki/images/3/33/Clefthoof.png",
            name: "Clefthoof",
            maxDamage: 50,
            health: 500,
            maxItemsDrop: 4
        },
        {
            image: "https://static.wikia.nocookie.net/wowwiki/images/6/63/Crab.png",
            name: "Crab",
            maxDamage: 8,
            health: 120,
            maxItemsDrop: 3
        },
        {
            image: "https://static.wikia.nocookie.net/wowwiki/images/4/46/Crocolisk.png",
            name: "Crocolisk",
            maxDamage: 38,
            health: 420,
            maxItemsDrop: 3
        },
        {
            image: "https://static.wikia.nocookie.net/wowwiki/images/5/51/Devilsaur.png",
            name: "Devilsaur",
            maxDamage: 25,
            health: 250,
            maxItemsDrop: 3
        },
        {
            image: "https://static.wikia.nocookie.net/wowwiki/images/6/6c/Diemetradon.png",
            name: "Diemetradon",
            maxDamage: 12,
            health: 90,
            maxItemsDrop: 2
    
        },
        {
            image: "https://static.wikia.nocookie.net/wowwiki/images/3/34/Dragonhawk1.png",
            name: "Dragonhawk",
            maxDamage: 120,
            health: 20,
            maxItemsDrop: 5
        },
        {
            image: "https://static.wikia.nocookie.net/wowwiki/images/0/03/Elekk.png",
            name: "Elekk",
            maxDamage: 34,
            health: 160,
            maxItemsDrop: 4
    
        },
        {
            image: "https://static.wikia.nocookie.net/wowwiki/images/7/73/Fox.png",
            name: "Fox",
            maxDamage: 5,
            health: 50,
            maxItemsDrop: 2
    
        },
        {
            image: "https://static.wikia.nocookie.net/wowwiki/images/2/2f/Gryphon.png",
            name: "Gryphon",
            maxDamage: 18,
            health: 350,
            maxItemsDrop: 2
    
        },
        {
            image: "https://static.wikia.nocookie.net/wowwiki/images/8/84/Gorilla.png",
            name: "Gorilla",
            maxDamage: 30,
            health: 240,
            maxItemsDrop: 3
    
        },
        {
            image: "https://static.wikia.nocookie.net/wowwiki/images/c/c3/Horse.png",
            name: "Horse",
            maxDamage: 3,
            health: 150,
            maxItemsDrop: 1
    
        },
        {
            image: "https://static.wikia.nocookie.net/wowwiki/images/9/9d/Hydra.png",
            name: "Hydra",
            maxDamage: 40,
            health: 500,
            maxItemsDrop: 5
        },
        {
            image: "https://static.wikia.nocookie.net/wowwiki/images/e/ee/HyenaBlue.png",
            name: "Hyena",
            maxDamage: 9,
            health: 120,
            maxItemsDrop: 2
    
        },
        {
            image: "https://static.wikia.nocookie.net/wowwiki/images/e/e5/Cat_lion.png",
            name: "Lion",
            maxDamage: 13,
            health: 200,
            maxItemsDrop: 2
    
        },
        {
            image: "https://static.wikia.nocookie.net/wowwiki/images/b/b8/Lynx.png",
            name: "Lynx",
            maxDamage: 12,
            health: 150,
            maxItemsDrop: 1
    
        },
        {
            image: "https://static.wikia.nocookie.net/wowwiki/images/9/9c/Mastiff.png",
            name: "Mastiff",
            maxDamage: 7,
            health: 80,
            maxItemsDrop: 1
    
        },
        {
            image: "https://static.wikia.nocookie.net/wowwiki/images/2/27/Monkey.png",
            name: "Monkey",
            maxDamage: 4,
            health: 300,
            maxItemsDrop: 1
    
        },
        {
            image: "https://static.wikia.nocookie.net/wowwiki/images/0/08/Netherray.png",
            name: "Nether ray",
            maxDamage: 6,
            health: 120,
            maxItemsDrop: 1
    
        },
        {
            image: "https://static.wikia.nocookie.net/wowwiki/images/b/be/OwlWhite.png",
            name: "Owl",
            maxDamage: 7,
            health: 70,
            maxItemsDrop: 2
    
        },
        {
            image: "https://static.wikia.nocookie.net/wowwiki/images/3/36/Panther.png",
            name: "Panther",
            maxDamage: 19,
            health: 40,
            maxItemsDrop: 3
    
        },
        {
            image: "https://static.wikia.nocookie.net/wowwiki/images/1/16/Parrot.png",
            name: "Parrot",
            maxDamage: 2,
            health: 30,
            maxItemsDrop: 1
    
        },
        {
            image: "https://static.wikia.nocookie.net/wowwiki/images/6/66/Raven.png",
            name: "Raven",
            maxDamage: 8,
            health: 150,
            maxItemsDrop: 1
    
        },
        {
            image: "https://static.wikia.nocookie.net/wowwiki/images/c/c2/Rhino.png",
            name: "Rhinoceros",
            maxDamage: 120,
            health: 1500,
            maxItemsDrop: 8
        },
        {
            image: "https://static.wikia.nocookie.net/wowwiki/images/a/ab/Scorpion.png",
            name: "Scorpid",
            maxDamage: 25,
            health: 300,
            maxItemsDrop: 3
    
        },
        {
            image: "https://static.wikia.nocookie.net/wowwiki/images/1/1a/Sea_Snake.png",
            name: "Sea snake",
            maxDamage: 5,
            health: 50,
            maxItemsDrop: 1
    
        },
        {
            image: "https://static.wikia.nocookie.net/wowwiki/images/8/89/Serpent.png",
            name: "Serpent",
            maxDamage: 12,
            health: 80,
            maxItemsDrop: 1
    
        },
        {
            image: "https://static.wikia.nocookie.net/wowwiki/images/1/14/Shark.png",
            name: "Shark",
            maxDamage: 15,
            health: 210,
            maxItemsDrop: 2
    
        },
        {
            image: "https://static.wikia.nocookie.net/wowwiki/images/5/51/Sporebat.png",
            name: "Spore bat",
            maxDamage: 9,
            health: 150
        },
        {
            image: "https://static.wikia.nocookie.net/wowwiki/images/1/10/Stag.png",
            name: "Stag",
            maxDamage: 4,
            health: 200,
            maxItemsDrop: 2
    
        },
        {
            image: "https://static.wikia.nocookie.net/wowwiki/images/1/12/Strider.png",
            name: "Tallstrider",
            maxDamage: 20,
            health: 80
        },
        {
            image: "https://static.wikia.nocookie.net/wowwiki/images/3/3c/Threshadon.png",
            name: "Threshadon",
            maxDamage: 70,
            health: 800,
            maxItemsDrop: 3
    
        },
        {
            image: "https://static.wikia.nocookie.net/wowwiki/images/e/e9/Turtle.png",
            name: "Turtle",
            maxDamage: 5,
            health: 5000,
            maxItemsDrop: 10
        }
    ]

    function randomMaxMin(max, min){
        return Math.floor(Math.random() * (max - min + 1)) + min
    }

    const findEnemy = () =>{
        
        const a = monsters[randomMaxMin(monsters.length-1,0)]
        console.log("Find Enemy", a)
        setEnemy(a)
        setEnemyHP(a.health)
        setShowAction(2)
        setShowEnemy(true)
    }

    const attack = () =>{
        console.log("Attack!")
        let enemyhp=enemyHP-player.damage
        if (enemyhp <=0){
            enemyhp=0
            setShowAction(3)
            setShowEnemy(false)
        }
        setEnemyHP(enemyhp)

        let userhp=userHP-enemy.maxDamage
        if (userhp <=0){
            alert("You have been defeated...")
            nav("/")
        }


        setUserHP(userHP-enemy.maxDamage)

    }

    const drink=(arg,index)=>{
        let addHP = 0
        let addEnergy = 0
        if(Object.keys(arg)[0] = "health"){
            addHP=Object.values(arg)[0]
            console.log("HP",addHP)
            if(userHP + addHP>player.health){
                setUserHP(player.health)
            }else{
                setUserHP(userHP + addHP)
            }
            
        }
        if(Object.keys(arg)[0] = "energy"){
            addEnergy=Object.values(arg)[0]
            console.log("Energy",addEnergy)
            if(userEnergy + addEnergy>player.energy){
                setUserEnergy(player.energy)
            }else{
                setUserEnergy(userEnergy + addEnergy)
            }
        }
        // pasalinam buteliuka is inventoriaus
        // imam daiktus pgl. indeksa, nes gali buti daug vienodu daiktu
        const arr = [...slots.filter((x,i)=>i!==index),""]
        dispatch(getItemtoSlot(arr))
        
         console.log("Drink potion",arg)

    }




    return (
        <div>
             <h1>Arena</h1>
             <h3>Fight or die!</h3>
            <div className='d-flex just-around'>
                <div className='flex1'>
                    <ArenaPlayer userHP={userHP} userEnergy={userEnergy} drink={drink}/>
                </div>
                <div className='flex1'>
                    {showAction===1 &&<FindEnemy findEnemy={findEnemy}/>}
                    {showAction===2 &&<Fight attack={attack}/>}
                    {showAction===3 &&<ArenaFinal setShowAction={setShowAction}/>}
                </div>
                <div className='flex2'>
                    {showEnemy && <Enemy enemy={enemy} enemyHP={enemyHP}/>}
                    {!showEnemy && <Drop/>}
                </div>


            </div>

           
        </div>
    )
}

export default Arena
