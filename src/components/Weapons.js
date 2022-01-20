import React from 'react';

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
        overflowY: "scroll"
    };

    const weapons  = trader.weapons
    console.log(weapons,weapons[0])


  return (
  <div>
     
      <div style={divStyle} className='d-flex f-wrap'>
            {weapons.map((x,i) =>
                <div key={i} className='itemCard'>
                    <img src={x.image} alt="good weapon" />
                    <p>Energy per hit: {x.energyPerHit}</p>
                    <p>Max damage: {x.maxDamage}</p>
                    <p>Effects: {x.effects.length}</p>
                    <p>Price: <b>{x.price}</b></p>

                </div>
          
          
            )}
        </div>
  </div>
  
  );
};

export default Weapons;
