// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Textfield from './components/Textfield';
import Alert from './components/Alert';
import React, { useState } from 'react'

function App() {
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
  /*
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
    */
const greenhandle=()=>{
  if(mode!=='green'){
  setmode('green')
  document.body.style.backgroundColor='#00563B'
  showalert("Theme was set to Green", "success");
  }
}
const redhandle=()=>{
  if(mode!=='red'){
  setmode('red')
  document.body.style.backgroundColor='#7C0A02'
  showalert("Theme was set to Red", "success");
  }
}
const lighthandle=()=>{
  if(mode!=='light'){
  setmode('light')
  document.body.style.backgroundColor='white'
  showalert("Light theme enabled", "success");
  }}
  const darkhandle=()=>{
  if(mode!=='dark'){
  setmode('dark')
  document.body.style.backgroundColor='#060644'
  showalert("Dark theme enabled", "success");
  // document.title='Textutils/home'                        To change the website title
  }
}
return (
  <>
    <Navbar title="Textutils" about="About" mode={mode} greenb={greenhandle} redb={redhandle} lightb={lighthandle} darkb={darkhandle}/>
    <Alert alert={alert} />
    <Textfield mode={mode} />
  </>
);
}



export default App;
