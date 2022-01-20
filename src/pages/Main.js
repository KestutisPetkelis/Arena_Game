import React from 'react'
import Header from '../components/Header'
import Character from '../components/Character'
import Inventory from '../components/Inventory'

const Main = () => {
    return (
        <div>
            
            <Header/>
            <div className='d-flex'>
                <Character />
                <Inventory />

            </div>
        </div>
    )
}

export default Main
