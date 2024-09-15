// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Textfield from './components/Textfield';
import Alert from './components/Alert';
import React, { useState } from 'react'

function App() {
  const [green, setgreen]=useState("light")
  const [red, setred]=useState("light")
  const [violet, setviolet]=useState("light")
  const [mode, setmode]=useState("light");
  const [alert, setAlert]=useState(null);

  const showalert=(message, type)=>{
    setAlert({
      message:message,
      type:type
    })

    setTimeout(()=>{
      setAlert(null)
    }, 1500)
  }
  const toggle=()=>{
    if (mode!='dark'){
      setmode('dark')
      document.body.style.backgroundColor="#060644"
      showalert("Dark mode has been enabled", "success");
    }else if (mode != 'light'){
      setmode('light')
      document.body.style.backgroundColor="white"
      showalert("White mode has been enabled", "success");
    }
  }

  return (
    <>
    <Navbar  title="Textutils" about="About" mode={`${mode}`} Toggle={toggle}/>
    <Alert  alert={alert}/>
    <Textfield mode={`${mode}`}/> 
    {/* <About/> */}
    </>
  );
}



export default App;
// if option==red { set mode=red}
