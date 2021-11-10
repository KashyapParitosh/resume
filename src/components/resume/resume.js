import {Component} from 'react'
import './resume.css'
import ResumeImg from '../images/undraw_resume_re_hkth.svg'

export default class Resume extends Component {
    render() {
        return(
           <div className="resumeSection">
               <h1>Resume</h1>
               <div className="underline">  
               </div>
               <div className="resumeInfoAndPhoto">
                   <div className="info">
                       <div className="workExperience">
                           <h3>Trainings, Certification</h3>
                           <hr />
                           <div>
                               <div className="traning1">
                                   <h4>Full Stack web development - Full Time</h4>
                                   <span>Aug '2021' - Dec '2021'</span>
                               <p className="trainingInstitue">PrepBytes, Gurgaon</p>
                               </div>
                           </div>
                       </div>
                       <div className="workExperience">
                           <h3>Education</h3>
                           <hr />
                           <div>
                               <div className="traning1">
                                   <h4>Bachelor of Technology - Full Time</h4>
                                   <span>july '2018' - june '2021'</span>
                               <p className="trainingInstitue">Maharaja Agrasen Institute Of Technology - Rithala, Delhi </p>
                               </div>
                           </div>
                       </div>
                   </div>
                   <div className="resumePhoto">
                       <img src={ResumeImg} alt="Resume-Img" />
                   </div>
               </div>
           </div>
        );
    }
}