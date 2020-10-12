import React from 'react';
import './style.css'
import './HomePage.css'


export const HomePage = () => {
    // const texts = ['Software Engineer', 'Salesperson'];
    // let count = 0;
    // let index = 0;
    // let currentText = '';
    // let letter = '';
    
    // (function type(){
    //   if (count === texts.length){
    //     count = 0;
    //   }
    //   currentText = texts[count];
    //   letter = currentText.slice(0, ++index);
    


    //   document.querySelector('.typing').textContent = letter;
    //   if (letter.length === currentText.length) {
    //     count++;
    //     index = 0;
    //   }
    //   setTimeout(type, 300);
    // }());




    // const message = ["Software Engineer", "Salesperson"];
    // let i = 0;
    // let jsxArray = [];
    // for (i = 0; i < message.length; i++) {
    //     jsxArray.push(
    //         <div className='background'>
    //             <h1 className="typewriter">
    //                 {message[i]}
    //             </h1>
    //         </div>
    //     );
    // }

    return (
        <section className="firstsection">
            <div className="page1content" id="iamintro">
                <ul className="introText">
                    <li><h1>Hi I'm Louise Gilligan and I am a</h1></li>
            
                </ul>
                {/* <span>  Tech lover and Software Engineer </span> */}
            </div>
        </section>




    );
};