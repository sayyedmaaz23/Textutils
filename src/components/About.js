import React  from 'react'
import { useState } from "react"

export default function About(props) {
  /*
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
    }*/

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
            else if(curmode==='dark'){
              text='text-bg-primary'
              arr[0]=text;
              text='btn btn-primary'
              arr[1]=text;
            }
            else {
              text=''
              arr[0]=text;
              text='btn btn-primary'
              arr[1]=text;
            }
          }
  return (
    <>
    {mode_ext(props.mode)}
    <div className={`container text-${props.mode==='light'? 'dark':'light'} my-5`}  >
        <h1>About us</h1>
      <div className="accordion" id="accordionExample" >
  <div className="accordion-item" >
    <h2 className="accordion-header">
      <button className={`accordion-button collapsed form-control ${arr[0]}`}  type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        Accordion Item #1
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample" >
      <div className="accordion-body" >
        <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  <div className="accordion-item" >
    <h2 className="accordion-header">
      <button className={`accordion-button collapsed form-control ${arr[0]}`}  type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        Accordion Item #2
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className={`accordion-button collapsed form-control ${arr[0]}`} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        Accordion Item #3
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  {/* <button className='btn btn-primary my-3' onClick={togglemode}>{text}</button> */}
</div>
    </div>
    </>
  )
}
