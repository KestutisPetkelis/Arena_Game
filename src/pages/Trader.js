import React from 'react'
import Header2 from '../components/Header2'
import Shop from '../components/Shop'
import Inventory2 from '../components/Inventory2'

const Trader = () => {
    return (
        <div>
            <Header2/>
            Trader
            <div className='d-flex'>
                <Shop/>
                <Inventory2 />

            </div>
        </div>
    )
}

export default Trader
