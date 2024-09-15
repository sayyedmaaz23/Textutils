import React from 'react'

function Alert(props) {

    const Capitalize = (word) => {
        let lower = word.toString().toLowerCase(); // Make sure to use toString() with parentheses
        let res = lower.charAt(0).toUpperCase() + lower.slice(1);
        return res;
    };
    


  return (
    props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
    {Capitalize(props.alert.type)} : {props.alert.message}
    <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
  </div>
  )
}

export default Alert
