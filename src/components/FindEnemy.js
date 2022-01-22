import React from 'react';

const FindEnemy = ({findEnemy}) => {
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
    <div style={divStyle} className='d-flex ali-center just-center'>
        <button onClick={findEnemy}>Find Enemy</button>
    </div>
    );
};

export default FindEnemy;
