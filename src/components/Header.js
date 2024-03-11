import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";

const Header = () => {
  const [btnName, setBtnName] = useState("LogIn")
    return (
      <div className="header">
        <div className="logo-container">
          <img
            className="logo"
            src={LOGO_URL}
          ></img>
        </div>
        <div className="nav-items">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/contacts">Contact Us</Link></li>
            <li><Link to="/">Cart</Link></li>
            <button className="login" onClick={()=>{
              btnName === 'LogIn' ? setBtnName('LogOut') : setBtnName('LogIn')
            }}>{btnName}</button>
          </ul>
        </div>
      </div>
    );
  };

export default Header;