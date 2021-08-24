import Pic1 from "../images/test1.png";
import jpburger from "../images/jpburger.jpg";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const HomePage = props => {
    let bioLength = props.selBioChoice;
    let picChoice = props.selPicChoice;
    return (
        <div className="homepage">
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

            <Card className="text-center" bg="secondary" text="light" >
                {picChoice === 0 &&
                <Card.Img variant="top" src={Pic1} alt="profile pic 1"/>
                }
                {picChoice === 1 &&
                <Card.Img variant="top" src={jpburger} alt="profile pic 1"/>
                }
                {picChoice === 2 &&
                <Card.Img variant="top" src={Pic1} />
                }
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Button variant="dark">Go somewhere</Button>
                    <Button variant="dark">Hungry?</Button>
                    <Button variant="dark">Go somewhere</Button>
                </Card.Body>
            </Card>

            <Card className="text-center" bg="secondary" text="light" style={{ width: '80vw' }}>
                <Card.Header>Bio</Card.Header>
                <Card.Body>
                    <Card.Title>A little about me.</Card.Title>
                    <Card.Text>
                    <p>{bioLength === 0 ? "JP gives it his best shot. Always." : ""}</p>
                    <p>{bioLength === 1 ? "James Perey is an aspiring full stack engineer that has just got his wings from General Assembly." 
                + " He aims to merge his previous experience as an engineer to develop amazing solutions to those he deems worthy (i.e. whoever will pay him)" : ""}</p>
                <p>{bioLength === 2 ? "Having built my first computer when he was 17, James Perey is no stranger to complex, yet exciting problems hardware and software provide."
                +"This interest followed him  to forging a path to full stack engineering, and as such he aptly understands front-end, back-end, and all the inbetween-ends." : ""}</p>
                    </Card.Text>
                    <Button variant="dark" onClick={() => props.setBioChoice(0)}>short & Sweet</Button>
                    <Button variant="dark" onClick={() => props.setBioChoice(1)}>Elevator</Button>
                    <Button variant="dark" onClick={() => props.setBioChoice(2)}>Lengthy</Button>
                </Card.Body>
                <Card.Footer className="text-muted">2 days ago</Card.Footer>
            </Card>
        </div>
    )
}

export default HomePage;