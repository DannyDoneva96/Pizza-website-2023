import { Link } from 'react-router-dom'
import logo from "../../images/logo-nav-new.png"
import "./Header.css"

export const Header = (props) => {


    const  user  = false;
    return (


       <header className="header">
        <div className="navbar">
          <div > 
            <img  className="logo-nav"src={logo} />
          </div>
          {/*NOT AUTH*/}
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
        </div>
      </header>)

}