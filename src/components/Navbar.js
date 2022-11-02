import React, { useState, useEffect } from "react";
import NavbarStyle from "../css/Navbar.module.css";
import { NavLink, useLocation } from "react-router-dom";

const NavLabel = {
  Me: "/",
  About: "/about",
  Academics: "/academics",
  Skills: "/skills",
  Projects: "/projects",
  Contact: "/contact",
};

const navLinkStyle = ({ isActive }) => {
  // console.log(location);
  return {
    fontWeight: isActive ? "bold" : "normal",
    color: isActive ? "green" : "white",
  };
};

// nav element
const NavElement = ({ label }) => {
  const location = useLocation();
  const [selectedItem, setSelectedItem] = useState("/");

  useEffect(() => {
    // console.log(location);
    setSelectedItem(location.pathname);
  }, [location]);

  return (
    <>
      <li className={NavbarStyle.listedItem}>
        <NavLink
          exact={true.toString()}
          to={`${NavLabel[label]}`}
          style={navLinkStyle}
          className={NavbarStyle.referencingLinks}
          end /*end is required to be mentioned mainly for root path as "/" else it matches for further path too*/
        >
          {label}
        </NavLink>
        {
          NavLabel[label] === selectedItem ? (
            <div className={NavbarStyle.dot}></div>
          ) : // console.log(location.pathname)
          null
          // console.log("false")
        }
      </li>
    </>
  );
};

const Navbar = () => {
  // const
  return (
    <div className={NavbarStyle.navbarConatainer}>
      <div className={NavbarStyle.wrapContainer}>
        <ul>
          {Object.keys(NavLabel).map((label, keys) => {
            return <NavElement keys={keys} label={label} />;
          })}

          {/* <li className={NavbarStyle.listedItem}>
            <NavLink
              style={navLinkStyle}
              className={NavbarStyle.referencingLinks}
              to="/"
              exact
            >
              Me
            </NavLink>
          </li>
          <li className={NavbarStyle.listedItem}>
            <NavLink
              style={navLinkStyle}
              className={NavbarStyle.referencingLinks}
              to="/about"
            >
              About
            </NavLink>
          </li>
          <li className={NavbarStyle.listedItem}>
            <NavLink
              style={navLinkStyle}
              className={NavbarStyle.referencingLinks}
              to="/academics"
            >
              Academics
            </NavLink>
          </li>
          <li className={NavbarStyle.listedItem}>
            <NavLink
              style={navLinkStyle}
              className={NavbarStyle.referencingLinks}
              to="/skills"
            >
              Skills
            </NavLink>
          </li>
          <li className={NavbarStyle.listedItem}>
            <NavLink
              style={navLinkStyle}
              className={NavbarStyle.referencingLinks}
              to="/projects"
            >
              Projects
            </NavLink>
          </li>
          <li className={NavbarStyle.listedItem}>
            <NavLink
              style={navLinkStyle}
              className={NavbarStyle.referencingLinks}
              to="/contact"
            >
              Contact
            </NavLink>
          </li> */}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
