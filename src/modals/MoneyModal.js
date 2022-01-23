import React from 'react';

const MoneyModal = ({setNoMoneyModal}) => {
    const divStyle = {
        width: "300px",
       height: "160px",
       // maxHeight: "250px",
       borderRadius: "10px",
       border: "2px solid brown",
       margin: "10px",
       backgroundColor: "aliceblue",
       padding: "10px 20px",
       zIndex: "10",
       position: "absolute",
       top: "40%",
       left: "40%"
   };



  return (
    <div style={divStyle}>
        <div className='d-flex just-end'>
            <div onClick={()=>setNoMoneyModal(false)} className='pointer'>x</div>
        </div>
        <h1> Not enought money to by this</h1>
    </div>
  );
};

export default MoneyModal;
