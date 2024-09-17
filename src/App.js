// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import About from './components/About';
import Textfield from './components/Textfield';
import Alert from './components/Alert';
import React, { useState } from 'react'
import { Router, Routes, Route } from 'react-router-dom';

import { createRoot } from "react-dom/client";
import {
  Switch,
  createBrowserRouter,
  RouterProvider,
  Link,
} from "react-router-dom";

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
    <Navbar title="Textutils" about="About" mode={mode} Toggle={toggle} greenb={greenhandle} redb={redhandle} lightb={lighthandle} darkb={darkhandle}/>
    <Alert alert={alert} />
    <Routes>  {/* Define Routes */}
      <Route path="/" element={<Textfield mode={mode} />} />  {/* Home Page */}
      <Route path="about" element={<About  mode={mode}/>} />  {/* About Page */}
    </Routes>
  </>
);
}



export default App;
