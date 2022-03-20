import React from 'react'
import '../css/nav.css'
import {Link} from "react-router-dom";

const Navbar = () => {
  return (
      <>

    <header>
      <div className='left'>|| जय भवानी || </div>
      <div className='right'>|| जय शिवाजी ||</div>
      <div className='mainBox'>

        <div>
            <img src="https://images.bhaskarassets.com/thumb/1800x1800/web2images/5483/2017/05/12/shivaji-maharaj-rajmudra_.jpg" alt="" />
        </div>
        <h1>
        न्यू शिव प्रेरणा मित्र मंडळ 
            {/* Shivjayanti Khopoli Katrang */}
            
        </h1>  
      </div>
      <h6>
      वर्ष ३३ वे 
      </h6>
      <h6>
      वैभव परिसर, काटरंग रोड, ता. खालापूर , जि. रायगड 
      </h6>

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
