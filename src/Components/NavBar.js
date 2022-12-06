import React from "react";
import { Link } from "react-router-dom";
import './NavBar.css'

const NavBar = () => {
  return (
    <div>
      <div className="d-flex flex-row justify-content-center mb-5">
        <div className="bg-container-header">
          <Link className="mr-3 link" to="/8th">
            Class VIII
          </Link>

          <Link className="mr-3 link" to="/9th">
            Class IX
          </Link>

          <Link className="mr-3 link" to="/10th">
            Class X
          </Link>

          <Link className="mr-3 link" to="/cricTeam">
            Cricket Team
          </Link>

          
          <br />
        </div>
      </div>
    </div>
  );
};
export default NavBar;
