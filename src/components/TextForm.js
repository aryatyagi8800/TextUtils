import React, { useState } from 'react'


export default function TextForm(props) {
    const handleUpchange = () => {
        let newState = text.toUpperCase();
        setText(newState)
        props.showAlert("converted to upperCase","success");
    }
    const handleLochange = () => {
        let newState = text.toLowerCase();
        setText(newState)
        props.showAlert("converted to LowerCase","success");
    }
    const handleClrchange = () => {
        let newState = "";
        setText(newState)
        props.showAlert("Clear Text","success");
    }
    const handleINchange = () => {
        let newState = text.split("");
        let splittext = newState.reverse();
        let reverse = splittext.join("");
        setText(reverse)
        props.showAlert("Reversed Text","success");
    }
    const handleCopy=()=>{
        let text=document.getElementById("mybox")
        text.select();
        document.getSelection().removeAllRanges();
        navigator.clipboard.writeText(text.value)
        props.showAlert("Copied to Clipboard","success");
    }
    const handleExtraspaces=()=>{
        let newText=text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Removed all extra spaces","success");
    }
    const handleOnchange = (event) => {
        setText(event.target.value)
    }
    const [text, setText] = useState('enter text here');
    return (
        <>
            <div className='container'  style={{color:props.mode==='dark'?'grey':'dark'}}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleOnchange} id="mybox" style={{backgroundColor:props.mode==='dark'?'#111c2d':'white',color:props.mode==='dark'?'white':'black'}} rows="8"></textarea>
                </div>
                <button disabled={text.length===0} className="btn btn-primary m-1" onClick={handleUpchange}>Convert to UpperCase</button>
                <button disabled={text.length===0} className="btn btn-success m-1" onClick={handleLochange}>Convert to LowerCase</button>
                <button disabled={text.length===0} className="btn btn-danger m-1" onClick={handleClrchange}>Clear</button>
                <button disabled={text.length===0} className="btn btn-danger m-1" onClick={handleINchange}>Inverse Case</button>
                <button disabled={text.length===0} className="btn btn-success m-1" onClick={handleCopy}>Copy Text</button>
                <button disabled={text.length===0} className="btn btn-success m-1" onClick={handleExtraspaces}>Remove Extra Spaces</button>
            </div>
            <div className="container my-3" style={{color:props.mode==='dark'?'white':'black'}}>
                <h1>Your Text Summary Is</h1>
                <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
                <p>{0.008 * text.split(/\s+/).filter((element)=>{return element.length!==0}).length} Minutes Read</p>
                <h2>Preview</h2>
                <p>{text.length>0?text:"Nothing to preview!!"}</p>
            </div>
        </>

    )
}
