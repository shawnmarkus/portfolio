import React from "react";
import NavbarStyle from "../css/Navbar.module.css";
import { Link as NavLink } from "react-scroll";

//this was  trail of Link from react scroll but activeClass is not working

const NavLabel = {
  Me: "home",
  About: "about",
  // Academics: "academics",
  Skills: "skills",
  Projects: "projects",
  Contact: "contact",
};

const NavElement = ({ label }) => {
  return (
    <>
      <li className={NavbarStyle.listedItem}>
        <NavLink
          activeClass={NavbarStyle.active}
          className={NavbarStyle.referencingLinks}
          to={NavLabel[label]}
          spy={true}
          smooth={true}
        >
          {label}
        </NavLink>
      </li>
    </>
  );
};

const Navbar = () => {
  return (
    <div className={NavbarStyle.navbarConatainerStyle2}>
      <div className={NavbarStyle.wrapContainer}>
        <ul>
          {Object.keys(NavLabel).map((label, key) => {
            return (
              <>
                <NavElement key={key} label={label} />
              </>
            );
            // console.log(label);
          })}
          {/* {Object.keys(NavLabel).map((label, keys) => {
            return <NavElement keys={keys} label={label} />;
          })} */}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
