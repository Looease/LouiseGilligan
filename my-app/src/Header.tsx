import React from 'react';
import {Link} from "react-router-dom";
import './App.css';
import styles from "./Header.module.css"

export function Header() {
    return(
        <div className={styles.navcontainer}>
        <nav className="nav">
          <Link to="index.html"><h2 className="logo">Louise Gilligan </h2>
          </Link>
          <div>
            <ul id="navLinks">
              <li className="btn active" id="hideMe"><Link to="index.html">Home</Link></li>
              <li className="btn"><Link to="index.html#iamprojects">Projects</Link></li>
              <li className="btn"><Link to="resources.html">Resources</Link></li>
              <li className="btn"><Link to="contact.html">Contact</Link></li>
            </ul>
          </div>
        </nav>
      </div>
    );
}