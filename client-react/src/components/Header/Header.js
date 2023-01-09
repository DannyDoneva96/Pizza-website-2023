import { Link } from 'react-router-dom'


export const Header = (props) => {


    const  user  = false;
    return (


       <header className="header">
        <div className="navbar">
          <div>
            <img className="logo-nav" src="../../../lissets/images/logo-nav-new.png" />
          </div>
          {/*NOT AUTH*/}
          {!user
                   ? 
          <ul className="nav-links" >
            <li Link to="/"> Home </li>
            <li > Menu </li>
            <li > About </li>
            <li> Contact </li>
            <li > Login </li>
            <li > Register </li>
            <li ><i className="fa-solid fa-cart-plus" /></li>
          </ul>
          :
          <ul className="nav-links" >
            <li > Home </li>
            <li > Menu </li>
            <li > About </li>
            <li > Contact </li>
            <li > Messages </li>
            <li > Logout </li>
           <li><i className="fa-solid fa-cart-plus" /></li>
          </ul>}
        </div>
      </header>)

}