import React from "react";
import logo from '../images/logo.png'

import './Home.css'
import { Link } from "react-router-dom";
// import Dashboard from "./Dashboard";


export default function Home() {
 
 
  return(
   


    <>

 <div className="wrapper">
    <div className="sidebar">
         <Link to={'/'} > <img src={logo} alt="" style={{width:"190px"}} /></Link>
         <br />
        <ul>
           <Link to={'/dashboard'}> <li><a >Dashboard</a></li></Link>
         <Link to={'/addpro'}>   <li><a >Add Product</a></li> </Link>
       <Link to={'/service'}>     <li><a >Service</a></li></Link>
        <Link to={'/contact'}>    <li><a >Contact</a></li></Link>
        </ul> 
      
    </div>
    <div className="main_content">
        <div className="header">Welcome!! Have a nice day.</div>  
        <div className="info">
      </div>
    </div>
</div>




</>
   

  );
}