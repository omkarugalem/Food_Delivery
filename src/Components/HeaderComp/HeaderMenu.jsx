import React from "react";
import { Link } from "react-router-dom";
import "./header.css";

const HeaderMenu = () => {
  return (
    <section id="headerBlock">
      <article>
        <div className="leftBlock">
          <Link to="/" style={{ textDecoration: "none" }}>
            <span>Food</span>
            <span>Ista</span>
          </Link>
        </div>
        <div className="rightBlock">
          <nav>
            <ul>
              <li>
                <Link to="/add-to-products">Add To Cart</Link>
              </li>
              <li>
                <Link to="/signup">SignUp</Link>
              </li>
              <li>
                <Link to="/login">Login</Link>
              </li>
            </ul>
          </nav>
        </div>
      </article>
    </section>
  );
};

export default HeaderMenu;
