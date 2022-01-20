import React from 'react';

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

    const potions  = trader.potions
    console.log(potions, potions[0])


  return (
  <div>
      <div style={divStyle} className='d-flex f-wrap'>
            {potions.map((x,i) =>
                <div key={i} className='itemCard'>
                    <img src={x.image} alt="good drink" />
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
