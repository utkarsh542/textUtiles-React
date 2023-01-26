import React, { useState } from "react";

export default function TextFrom(props) {
  const handleUpClick = () => {
    // console.log("Uppercase was clicked");
    let newText = text.toUpperCase();
    setText(newText);
    props.showAleart("Text is changed into CapitalCase","primary");
    document.title="UpperCase-Text"
  };
  const handleLowClick = () => {
    // console.log("Uppercase was clicked");
    let newText = text.toLowerCase();
    setText(newText);
    props.showAleart("Text is changed into LowerCase","primary");
    document.title="LowerCase-Text"
  };
  const handleClear = () => {
    // console.log("Uppercase was clicked");
    let newText = " ";
    setText(newText);
    props.showAleart("Text is Cleared","primary");
    document.title="Text-Cleared"
  };
  const handleOnChange = (event) => {
    // console.log("On change");
    setText(event.target.value);
  };
  const [text, setText] = useState("Enter Your Text");
  return (
    <>
      <form>
        <div
          className={`container my-3 text-${
            props.mode === "dark" ? "light" : "dark"}`}
        >
          <h1>{props.heading}</h1>
          <div className="form-group">
            <textarea
              className={`form-control text-${
                props.mode === "dark" ? "light" : "dark"
              }`}
              style={{
                backgroundColor: props.mode === "light" ? "white" : "rgb(86 73 2)",
              }}
              value={text}
              onChange={handleOnChange}
              id="mybox"
              rows="4"
            ></textarea>
          </div>
          <button
            type="button"
            className="btn btn-primary mx-2 my-2"
            onClick={handleUpClick}
          >
            ConvertToUpperCase
          </button>
          <button
            type="button"
            className="btn btn-primary mx-2 my-2"
            onClick={handleLowClick}
          >
            ConvertToLowerCase
          </button>
          <button
            type="button"
            className="btn btn-primary mx-2 my-2"
            onClick={handleClear}
          >
            Clear
          </button>
        </div>
        <div
          className={`container my-3  text-${
            props.mode === "dark" ? "light" : "dark"
          }`}
        >
          <h2>Your Text Summary </h2>
          <b>
            <p>
              Paragraph is:{text.split("\n").filter((element)=>{return element.length!==0}).length} Words is:
              {text.split(" ").filter((element)=>{return element.length!==0} ).length} and charachter is:{text.length}
            </p>
          </b>
          <b>
            <p>Reading Words per Minute:{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} </p>
          </b>
          <h2>Priview </h2>
          <p>
            {text.length > 0 ? text : "Enter Your Text Above Box to Priview"}
          </p>
        </div>
      </form>
    </>
  );
}
