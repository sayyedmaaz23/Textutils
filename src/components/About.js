import React  from 'react'
import { useState } from "react"

export default function About() {
    const [mode, setmode]=useState({
        color: "white",
        backgroundColor: "black"
    });
    const [text, settext]=useState('Enable Dark Mode');

    const togglemode=()=>{
        if(mode.color==="black"){
            setmode({color:"white",
            backgroundColor:"black"})
            settext("Enable Light mode")
        }else{
            setmode({color:"black",
                backgroundColor:"white"})
            settext("Enable Dark mode")
        }
    }
  return (
    <div className='container' style={mode}>
        <h1>About us</h1>
      <div className="accordion" id="accordionExample" style={mode}>
  <div className="accordion-item" style={mode}>
    <h2 className="accordion-header">
      <button className="accordion-button" style={mode} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        Accordion Item #1
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample" >
      <div className="accordion-body" style={mode}>
        <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  <div className="accordion-item" style={mode}>
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" style={mode} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        Accordion Item #2
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" style={mode} data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  <div className="accordion-item" style={mode}>
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" style={mode} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        Accordion Item #3
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" style={mode} data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  <button className='btn btn-primary my-3' onClick={togglemode}>{text}</button>
</div>
    </div>
  )
}
