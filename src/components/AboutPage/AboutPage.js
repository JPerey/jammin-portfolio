import "./AboutPage.css";
import Pic1 from "../images/test1.png";

const AboutPage = props => {
    let bioLength = props.selBioChoice;
    let picChoice = props.selPicChoice;
    return (
        <div className="aboutpage">
            
            <div className="bio">
                <p>{bioLength === 0 ? "JP gives it his best shot. Always." : ""}</p>
                <p>{bioLength === 1 ? "James Perey is an aspiring full stack engineer that has just got his wings from General Assembly." 
                + " He aims to merge his previous experience as an engineer to develop amazing solutions to those he deems worthy (i.e. whoever will pay him)" : ""}</p>
                <p>{bioLength === 2 ? "Having built my first computer when he was 17, James Perey is no stranger to complex, yet exciting problems hardware and software provide."
                +"This interest followed him  to forging a path to full stack engineering, and as such he aptly understands front-end, back-end, and all the inbetween-ends." : ""}</p>
            </div>
            <div className="profile-pic">
                {picChoice === 0 &&
                <img src={Pic1} alt="profile pic 1" width="300" height="300"/>
                }
                {picChoice === 1 &&
                <img href="#" alt="profile pic 2"/>
                }
                {picChoice === 2 &&
                <img href="#" alt="profile pic 3"/>
                }
            </div>
            <div className="pic-buttons">
                <p>JP's many faces</p>
                <button variant="outline-dark" onClick={() => props.setPicChoice(0)}>Happy</button>
                <button variant="outline-dark" onClick={() => props.setPicChoice(1)}>Scared</button>
                <button variant="outline-dark" onClick={() => props.setPicChoice(2)}>Confused</button>
            </div>

            
            <div className="bio-buttons">
                <p>bio length</p>
                <button variant="outline-dark" onClick={() => props.setBioChoice(0)}>small</button>
                <button variant="outline-dark" onClick={() => props.setBioChoice(1)}>medium</button>
                <button variant="outline-dark" onClick={() => props.setBioChoice(2)}>large</button>
            </div>
        </div>
    )
}

export default AboutPage;