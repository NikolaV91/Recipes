import React from 'react'
import './header.css'


  const Header = (props)=> { 
    return ( 
      <div className="header">
        <div className='imgPdiv'>
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Leaf_icon_15.svg/1003px-Leaf_icon_15.svg.png" alt="logo" />
        <p>Dzonis Food</p>
        </div>
        <button className='headButton' onClick={()=>props.setModalToOpen(true)}>Dodaj novi recept</button>
      </div>
     );
  }
 
export default Header;

