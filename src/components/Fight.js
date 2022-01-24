import React from 'react';

const Fight = ({attack, userDmg,enemyDmg}) => {
    const divStyle = {
        maxWidth: "350px",
        height: "95%",
        minHeight: "600px",
        borderRadius: "10px",
        border: "1px solid blue",
        margin: "10px",
        backgroundColor: "aliceblue",
        padding: "10px"
    };
  return (
      
    <div style={divStyle} className='d-flex column ali-around just-center'>
        <span className='mh-50'>You strike: <b><i>{userDmg}</i></b> </span>
        <button onClick={()=>attack()}><h3>Attack!</h3></button>
        <span className='mh-50'>Enemy strikes: <b><i>{enemyDmg}</i></b></span>
    </div>
    );
};

export default Fight;
