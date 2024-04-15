import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { LOGO_URL } from "../utils/constants";

const Header = () => {
  const navigate = useNavigate()
  const [btnName, setBtnName] = useState("LogIn")
    return (
      <div className="flex justify-between border-[1px] border-[solid] border-[black]">
        <div className="logo-container">
          <img
            className="w-[100px]"
            src={LOGO_URL}
          ></img>
        </div>
        <div className="px-[20px] py-4">
          <ul className="flex list-none">
            <li className="text-[20px] font-serif hover:[text-shadow:0_4px_8px_0_lightblue,_0_6px_30px_0_lightblue] p-[10px] m-[10px] " onClick={()=>navigate("/")}>Home</li>
            <li className="text-[20px] font-serif hover:[text-shadow:0_4px_8px_0_lightblue,_0_6px_30px_0_lightblue] p-[10px] m-[10px] " onClick={()=>navigate("/about")}>About Us</li>
            <li className="text-[20px] font-serif hover:[text-shadow:0_4px_8px_0_lightblue,_0_6px_30px_0_lightblue] p-[10px] m-[10px] " onClick={()=>navigate("/contacts")}>Contact Us</li>
            <li className="text-[20px] font-serif hover:[text-shadow:0_4px_8px_0_lightblue,_0_6px_30px_0_lightblue] p-[10px] m-[10px] " onClick={()=>navigate("/")}>Cart</li>
            <button className="text-[20px] font-serif h-1/2 mt-[22px] cursor-pointer w-[65px] border-[1px] border-[solid]  rounded-[5px] border-[black] bg-neutral-300" onClick={()=>{
              btnName === 'LogIn' ? setBtnName('LogOut') : setBtnName('LogIn')
            }}>{btnName}</button>
          </ul>
        </div>
      </div>
    );
  };

export default Header;