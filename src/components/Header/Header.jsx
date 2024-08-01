import React, { useState } from "react";
import "./Header.css";
import { IoBook ,IoMenu , IoBag  , IoClose} from "react-icons/io5";
// import { IoMenu } from "react-icons/io5";
// import { IoBag } from "react-icons/io5";
// import { IoClose } from "react-icons/io5";

function Header() {
  const [showpopUp , setShowpopUp] = useState(false)
  return (
    <header className=" d-flex justify-content-between align-items-center px-5">
      <div className="leftNav">
        {/* <IoBook className="bookIcon" /> */}
        <a href="/Home"><img src="../../../public/assets/images/roayalogo.png" width={80} alt="" /></a>
      </div>
      <nav className="d-flex align-items-center">
        <ul className="d-flex gap-5 mb-1">
          <li>
            <a href="/Home" className="active">
              Home
            </a>
          </li>
          <li>
            <a href="/About">About</a>
          </li>
          <li>
            <a href="/Contact">Contact Us</a>
          </li>
          <li>
            <a href="/Shop">Shop</a>
          </li>
        </ul>
        <IoMenu className="menuIcon" onClick={() => {
          setShowpopUp(true)
          
        }
        } />
      </nav>
      <div className="rightNav">
        <button><a href="/login">login</a></button>
        <IoBag className="bagIcon ms-2" style={{ color: "rgb(157,92,50)" }} />
      </div>

      {/* ******************* modal>>>popUp ***************  */}
      {showpopUp && (
        <div className="pop-upMenu animate__animated animate__fadeInDown">
          <ul className="popup ">
            <li>
            <IoClose onClick={() => {
                setShowpopUp(false)
              }
              }/>
            </li>
            <li>
              <a href="/Home" className="active">
                Home
              </a>
            </li>
            <li>
              <a href="/About">About</a>
            </li>
            <li>
              <a href="/Contact">Contact Us</a>
            </li>
            <li>
              <a href="/Shop">Shop</a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}

export default Header;
