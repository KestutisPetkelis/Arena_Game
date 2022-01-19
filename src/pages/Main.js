import React from 'react'
import Header from '../components/Header'
import Character from '../components/Character'
import Inventory from '../components/Inventory'

const Main = () => {
    return (
        <div>
            Main
            <Header/>
            <div className='d-flex'>
                <Character className="flex1"/>
                <Inventory className="flex2"/>

            </div>
        </div>
    )
}

export default Main
