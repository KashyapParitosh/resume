// import './App.css';
// import Navbar from './components/navbar';
// import App1 from './lecture_On_Satae' 
import './home.css'

function Home() {
  return (
    <div className="homeSection">
       <div className="textAndPhoto">
           <div className = "textBoxHome">
               <div className="introText">
                   <h1>Hi, I am Paritosh Kashyap</h1>
                   <h1>A Web Developer</h1>
               </div>
               <div className="buttonsInHome">
                   <h3>Get ready to turns ideas into reality</h3>
                   <div className="btns">
                       <button className = " btn hireMeBtn">Hire Me</button>
                       <button className = " btn getResume">Get Resume</button>
                   </div>
               </div>
           </div>
               <div className="photoInHome">

               </div>
       </div>
    </div>
  );
}
export default Home;