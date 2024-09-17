import { useState } from "react"
import React from 'react'



export default function Textfield(props) {
    const [text, setText]=useState("");
    const [res, setres]=useState(text);
    let arr=[];
    const mode_ext=(curmode)=>
        {
          let text;
        if(curmode==='green'){
            text='text-bg-success'
            arr[0]=text;
            text='btn btn-success'
            arr[1]=text;  
        }
        else if(curmode==='red'){
            text='text-bg-danger '
            arr[0]=text;
            text='btn btn-danger'
            arr[1]=text;  
        }
        else{
          text=''
          arr[0]=text;
          text='btn btn-primary'
          arr[1]=text;
        }
      }
    const handleUpClick=()=>{
        let intext=text.toUpperCase();
        setres(intext);
    }
    const handleLowClick=()=>{
        let intext=text.toLowerCase();
        setres(intext);
    }
    const handleExtemClick=()=>{
        let result=[];
        for (const i of text.split(" ")) {
            if(i.includes("@")){
                result.push(i);
            }
        }
        setres(result);
    }
    const handleExtuClick=()=>{
        let result=[];
        for (const i of text.split(" ")) {
            if(i.includes(".com")){
                result.push(i);
            }
        }
        setres(result);
    }
    
    const handleclear=()=>{
        setText('');
    }

    const handleonChange = (event) =>{
        setText(event.target.value);
    }

    const wordcount = (text)=>{
        let words=text.split(" ");
        let count=words.length;
        if(words[words.length-1]===""){
            count = words.length-1;
        }
        return count;
    }
  return (
      <>
      {mode_ext(props.mode)}
    <div className={`container text-${props.mode==='light'? 'dark':'light'} my-5 `}>
      <h1>Enter your Text Below</h1>  
      <div className="mb-3" >
  <textarea className={`form-control ${arr[0]}`} value={text} aria-label="With textarea" id="myBox" rows="8" onChange={handleonChange}></textarea>
</div>
    <button className={`${arr[1]} mx-2`} onClick={handleUpClick}> Uppercase </button>
    <button className={`${arr[1]} mx-2`} onClick={handleLowClick}> Lowercase </button>
    <button className={`${arr[1]} mx-2`} onClick={handleclear}> Clear </button>
    <button className={`${arr[1]} mx-2`} onClick={handleExtemClick}> Extract Email </button>
    <button className={`${arr[1]} mx-2`} onClick={handleExtuClick}> Extract URLs </button>
    </div>
    
    <div className={`container my-2 text-${props.mode==='light'? 'dark':'light'}`}>
        <h1>Summary</h1>
        <p>Total words {wordcount(text)} and total characters {text.length}</p>
        <p>Estimated reading time {0.008*text.split(" ").length} minutes</p>
        <h2 className="my-3">Preview</h2>
        <p>{res}</p>   
    </div>
    </>
  )
}
