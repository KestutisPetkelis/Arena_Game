import React from 'react';

const Enemy = ({enemy, enemyHP}) => {
    const divStyle = {
        width: "100%",
        height: "95%",
        minHeight: "600px",
        borderRadius: "10px",
        border: "1px solid blue",
        margin: "10px",
        backgroundColor: "aliceblue",
        padding: "10px"
    };
  return (
    <div style={divStyle} className='d-flex ali-center just-center flex1'>
        {!enemy &&  <div>
                        <h2>Place for opponent</h2>
                        <img className='coloseum' src='https://res.klook.com/images/fl_lossy.progressive,q_65/c_fill,w_1200,h_630/w_80,x_15,y_15,g_south_west,l_klook_water/activities/vgm3jn4xf6mmsanreyjc/Colosseum,%20Roman%20Forum%20and%20Palatine%20Hill%20Entrance%20Ticket%20in%20Rome.jpg' alt=''/>
                    </div>
        }
        {enemy && <div>
            <h3>{enemy.name}</h3>
            <img src={enemy.image} alt='Terrible enemy nust be here'/>
            <p>Max Damage: <b>{enemy.maxDamage}</b> </p>
            <p>Basic health: <b>{enemy.health}</b> </p>
            <div >
                <div className='slider2'>
                <div className='innersliderHP' style={{width: `${enemyHP/enemy.health*360}px` }}></div>   
                </div> 
                <span>HP :<b>{enemyHP}</b></span>
            </div>
            </div>
        }
    </div>
    );
};

export default Enemy;
