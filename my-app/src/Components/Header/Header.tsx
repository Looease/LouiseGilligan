import React, { useEffect, useState, useRef, useCallback } from "react";
import { Link } from "react-router-dom";
import "../../style.css";
import "./Header.css";

interface ClickProps {
  this: any;

}

export const Header = () => {
  const btns = document.getElementsByClassName('btn');
  const btnsActive = document.getElementsByClassName('btn active');

  const [navExpanded, setNavExpanded] = useState(true);
	const [titleText, setTitleText] = useState(btnsActive);
	const toggleClick = () => {
		setNavExpanded(!navExpanded);
		setTitleText(titleText === btnsActive ? btns : btnsActive);
	};

  // const [underlinedText, setUnderLinedText] = useState(document.getElementsByClassName("btn"));
  // const btns = document.getElementsByClassName("btn");
  // // const btnsActive = document.getElementsByClassName("active");

  // // const highLighText = () => {
  // //   for (var i = 0; i < btns.length; i++) {

  // //     btns[i].addEventListener("click",() => {
        
  // //       const current = document.getElementsByClassName("active");
  // //       current[0].className = current[0].className.replace("active", "");
  // //       this.className += current;
  // //     });
  //   // }
    // }
   
    return (
      <div className="navcontainer">
        <nav className="nav" id="navbar">
          <Link to="/">
            <h2 className="logo">Louise Gilligan </h2>
          </Link>
          <div>
            <ul id="navLinks">
              <li  className="btn active" id="hideMe" onClick={toggleClick}>
                <Link to="/">Home</Link>
              </li>
              <li className="btn" >
                <Link to="/projects" onClick={toggleClick}>Projects</Link>
              </li>
              <li className="btn" >
                <Link to="/resources" onClick={toggleClick}>Resources</Link>
              </li>
              <li className="btn" >
                <Link to="/contact" onClick={toggleClick}>Contact</Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
};




//On scroll
  // const [navExpand, setNavExpand] = useState("navcontainer")
  // // const [scroll, setScroll] = useState(
  // // const scroll =
  // const scrollFunction = () => {
  //   setNavExpand(navExpand ? ("navcontainer") : ("navcontainerScroll"))

// window.onscroll = scrollFunction;

// const scrollFunction = () => {
// if (document.body.scrollTop > 185 || document.documentElement.scrollTop > 185) {
// document.getElementById("navbar").style.padding = "20px 0px 0px 0px";
// document.getElementById("navbar").style.background="rgba(0, 0, 0, 0.2)";
// rgba(246, 192, 178, 0.6)
// } else {
// document.getElementById("navbar").style.padding = "0px 0px 0px 0px";
// document.getElementById("navbar").style.background="transparent";
// }
// }

//Highlight links
// const highLighText = useRef<HTMLElement>(document.getElementById("navLinks"));
// const handleHighLightText = () => {
//   if(
//     highLighText.current &&
//     !highLighText.current.contains(event?.target as HTMLElement)
//   ){

//   }
// }