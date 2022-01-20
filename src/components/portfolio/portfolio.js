import {Component} from 'react'
// import ClockImgPortfolio from '../images/clockImgPortfolio.PNG'
// import TodoJS_Portfolio from '../images/todoJSportfolio.PNG'
// import Sahara_Portfolio from '../images/saharaOnCssPortfolio.PNG'
import './portfolio.css'

class Portfolio extends Component{
    render(){
        return(
            <div className="portfolio-container" id="Portfolio">
                <h2 className= "portfolioHeading">My Portfolio</h2>
                <div className="underline"></div>
                <div className="portfolio-img-container">
                    <a href="https://react-paritosh-blog.netlify.app/" target="_blank" rel="noreferrer"><div className="item6 items"></div></a>

                    <a href="https://kashyapparitosh.github.io/clock_project_js/" target="_blank" rel="noreferrer"><div className="item1 items"></div></a>
                    
                    <a href="https://kashyapparitosh.github.io/todoJs/" target="_blank" rel="noreferrer"><div className="item2 items"></div></a>
                    
                    <a href="https://kashyapparitosh.github.io/cssass6/" target="_blank" rel="noreferrer"><div className="item3 items"></div></a>
                    
                    <a href="https://kashyapparitosh.github.io/cssass5/" target="_blank" rel="noreferrer"><div className="item4 items"></div></a>
                    
                    <a href="https://csb-1etn8.netlify.app/" target="_blank" rel="noreferrer"><div className="item5 items"></div></a>
                </div>
            </div>
        )
    }
}

export default Portfolio;