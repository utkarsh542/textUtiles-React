import React from "react";

function Aleart(props) {
  let capatalize= (words)=>{
    const lower =words.toLowerCase();
    return lower.charAt(0).toUpperCase()+lower.slice(1);
  }
  return (<div style={{height:"50px"}}>
    {props.alert && <div className={`alert alert-${props.alert.type}`} role="alert">
        <strong>{capatalize(props.alert.type)}:</strong> {props.alert.msg}
      </div>}
      </div>
  );
}

export default Aleart;
