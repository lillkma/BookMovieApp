import React from 'react';
import "./header.css";
import {Link} from 'react-router-dom'

const Header = function(props) {
 
      return (
        
         <div className="header">
           <img className="rotating"  src= "./assets/logo.svg"/>
           <div className = "loginLogout">
            <button variant="contained" color="default" name= {props.operation} >{props.operation}</button>
             
            </div>
           
         </div>
     )

  
}

export default Header;