


import BtnColorMode from "../btnColorMode/BtnColorMode.jsx";
import "./Navbar.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {

  const normalLink = "nav-list__link";
  const activeLink = "nav-list__link nav-list__link--active";


  return (
    <nav className="nav">
      <div className="container">
        <div className="nav-row">
          <NavLink className="logo" to={"/"}>
            <strong>Freelancer</strong> portfolio
          </NavLink>

          

          <ul className="nav-list">
                  <li className="nav-list__item">
              <NavLink className={({ isActive }) => (isActive ? activeLink : normalLink)} to={"/"}>
                Home
              </NavLink>
            </li>
            <li className="nav-list__item">
              <NavLink className={({ isActive }) => (isActive ? activeLink : normalLink)} to={"/projects"}>
                Projects
              </NavLink>
            </li>
            <li className="nav-list__item">
              <NavLink className={({ isActive }) => (isActive ? activeLink : normalLink)} to={"/contacts"}>
                Contacts
              </NavLink>
            </li>
          </ul>

          <BtnColorMode/>
        </div>
      </div>
    </nav>

  );
}

export default Navbar;