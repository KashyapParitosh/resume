import React from 'react';
import "./Resume.css"
import "./../../App.css"
import  middleSide  from "../images/undraw_resume_re_hkth.svg";
export default function ResumeParitosh() {
    return (
        <>

            <div className="resume-section" id="Resume">

                <h1>Resume</h1>
                <div className="resume-section-flex">
                    <div className="vertical-flex">
                        <div className="resume-flex">
                            <div> <h2>My Work</h2>{" "}
                                <hr />
                                <div className="flex-education">

                                    <div>
                                        <div className="work-flex">
                                            <div className="flex-edu ">  <span className="college-name">Full Stack web development - Full Time </span>
                                                <span className="passing-year">08/2021-11/2021</span>
                                            </div>
                                            <h4>PrepBytes, Gurgaon </h4>
                                        </div>
                                    </div>

                                </div></div>

                        </div>
                        <div className="resume-flex">
                            <div> <h2>Education</h2>{" "}
                                <hr />
                                <div className="flex-education">

                                    <div className="work-flex" >
                                        <div className="flex-edu ">  <span className="college-name">Bachelor of Technology - Full Time </span>
                                            <span className="passing-year">2018-2021</span>
                                        </div>
                                        <h4>Maharaja Agrasen Institute Of Technology - Rithala, Delhi</h4>
                                        {/* <span>Reference site about Lorem Ipsum, giving information on its origins, as well as a random Lipsum generator.</span> */}
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="resume-image">
                        <img className="resume-img" src={middleSide} alt="resume"></img>
                        <div className="social">

                            <a className="link" target="_blank" rel="noreferrer"
                                href="https://github.com/paritosh251197"><i className="fab social-icons fa-github "></i></a>

                            <a className="link" target="_blank" rel="noreferrer" href="https://www.instagram.com/paritosh25_/"><i
                                className="fab social-icons fa-instagram "></i></a>

                            <a className="link" 
                                href="#"><i className="fab social-icons fa-twitter "></i></a>

                            <i
                                className="fas social-icons fa-envelope "></i>
                            <a className="link" target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/paritosh-kashyap-7ab52a1b4/"><i
                                className="fab social-icons fa-linkedin-in"></i></a>
                        </div>


                    </div >
                </div >
            </div >



        </>

    );
}
