import React from 'react';
import './style.css'
import './Projects.css'



export const Projects = () => {
    return (
        <main className="page2" id="iamprojects">
            <div className="page2content">
                <h1 className="title">Projects</h1>
                <div className="container">
                    <a href="kblSolutions.html">
                        <img src="img/kblSolutions/3.jpg" alt="Project" className="image"></img>
                        <div className="overlay">
                            <div className="text">KBL Solutions</div>
                        </div>
                    </a>
                    <div className="container">
                        <a href="museumMeltdown.html">
                            <img src="img/accessibility/17.jpg" alt="Avatar" className="image"></img>
                            <div className="overlay">
                                <div className="text">Museum Meltdown</div>
                            </div>
                        </a>
                    </div>
                </div>
            </div>

        </main>
    )
}
