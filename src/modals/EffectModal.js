import React from 'react';

const EffectModal = ({modalInfo}) => {
    const divStyle = {
         width: "100px",
        // minHeight: "250px",
        // maxHeight: "250px",
        borderRadius: "10px",
        border: "1px solid blue",
        margin: "10px",
        backgroundColor: "aliceblue",
        padding: "10px",
        zIndex: "10",
        position: "relative",
        top: "-100px",
        left: "-10px"
    };
  return (
    <div style={divStyle}>
    
        {modalInfo.length===0 &&
            <div> <p>No addition effects</p></div>
        }
        {modalInfo.length>0 &&
            modalInfo.map((x, index) =>
            <div key={index}>
                <p>{x.title}</p>
             
            </div>
            )
        }
    
    </div>
    );
};

export default EffectModal;
