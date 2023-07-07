import React, { useCallback } from 'react'
import { useState } from 'react'
import PropTypes from 'prop-types'

export default function Textarea(props) {
    const [text, settext] = useState("")
    const updating = (e) => {
        settext(e.target.value);
  
    }
    const convertUpperCase = () => {
        settext(text.toUpperCase())
        props.func("sucess","converted to Upper case")
    }
    const covertLowerCase = () => {
        settext(text.toLowerCase());
        props.func("sucess","converted to Lower case")
    }
    const convertFirstChar = () => {

        let bag = "";
        bag += text[0].toUpperCase();
        for (let i = 1; i < text.length-1; i++) {
            if (text[i] != ".") {
                bag += text[i];
            } else {
                bag += text[i];
                if (text[i + 1] != " ") {
                    bag += text[i + 1].toUpperCase();
                    i++;
                }
            }
        }
        settext(bag);
    }
    function reset() {
        settext("")
        document.getElementById("textArea").value = "";
        props.func("warning","reseted")
    }
    return (
        <>
            <div className={`form-floating container my-4  `}>
                <h3>Enter your text</h3>
                <textarea className={`form-control 
                ${props.Mode ? "bg-body-secondary" : ""} `} id="textArea" style={{ height: "200px" }} onChange={updating}></textarea>
                <button className={`btn ${props.Mode ? "btn-dark" : "btn-primary"} m-2`} onClick={convertUpperCase}>UpperCase</button>
                <button className={`btn ${props.Mode ? "btn-dark" : "btn-primary"} m-2`} onClick={covertLowerCase}>LowerCase</button>
                <button className={`btn ${props.Mode ? "btn-dark" : "btn-primary"} m-2`} onClick={convertFirstChar}>1st Char capitalized Sentence</button>
                <button className={`btn ${props.Mode ? "btn-dark" : "btn-primary"} m-2`} onClick={reset}>Reset</button>
            </div>
            <div className="container">
                <h6><span className='me-3'>No of words : {text.split(" ").length} </span> <span className='mx-3'>No of characters  : {text.length} </span> </h6>
            </div>
            <div className="container my-3">
                <h5>Result</h5>
                <p className={`p-3 mb-2  ${props.Mode ? "bg-body-secondary text-black " : "bg-light"} `}> {text}</p>
            </div>
        </>
    )
}
