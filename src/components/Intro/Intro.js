import React from 'react';
import "./Intro.css"
import "./../../App.css"
import leftSide from "../images/WhatsApp_Image_2021-11-08_at_12.01.06_PM-removebg-preview.png";
export default function Intro() {
    return (
        <>
            <div className="main-intro" translate="no">
                <div className="intro-flex">
                    <div className="intro-div">
                        <div className="name-intro">
                            Hi, I am Paritosh Kashyap
                        </div>

                        <div className="intro-tagline">
                            A Front-end Developer
                        </div>

                        <p>Get ready to turn ideas into reality</p>
                        <div className="buttonshire">   <span className="hire-me-btn"> <a href="#Contact" >Hire Me</a></span>
                            <span className="resume-btn"><a href="#Resume" >Get Resume</a></span> </div>
                    </div>
                    <img className="hero-img" src={leftSide} alt="Header" />
                </div>
            </div>




        </>

    );
}
