import React, { useState } from "react";
import "../style.css";
import "./HomePage.css";

export const HomePage = () => {
  // const [text, setText] = useState("");

  // const texts = ["Software Engineer", "Salesperson"];

  // const count = 0;
  // const index = 0;
  // const currentText = '';
  // const letter = '';

  // count === texts.length ?  0 : 
  //   const (count === texts.length) {
  //             count = 0;
  //         }
  //         currentText = texts[count];
  //         letter = currentText.slice(0, ++index);
  // }

  // document.querySelector('.typing').textContent = letter;
  //     if (letter.length === currentText.length) {
  //         count++;
  //         index = 0;
  //     }
  //     setTimeout(type, 300);

  // (function type() {
  //     if (count === texts.length) {
  //         count = 0;
  //     }
  //     currentText = texts[count];
  //     letter = currentText.slice(0, ++index);

  //     document.querySelector('.typing').textContent = letter;
  //     if (letter.length === currentText.length) {
  //         count++;
  //         index = 0;
  //     }
  //     setTimeout(type, 300);
  // }());

  return (
    <section className="firstsection">
      <p className="neon">
        <a>
          Louise Gilligan
          <div className="subtitle">I build websites</div>
        </a>
      </p>

      {/* <div className="page1content" id="iamintro">
                <ul className="introText">
                    <li><h1>Hi I'm Louise Gilligan and I am a</h1></li>
                                <h1 className="typing">{text} </h1>
                </ul> 
      <span>  Tech lover and Software Engineer </span>
      </div>  */}
    </section>
  );
};
