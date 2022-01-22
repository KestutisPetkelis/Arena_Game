import React from 'react';


const Drop = ({drop, enemy, getItem}) => {
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

    console.log(" Dropas komponente", drop)
    
  return (
    <div style={divStyle}>
        <h3 className='mh-50'>You WON!!!</h3>
        <h4>Some cookies from opponent? <br></br>
             {enemy.name} max drop items {enemy.maxItemsDrop}
        </h4>
        {drop.length===0 && <h4>No any drop is laying on the ground :)</h4>}
        {drop.length>0 &&
            <div className='d-flex f-wrap'> 
               { drop.map((x,index)=>
                    <div onClick={()=>getItem(index)} className="arenaSlot pointer" key={index}>
                        <img src={x.image} alt=''/>
                        <p>Price: <b>{x.price}</b></p>
                    </div>
                )}
            </div>
        } 
            
    </div>
    );
};

export default Drop;
