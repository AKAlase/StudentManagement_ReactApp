import React from "react";
import { Link } from "react-router-dom";
import Style from "./mainbar.module.css";

const MainBar = () => {
  return (
    <div>
      <nav className={Style.navCotainer}>
        <ul className={Style.nav}>
          <li>
            <Link to="/">Dashboard</Link>
          </li>
          <li>
            <Link to="/department">Department</Link>
          </li>
          <li>
            <Link to="/student">Student</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default MainBar;
