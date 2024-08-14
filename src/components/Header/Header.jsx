import React, { useContext, useState } from "react";
import "./Header.css";
import { IoMenu, IoBag, IoClose } from "react-icons/io5";
import { Link } from "react-router-dom";
import { CartContext } from "../../Context/CartContext";
import { FaRegHeart } from "react-icons/fa";

function Header() {

  //to make active class   ----------------
  const [activePage , setActivePage ] = useState('/');

  const handleNavigation = (path) =>{
    setActivePage(path)
  }
  //-------------------------



  const [showpopUp, setShowpopUp] = useState(false);
  const cart = useContext(CartContext);
  return (
    <header className=" d-flex justify-content-between align-items-center px-5">
      <div className="leftNav">
        <Link to="/Home">
          <img
            src="../../../public/assets/images/roayalogo.png"
            width={80}
            alt=""
          />
        </Link>
      </div>
      <nav className="d-flex align-items-center">
        <ul className="d-flex gap-5 mb-1">
          <li>
            <Link to="/Home"  className={activePage === '/Home' ? 'active' :  ''} onClick={()=> handleNavigation('/Home')}>
              Home
            </Link>
          </li>
          {/* <li>
            <Link to="/About" className={activePage === '/About' ? 'active' :  ''} onClick={()=> handleNavigation('/About')}>About</Link>
          </li> */}
          <li>
            <Link to="/Contact" className={activePage === '/Contact' ? 'active' :  ''} onClick={()=> handleNavigation('/Contact')}>Contact Us</Link>
          </li>
          <li>
            <Link to="/Shop" className={activePage === '/Shop' ? 'active' :  ''} onClick={()=> handleNavigation('/Shop')} >Shop</Link>
          </li>
        </ul>
        <IoMenu
          className="menuIcon"
          onClick={() => {
            setShowpopUp(true);
          }}
        />
      </nav>
      <div className="rightNav">
        <button>
          <a href="/login">Logout</a>
        </button>
        <div className="d-flex gap-2">
          <Link
            to="/cart"
            style={{ textDecoration: "none" }}
            className="position-relative"
          >
            <IoBag
              className="bagIcon ms-2"
              style={{ color: "rgb(157,92,50)" }}
            />
            <span className="countSpan">{cart.cartItems.length}</span>
          </Link>
          <Link to="/wishlist">
            <FaRegHeart style={{ color: "var(--blue) " , fontSize : "22px"}} />
          </Link>
        </div>
      </div>

      {/* ******************* modal>>>popUp ***************  */}
      {showpopUp && (
        <div className="pop-upMenu animate__animated animate__fadeInDown">
          <ul className="popup ">
            <li>
              <IoClose
                onClick={() => {
                  setShowpopUp(false);
                }}
              />
            </li>
            <li>
              <Link to="/Home" className={activePage === '/Home' ? 'active' :  ''} onClick={()=> handleNavigation('/Home')}>
                Home
              </Link>
            </li>
            {/* <li>
              <Link to="/About" className={activePage === '/About' ? 'active' :  ''} onClick={()=> handleNavigation('/About')}>About</Link>
            </li> */}
            <li>
              <Link to="/Contact" className={activePage === '/Contact' ? 'active' :  ''} onClick={()=> handleNavigation('/Contact')}>Contact Us</Link>
            </li>
            <li>
              <Link to="/Shop" className={activePage === '/Shop' ? 'active' :  ''} onClick={()=> handleNavigation('/Shop')}>Shop</Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}

export default Header;
