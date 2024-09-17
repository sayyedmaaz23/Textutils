import React from 'react'
import PropTypes from 'prop-types';


export default function Navbar(props) {

  const mode_ext=(curmode)=>
    {
      let text;
    if(curmode==='green'){
      text='text-bg-success'
    }
    else if(curmode==='red'){
      text='text-bg-danger'
    }
    else{
      text=''
    }
    return text;
  }
  return (
    <>
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode} ${mode_ext(props.mode)}`}>
    <div className="container-fluid">
      <a className="navbar-brand" href='#'>{props.title}</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href='#'>Home</a>
          </li>
        </ul>
        {/*
          <li><Link to="/">Home</Link></li>   
        <li><Link to="/about">About</Link></li>  
        <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-primary" type="submit">Search</button>
        </form>
        */}
<button type="button" className="btn btn-outline-success mx-2" onClick={props.greenb}>Green</button>
<button type="button" className="btn btn-outline-danger mx-2" onClick={props.redb}>Red</button>
<button type="button" className="btn btn-outline-light mx-2" onClick={props.lightb}>Light</button>
<button type="button" className="btn btn-outline-dark mx-2" onClick={props.darkb}>Dark</button>
{/*
      <div className={`form-check form-switch ${props.mode==='light'?' ':'text-light'} mx-4`}>
  <input className="form-check-input " type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.Toggle}/>
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{props.mode==='light'?'Switch to Dark Mode': 'Switch to Light Mode'}</label>
</div>
*/}
      </div>
    </div>
    </nav>
        </>
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