import "./about.css";
import ImgHtml from "../images/html-logo.png";
import ImgAbout from "../images/undraw_profile_re_4a55.svg";
import ImgCss from "../images/css-logo.png";
import ImgJs from "../images/js-logo.png";
import ImgReact from "../images/react-logo.png";
import ImgGh from "../images/github-logo.png";
function About() {
  return (
    <div className="aboutSection" id="About">
      <div className="aboutMePhoto">
        <img src={ImgAbout} alt="About-Img" />
      </div>
      <div className="aboutText">
        <h1>About Me</h1>
        <div className="textInAbout"/>
          <p>
            I'm a web designer and front-end developer. I'm interested in all
            kinds of visual communication, but my major focus is on designing
            web, mobile and tablet interfaces. I also have skills in other
            fields like branding, icon design or web development.{" "}
          </p>
          <p>
            I enjoy turning complex problems into simple, beautiful and
            intuitive designs. When I'm not pushing pixels, you'll find me
            cooking, gardening or working out in the park.
          </p>

          <div className="logoOfTech">
            <h5>Languages/Library/Technology</h5>
            <div className="tech-logos-flex">
              <img src={ImgHtml} alt="html-logo" />
              <img src={ImgCss} alt="css-logo" />
              <img src={ImgJs} alt="js-logo" />
              <img src={ImgReact} alt="react-logo" />
              <img src={ImgGh} alt="github-logo" />
              {/* <img src={ImgPy} alt="python-logo"/> */}
            </div>
          </div>
      </div>
    </div>
  );
}

export default About;
