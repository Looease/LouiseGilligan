import React from 'react';
import {Link} from "react-router-dom";
import '../style.css'
import './Header.css'

export const Header = () => {
//On scroll
// window.onscroll = function() {scrollFunction()};

// function scrollFunction() {
// if (document.body.scrollTop > 185 || document.documentElement.scrollTop > 185) {
// document.getElementById("navbar").style.padding = "20px 0px 0px 0px";
// document.getElementById("navbar").style.background="rgba(0, 0, 0, 0.2)";
// // rgba(246, 192, 178, 0.6)

// } else {
// document.getElementById("navbar").style.padding = "0px 0px 0px 0px";
// document.getElementById("navbar").style.background="transparent";
// }
// }

//Highlight links
  // var header = document.getElementById("navLinks");

  // var btns = header.getElementsByClassName("btn");
  // for (var i = 0; i < btns.length; i++) {
  //   btns[i].addEventListener("click", function() {
  //   var current = document.getElementsByClassName("active");
  //   current[0].className = current[0].className.replace(" active", "");
  //   this.className += " active";
  //   });
  // }


    return(
        <div className="navcontainer">
        <nav className="nav">
          <Link to="/"><h2 className="logo">Louise Gilligan </h2>
          </Link>
          <div>
            <ul id="navLinks">
              <li className="btn active" id="hideMe"><Link to="/">Home</Link></li>
              <li className="btn"><Link to="/projects">Projects</Link></li>
              <li className="btn"><Link to="/resources">Resources</Link></li>
              <li className="btn"><Link to="/contact">Contact</Link></li>
            </ul>
          </div>
        </nav>
      </div>
    );
}