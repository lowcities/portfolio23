import React, {useState} from "react";
import {motion} from "framer-motion";
import Div100vh from "react-div-100vh";
import '../css/portfolio.scss';
import '../css/backdrops.scss';

const Portfolio = ({ lastBackGrnd }) => {
    const [hideElement, setHideElement ] = useState(false);
    const [state, setState] = useState({
        openTWCard: false,
        openWHCard: false,
        openAWCard: false
    });

    const renderBackDrop = (arg1) => {
        switch(true) {
            case (arg1 === 1): 
                return <>
                    <div className="backdrop-2a"></div> 
                    <div id="about" className="backdrop-2b"></div>
                </>
            case (arg1 === 2 ):
                return <>
                    <div className="backdrop-3a"></div> 
                    <div id="about" className="backdrop-3b"></div>
                </>
            case (arg1 === 3):
                return <>
                    <div className="backdrop-2a reverse-animation"></div> 
                    <div id="about" className="backdrop-2b reverse-animation2"></div>
                </>            
        }
    }

    const card = {
        offscreen: {
            opacity: 0
        },
        
        onscreen: {
            opacity: 1,
            transition: {
                duration:1,
                delay: 2,
                ease: "easeIn"
            }
        }
    }

    return (

        
            <div id="portfolio" className="portfolio-wrapper">
                <h1 className="section-header">WORK</h1>
                {renderBackDrop(lastBackGrnd)}
                {/* <div className="overlay2" style={{backgroundSize:"6px", opacity: 0.9}}></div> */}
                <div className="portfolio-list">
                    <motion.div className="portfolio-item"
                        initial={{opacity: 0}}
                        animate={{opacity:1}}
                        transition={{
                            duration: 2,
                            delay: 2
                                    }}
                        data-opentwcard={state.openTWCard}
                        onClick={()=> setState({...state, openTWCard: state.openTWCard ? false : true, openAWCard: false, openWHCard: false})}>
                        <span className="project-name">TREEWOMAN</span>    
                        <img className="project-img" src={require('../img/treewoman.jpg')} alt="treewoman-thumbnail" />
                        <div className="project-description">
                        <h1>TREEWOMAN</h1>
                            <div className="project-links">
                                <a href="https://www.treewoman.net" rel="noreferrer" target="_blank">
                                    <i className="web-link-icon"></i>
                                </a>
                                <a href="https://github.com/lowcities/treewoman" rel="noreferrer" target="_blank">
                                    <i className="github-link-icon"></i>
                                </a>
                            </div>
                            <p>
                                Treewoman is a photo based memorial website where individuals can upload photo
                                memories as well as comment on photos added by others. This project was my first complex React
                                application. What started as a simple concept grew in complexity as the need for security 
                                and user authentication became neccessary. I utilized Firebase and Google Cloud to bootstrap the 
                                back end and maintain the user database.
                            </p>
                        </div>
                    </motion.div>
                    <motion.div className="portfolio-item"
                        initial={{opacity: 0}}
                        animate={{opacity:1}}
                        transition={{
                            duration: 2,
                            delay: 2.3
                                    }}
                        data-openwhcard={state.openWHCard}
                        onClick={()=> setState({...state, openWHCard: state.openWHCard ? false : true, openTWCard: false, openAWCard: false})}>
                        <span className="project-name">HERZOG QUOTES</span>
                        <img className="project-img" src={require('../img/herzog_site.jpg')} alt="herzog-preview"></img>
                        <div className="project-description">
                            <h1>HERZOG QUOTES</h1>
                            <div className="project-links">
                                <a href="https://github.com/lowcities/herzog_quote_generator" rel="noreferrer" target="_blank">
                                    <i className="web-link-icon"></i>
                                </a>
                                <a href="https://github.com/lowcities/herzog_quote_generator" rel="noreferrer" target="_blank">
                                    <i className="github-link-icon"></i>
                                </a>
                            </div>    
                            
                            <p>
                                Herzog Quotes is Awesome!
                            </p>
                        </div>    
                    </motion.div>
                    <motion.div className="portfolio-item"
                        initial={{opacity: 0}}
                        animate={{opacity:1}}
                        transition={{
                            duration: 2,
                            delay: 2.6
                                    }}
                        data-openawcard={state.openAWCard}
                        onClick={()=> setState({...state, openAWCard: state.openAWCard ? false : true, openTWCard: false, openWHCard: false})}>
                        <span className="project-name">ALAN WATTS: A BRIEF TRIBUTE</span>
                        <img className="project-img" src={require('../img/alan_site.jpg')} alt="aw-preview"></img>
                        <div className="project-description">
                            <h1>ALAN WATTS: A BRIEF TRIBUTE</h1>
                            <div className="project-links">
                                <a href="https://github.com/lowcities/alan-watts-tribute" rel="noreferrer" target="_blank">
                                    <i className="web-link-icon"></i>
                                </a>
                                <a href="https://github.com/lowcities/alan-watts-tribute" rel="noreferrer" target="_blank">
                                    <i className="github-link-icon"></i>
                                </a>
                            </div>
                            <p>
                                Herzog Quotes is Awesome!
                            </p>
                        </div>
                    </motion.div>
                </div>
                
            </div>
            
        
    );
}

export default Portfolio;