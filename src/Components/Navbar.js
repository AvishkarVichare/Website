import React from 'react'
import '../css/nav.css'
import {Link} from "react-router-dom";

const Navbar = () => {
  return (
      <>
    <header>
        <div>
            <img src="https://images.bhaskarassets.com/thumb/1800x1800/web2images/5483/2017/05/12/shivaji-maharaj-rajmudra_.jpg" alt="" />
        </div>
        <h1>
        शिवप्रेरणा मित्रमंडळ 
            {/* Shivjayanti Khopoli Katrang */}
        </h1>       
    </header>
    <nav>
        
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/gallery">Gallery</Link></li>
            <li><Link to="/invitation">Invitation</Link></li>
            {/* <li><Link to="">Sponsors</Link></li> */}
        
    </nav>
    </>

  )
}

export default Navbar
