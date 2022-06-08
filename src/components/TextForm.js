import React, {useState} from 'react'

export default function TextForm(props) {
  const  handleUpClick= ()=>{

let newText= text.toUpperCase();
setText(newText);
props.showAlert("shift to uppercase","success")
  }
  const  handlelwClick= ()=>{

    let newText= text.toLowerCase();
    setText(newText);
      }
  const  handleonChange= (event)=>{
   
    setText(event.target.value); 
}
    const [text, setText] = useState('');
  return (
      <>
  <div className="container" style={{color: props.mode==='light'?'black':'white'}}>   
<div className="mb-3">
    <h1>{props.head}</h1>
  <label htmlFor="myBox" className="form-label">{props.heading}</label>
  <textarea className="form-control" style={{backgroundColor: props.mode==='dark'?'grey':'white', color:props.mode==='light'?'black':'white'}} value={text} onChange={handleonChange} id="myBox" rows="8"></textarea>
</div>
<button className="btn btn-primary mx-3 px-3 " onClick={handleUpClick}>Convert To UpperCase</button>
<button className="btn btn-primary m-x3 px-3" onClick={handlelwClick}>Convert To LowerCase</button>
<div className="container my-2">
    <h2>Your Text Summary</h2>
    <p>{text.split(" ").length} Words And {text.length} Charrecters</p>
    <p>{0.008 * text.split(" ").length} Minutes To Read</p>
    <h2>Preview</h2>
    <p>{text}</p>
</div>
</div>
      </>
  )
}
