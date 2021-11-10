import { Component } from "react";
import About from "../about/about";
import Portfolio from "../portfolio/portfolio";
import Contact from '../contact/contact'
import Nav from '../Nav/Nav'
import Intro from "../Intro/Intro";
import ResumeParitosh from "../Resume Paritosh/Resume";

class Main extends Component {
    render () {
      return(
        <div>
            <Nav />
            <Intro></Intro>
            <About></About>
            <Portfolio></Portfolio>
            <ResumeParitosh />
            <Contact></Contact>
        </div>
      );
    }
}

export default Main