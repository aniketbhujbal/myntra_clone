import React, { useEffect, useRef, useState } from 'react';
import style from './header.module.css';
import data1 from '../../Data.json';
import image from "../../assets/Myntralogo.png"
import { AiOutlineSearch, AiOutlineHeart } from 'react-icons/ai';
import { BsBagCheck, BsFillPersonFill } from "react-icons/bs";
import { IoPersonOutline } from 'react-icons/io';
import { FaBars } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { Navbar, Nav, Button } from 'react-bootstrap';
import { GiHamburgerMenu } from 'react-icons/gi';
function Header() {
  const [data, setData] = useState([]);
  const [bgcolorofsearchbar, setBgColorOfSearchBar] = useState(true);
  const [showDropdown, setShowDropdown] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showBasic, setShowBasic] = useState(false);
  const [showNav, setShowNav] = useState(false);

  const toggleNav = () => {
    setShowNav(!showNav);
  };
  const navigate=useNavigate()
  const searchRef = useRef(null);
  const fetchdata= async()=>{
    try {
         const resp= await fetch("https://myntra-data.onrender.com/items")
         const data = await resp.json();
         setData(data);
         console.log(data)
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
  const toggleBgColor = () => {
    setBgColorOfSearchBar((prevState) => !prevState);
  };
  const toggleDropdown = () => {
    setShowDropdown((prevState) => !prevState);
  };
  useEffect(() => {
    fetchdata();

    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setBgColorOfSearchBar(true);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  const handleclick=(e)=>{
    let type = e.target.textContent.trim();
    console.log(e.target);
   let category= e.target.dataset.category;
    navigate('products',{state:{Category:category,type:type}})
  }

const Cart=()=>{
  navigate('checkout/cart')
}
const WishList=()=>{
  navigate('checkout/WishList')
}

  return (
    <div className={style.header}>
      <div className={style.header_sub}>
        {data.length > 0 && (
          <div>
            <img
              src={process.env.PUBLIC_URL + image}
              alt={data[0].name}
              className={style.logo}
              onClick={()=>{
                navigate('')
              }}
            />
          </div>
        )}

        <div className={style.navItems}>

          <div
            className={style.menuItem}
            onMouseEnter={toggleDropdown}
            onMouseLeave={toggleDropdown}
          >
            <h5>MEN</h5>
            <div className={style.underline} />
            {showDropdown && (
              <div className={style.dropdown}>
                {/* Dropdown content */}
                <div className={style.column}>
                  <h5>Top Wear</h5>
                  <ul>
                    <li ><p onClick={(e) => handleclick(e)} data-category='Mens'>t-shirt</p></li>
                    <li ><p onClick={(e) => handleclick(e)} data-category='Mens'>casual shirts</p></li>
                    <li ><p onClick={(e) => handleclick(e)} data-category='Mens'>formal shirts</p></li> <li><a href="#">casual</a></li>
                    <li ><p onClick={(e) => handleclick(e)} data-category='Mens'>Sweatshirt</p></li>
                    <li ><p onClick={(e) => handleclick(e)} data-category='Mens'>sweater</p></li>
                  </ul>
                </div>
                <div className={style.column}>
                  <h6>Bottom Wear</h6>
                  <ul>
                    <li><a href="#">Jeans</a></li>
                    <li><a href="#">casual trousers</a></li>
                  </ul>
                </div>
              </div>
            )}
          </div>
          <div>

            <h5>WOMEN</h5>
            <div className={style.underline} />
          </div>
          <div>
            <h5>KIDS</h5>
            <div className={style.underline} />
          </div>
          <div>
            <h5>HOME & LIVING</h5>
            <div className={style.underline} />
          </div>
          <div>
            <h5 >BEAUTY</h5>
            <div className={style.underline} />
          </div>
          <div>
            <h5> STUDIO</h5>
            <div className={style.underline} />
          </div>
        </div>
        {/* //Hamburger Menu */}
        <div className={style.navItems1}>
        <Navbar expand="md">
      <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={toggleNav}>
        <GiHamburgerMenu />
      </Navbar.Toggle>
      <Navbar.Collapse id="basic-navbar-nav" className={showNav ? 'show' : ''}>
        <Nav className="ml-auto">
        <Nav.Link >
        <div
            className={style.menuItem}
            onMouseEnter={toggleDropdown}
            onMouseLeave={toggleDropdown}
          >
            <h6>MEN</h6>
            <div className={style.underline} />
            {showDropdown && (
              <div className={style.dropdown}>
                {/* Dropdown content */}
                <div className={style.column}>
                  <h5>Top Wear</h5>
                  <ul>
                    <li ><p onClick={(e) => handleclick(e)} data-category='Mens'>t-shirt</p></li>
                    <li ><p onClick={(e) => handleclick(e)} data-category='Mens'>casual shirts</p></li>
                    <li ><p onClick={(e) => handleclick(e)} data-category='Mens'>formal shirts</p></li> <li><a href="#">casual</a></li>
                    <li ><p onClick={(e) => handleclick(e)} data-category='Mens'>Sweatshirt</p></li>
                    <li ><p onClick={(e) => handleclick(e)} data-category='Mens'>sweater</p></li>
                  </ul>
                </div>
                <div className={style.column}>
                  <h6>Bottom Wear</h6>
                  <ul>
                    <li><a href="#">Jeans</a></li>
                    <li><a href="#">casual trousers</a></li>
                  </ul>
                </div>
              </div>
            )}
          </div>
          </Nav.Link>
          <Nav.Link > 
                  <div>
                  <h6>WOMEN</h6>
                  <div className={style.underline} />
                  </div>
            </Nav.Link>
          <Nav.Link >
          <div>
                  <h6>KIDS</h6>
                  <div className={style.underline} />
                  </div>
          </Nav.Link>
          <Nav.Link >
          <div>
                  <h6>HOME & LIVING</h6>
                  <div className={style.underline} />
                  </div>
          </Nav.Link>
          <Nav.Link >
          <div>
                  <h6>BEAUTY</h6>
                  <div className={style.underline} />
                  </div>
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
        </div>
        {/* Hamburger Menu */}
        <div className={style.navItems2}>

        </div>

        <div
          style={{
            backgroundColor: bgcolorofsearchbar ? "lightgray" : "white",

            border: bgcolorofsearchbar ? "none" : "1px solid black",

          }} className={style.searchDiv}
          ref={searchRef}
        >
          <AiOutlineSearch />
          <input
            type='text'
            style={{
              backgroundColor: bgcolorofsearchbar ? "lightgray" : "white",
              border: "none",
              outline: "none", // Remove the default focus outline
            }}
            placeholder='Search for product, brands, and more'
            onClick={toggleBgColor}
          />
        </div>
        <div style={{ width: "30px", height: "30px", margin: "0 15px" }}>
          <BsFillPersonFill style={{ width: "90%", height: "90%" }}></BsFillPersonFill>
          <h6 style={{ marginTop: "0" }}>Profile</h6>
        </div>
        <div style={{ width: "30px", height: "30px", margin: "0 15px",padding:"0 15px" }}>
          <AiOutlineHeart style={{ width: "30px", height: "30px",cursor:"pointer" }} onClick={WishList}/>
          <h6 style={{ marginTop: "0" }}>WishList</h6>
        </div >
        <div style={{ width: "30px", height: "30px", margin: "0 25px",padding:"0 20px" }}>
          <BsBagCheck style={{ width: "30px", height: "30px",cursor:"pointer" }} onClick={Cart}/>
          <h6 style={{ marginTop: "0" }}>Bag</h6>
        </div>
      </div>
    </div>
  );
}

export default Header;
