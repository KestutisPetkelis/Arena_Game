import React from 'react'
import Header2 from '../components/Header2'
import Shop from '../components/Shop'
import Inventory from '../components/Inventory'

const Trader = () => {
    return (
        <div>
            <Header2/>
            Trader
            <div className='d-flex'>
                <Shop/>
                <Inventory />

            </div>
        </div>
    )
}

export default Trader
