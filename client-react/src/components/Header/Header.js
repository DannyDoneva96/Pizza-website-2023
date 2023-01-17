import { useState } from 'react'
import { Link } from 'react-router-dom'
import  {UserAuth}  from '../../Context/Auth/authContext';

import logo from "../../images/logo-nav-new.png"
import "./Header.css"

export const Header = (props) => {

  const [openLinks, setOpenLinks] = useState(false)
  const { user } = UserAuth();

  const toggleNav = () => {
    setOpenLinks(!openLinks)
  }
  return (


    <header className="header">
      <div className="navbar">
        <div >
          <img className="logo-nav" src={logo} />
        </div>
        {/*NOT AUTH*/}
        {!user
          ?
          <ul className="nav-links big" >
            <li>< Link to="/" > Home </Link></li>
            <li ><Link to="/menu" > Menu </Link></li>
            <li ><Link to="/about" > About</Link> </li>
            <li ><Link to="/contact"> Contact </Link></li>
            <li>< Link to="/login"> Login </Link></li>
            <li>< Link to="/register"> Register</Link> </li>
            <li  ><i className="fa-solid fa-cart-plus" /></li>

          </ul>
          :
          <ul className="nav-links big" >
            <li ><Link to="/"> Home </Link> </li>
            <li>< Link to="/menu"> Menu </Link></li>
            <li ><Link to="/about"> About</Link> </li>
            <li ><Link to="/contact"> Contact </Link></li>
            <li >< Link to="/messages"> Messages </Link></li>
            <li ><Link to="/logout"> Logout </Link> </li>
            <li><i className="fa-solid fa-cart-plus" /></li>
          </ul>}
      </div>
      <ul className="nav-links hidden" id={openLinks?'open':'close'}>
            <li ><Link to="/"> Home </Link> </li>
            <li>< Link to="/menu"> Menu </Link></li>
            <li ><Link to="/about"> About</Link> </li>
            <li ><Link to="/contact"> Contact </Link></li>
            <li >< Link to="/messages"> Messages </Link></li>
            <li ><Link to="/logout"> Logout </Link> </li>
            <button onClick={toggleNav}><i className="fa-duotone fa-grip-lines"></i></button>
          </ul>

      {/* <div className="navbar-left">
        <div >
          <img className="logo-nav" src={logo} />
        </div>
       
        {!user
          ?
          <ul className="nav-links" >
            <li>< Link to="/" > Home </Link></li>
            <li ><Link to="/menu" > Menu </Link></li>
            <li ><Link to="/about" > About</Link> </li>
            <li ><Link to="/contact"> Contact </Link></li>
            <li>< Link to="/login"> Login </Link></li>
            <li>< Link to="/register"> Register</Link> </li>
            <li  ><i className="fa-solid fa-cart-plus" /></li>
          </ul>
          :
          <ul className="nav-links" >
            <li ><Link to="/"> Home </Link> </li>
            <li>< Link to="/menu"> Menu </Link></li>
            <li ><Link to="/about"> About</Link> </li>
            <li ><Link to="/contact"> Contact </Link></li>
            <li >< Link to="/messages"> Messages </Link></li>
            <li > Logout </li>
            <li><i className="fa-solid fa-cart-plus" /></li>
          </ul>}
        <button onClick={toggleNav}>---</button>
      </div> */}

    </header>)

}