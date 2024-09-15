import React from 'react'
import PropTypes from 'prop-types';


export default function Navbar(props) {
  const toggletheme=()=>{
    
  }

  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
    <div className="container-fluid">
      <a className="navbar-brand" href="#">{props.title}</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">{props.about}</a>
          </li>
        </ul>
        {/*
        <form className="d-flex" role="search">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
          <button className="btn btn-outline-primary" type="submit">Search</button>
        </form>
*/}
{/*
<div className="form-check form-check-inline">
  <input className="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1" onClick={props.Redhandle}/>
  <label className="form-check-label" for="inlineCheckbox1">Red</label>
</div>
<div className="form-check form-check-inline">
  <input className="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2" onClick={props.Greenhandle}/>
  <label className="form-check-label" for="inlineCheckbox2">Green</label>
</div>
<div className="form-check form-check-inline">
  <input className="form-check-input" type="checkbox" id="inlineCheckbox3" value="option3" onClick={props.Violethandle}/>
  <label className="form-check-label" for="inlineCheckbox3">Violet</label>
</div>*/}
<div className="form-check mx-2">
  <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" onChange={props.Toggle}/>
  <label className="form-check-label" htmlFor="flexRadioDefault1">
    Red
  </label>  
</div>
<div className="form-check mx-2" >
  <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" onChange={props.Toggle}/>
  <label className="form-check-label" htmlFor="flexRadioDefault2">
    Green
  </label>  
</div>
<div className="form-check mx-2">
  <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault3" onChange={props.Toggle}/>
  <label className="form-check-label" htmlFor="flexRadioDefault3">
    Violet
  </label>
</div>
<div className="form-check mx-2">
  <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault3" value="Light" onChange={props.Toggle} checked/>
  <label className="form-check-label" htmlFor="flexRadioDefault3">
    Light
  </label>
</div>
<div className="form-check mx-2">
  <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault4" onChange={props.Toggle}/>
  <label className="form-check-label" htmlFor="flexRadioDefault4">
    Dark 
  </label>
</div>

      <div className={`form-check form-switch ${props.mode==='light'?' ':'text-light'} mx-4`}>
  <input className="form-check-input " type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.Toggle}/>
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{props.mode==='light'?'Switch to Dark Mode': 'Switch to Light Mode'}</label>
</div>

      </div>
    </div>
    </nav>
  )
}

 Navbar.propTypes={
    title:PropTypes.string,
    about:PropTypes.string
}
Navbar.defaultProps={
    title: 'Titlee',
    about: 'dfsjkhfdsdfhjkldfjkvhdfhijkudf '
}