import React, { useState } from "react";
import "../allCss/Navbar.css";
import logo from "../assets/logo.png";
import Data from "../Products.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faCartShopping,
  faHeadset,
  faStore,
  faX,
} from "@fortawesome/free-solid-svg-icons";
import { faHeart, faUser } from "@fortawesome/free-regular-svg-icons";
import NavbarItems from "./NavbarItems";

function Navbar() {
  const [isItemHovered, setItemHovered] = useState(false);
  const [activeTab, setActiveTab] = useState(1);

  const handleItemClick = () => {
    if (isItemHovered) {
      handleItemLeave();
    } else {
      handleItemHover();
    }
  };

  const handleItemHover = () => {
    setItemHovered(true);
  };

  const handleItemLeave = () => {
    setItemHovered(false);
  };

  const handleTabClick = (tabIndex) => {
    setActiveTab(tabIndex);
  };

  const handleOverlayClick = (event) => {
    event.stopPropagation();
  };
  return (
    <div className="Navbar">
      <div className="Navbar-toggle">
        <div className="Navbar-toggle-icon" onClick={handleItemClick}>
          {isItemHovered ? (
            <FontAwesomeIcon className="navbartoggleButton" icon={faX} />
          ) : (
            <FontAwesomeIcon className="navbartoggleButton" icon={faBars} />
          )}
          {isItemHovered && (
            <div
              className="overlay"
              style={{
                width: "100vw",
                height: "500px",
                backgroundColor: "rgba(0, 0, 0, 0.5)",
                position: "fixed",
                top: "70px",
                left: 0,
                zIndex: 99,
              }}
              onClick={handleOverlayClick}
            >
              <div className="tab-container" style={{ zIndex: 999 }}>
                <div
                  className={`tab ${activeTab === 1 ? "active" : ""}`}
                  onClick={() => handleTabClick(1)}
                >
                  All Sports
                </div>
                <div
                  className={`tab ${activeTab === 2 ? "active" : ""}`}
                  onClick={() => handleTabClick(2)}
                >
                  Men
                </div>
                <div
                  className={`tab ${activeTab === 3 ? "active" : ""}`}
                  onClick={() => handleTabClick(3)}
                >
                  Women
                </div>
                <div
                  className={`tab ${activeTab === 4 ? "active" : ""}`}
                  onClick={() => handleTabClick(4)}
                >
                  Kids
                </div>
                <div
                  className={`tab ${activeTab === 5 ? "active" : ""}`}
                  onClick={() => handleTabClick(5)}
                >
                  Sports Accessories
                </div>
                <div
                  className={`tab ${activeTab === 6 ? "active" : ""}`}
                  onClick={() => handleTabClick(6)}
                >
                  Gym Activewear
                </div>
              </div>
              {activeTab === 1 && (
                <div className="tab-content">
                  <NavbarItems type="All Sports" datas={Data.AllSports} />
                </div>
              )}
              {activeTab === 2 && (
                <div className="tab-content">
                  <NavbarItems type="All Sports" datas={Data.Men} />
                </div>
              )}
              {activeTab === 3 && (
                <div className="tab-content">
                  <NavbarItems type="All Sports" datas={Data.Women} />
                </div>
              )}
              {activeTab === 4 && (
                <div className="tab-content">
                  <NavbarItems type="All Sports" datas={Data.Kids} />
                </div>
              )}
              {activeTab === 5 && (
                <div className="tab-content">
                  <NavbarItems
                    type="All Sports"
                    datas={Data.SportsAccessories}
                  />
                </div>
              )}
              {activeTab === 6 && (
                <div className="tab-content">
                  <NavbarItems type="All Sports" datas={Data.GymActivewear} />
                </div>
              )}
            </div>
          )}
        </div>
        <div className="Navbar-toggle-text">All Clone</div>
      </div>
      <div className="Navbar-logo">
        <img style={{ padding: "0" }} className="Navbar-logoimg" src={logo} />
      </div>
      <div className="Navbar-search">
        <div className="group">
          <svg className="icon" aria-hidden="true" viewBox="0 0 24 24">
            <g>
              <path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path>
            </g>
          </svg>
          <input placeholder="Search" type="search" className="input" />
        </div>
      </div>
      <div className="Navbar-pin" style={{ margin: "0px 30px" }}>
        <div className="Navbar-cart-icon-container">
          <p className="Navbar-cart-icon" style={{ fontSize: "14px" }}>
            Delivery Location
          </p>
        </div>
        <div className="Navbar-cart-text-container">
          <p className="Navbar-cart-text" style={{ marginTop: "10px" }}>
            <span style={{ color: "yellow" }}>560001</span>&nbsp;&nbsp;CHANGE
          </p>
        </div>
      </div>
      <div className="Navbar-user">
        <div className="Navbar-cart-icon-container">
          <FontAwesomeIcon icon={faUser} className="Navbar-cart-icon" />
        </div>
        <div className="Navbar-cart-text-container">
          <p className="Navbar-cart-text">Signin</p>
        </div>
      </div>
      <div className="Navbar-store">
        <div className="Navbar-cart-icon-container">
          <FontAwesomeIcon icon={faStore} className="Navbar-cart-icon" />
        </div>
        <div className="Navbar-cart-text-container">
          <p className="Navbar-cart-text">Store</p>
        </div>
      </div>
      <div className="Navbar-support">
        <div className="Navbar-cart-icon-container">
          <FontAwesomeIcon icon={faHeadset} className="Navbar-cart-icon" />
        </div>
        <div className="Navbar-cart-text-container">
          <p className="Navbar-cart-text">Support</p>
        </div>
      </div>
      <div className="Navbar-saved">
        <div className="Navbar-cart-icon-container">
          <FontAwesomeIcon icon={faHeart} className="Navbar-cart-icon" />
        </div>
        <div className="Navbar-cart-text-container">
          <p className="Navbar-cart-text">Saved</p>
        </div>
      </div>
      <div className="Navbar-cart">
        <div className="Navbar-cart-icon-container">
          <FontAwesomeIcon icon={faCartShopping} className="Navbar-cart-icon" />
        </div>
        <div className="Navbar-cart-text-container">
          <p className="Navbar-cart-text">Cart</p>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
