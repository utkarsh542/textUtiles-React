import React from "react";

function Aleart(props) {
  let capatalize= (words)=>{
    const lower =words.toLowerCase();
    return lower.charAt(0).toUpperCase()+lower.slice(1);
  }
  return (
    props.alert && <div className={`alert alert-${props.alert.type}`} role="alert">
        <strong>{capatalize(props.alert.type)}:</strong> {props.alert.msg}
      </div>
  );
}

export default Aleart;
