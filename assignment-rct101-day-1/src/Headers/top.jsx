import React from 'react'
import "../Css/navbar.css"

import Fashionable from '../Asset/Fashionable'
import SearchBox from '../Asset/search'




const header = () => {
  return (
<div className="navbar">
  <div className="childdiv">
    
      <Fashionable/>
      <div>
    
     <SearchBox/>
      </div>
     
      <button>Signup</button>
      <button>Login</button>
      <button>Cart</button>

   
  </div>
</div>
  )
}

export default header
