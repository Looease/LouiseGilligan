import React from 'react';
import {Link} from "react-router-dom";
import '../../style.css';
import './Footer.css'

export const Footer = () => {
    return(
        <footer id="footer">
        <ul>
          <Link to="index.html">Louise Gilligan</Link>
          <li><Link to="contact.html" className="footer">Contact</Link></li>
          <li><a href="https://www.linkedin.com/in/louise-gilligan-3b437069/" className="footer">Linkedin</a></li>
          <li><a href="https://www.instagram.com/louisesgilligan/" className="footer">Instagram</a></li>
          <li><a href="https://github.com/Looease" className="footer">Github</a></li>
        </ul>
        <ul>
          <a href="index.html#iamprojects">Portfolio</a>
          <li><Link to="kblSolutions.html" className="footer">KBL Solutions</Link></li>
          <li><Link to="museumMeltdown.html"className="footer">Museum Meltdowm</Link></li>
          <li><Link to="resources.html" className="footer">Resources</Link></li>
        </ul>
      </footer>

    )
}