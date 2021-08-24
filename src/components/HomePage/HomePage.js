import jpburger from "../images/jpburger.jpg";
import jpjumping from "../images/jpjumping.jpg";
import jpdrink from "../images/jpdrink.jpg";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const HomePage = props => {
    let bioLength = props.selBioChoice;
    let picChoice = props.selPicChoice;
    return (
        <div className="homepage">

            <Card alignment="center"className="text-center " bg="secondary" text="light" style={{ width: '25rem' }}>
                {picChoice === 0 &&
                <Card.Img variant="top" src={jpdrink} alt="profile pic 1"/>
                }
                {picChoice === 1 &&
                <Card.Img variant="top" src={jpburger} alt="profile pic 2"/>
                }
                {picChoice === 2 &&
                <Card.Img variant="top" src={jpjumping} alt="profile pic 3"/>
                }
                <Card.Body>
                    <Card.Title>Photo Options</Card.Title>
                    <Button variant="dark" onClick={() => props.setPicChoice(0)}>Thirsty James</Button>
                    <Button variant="dark" onClick={() => props.setPicChoice(1)}>Generous James</Button>
                    <Button variant="dark" onClick={() => props.setPicChoice(2)}>Excited James</Button>
                    <Card.Title>A little About Me.</Card.Title>
                    <Card.Text>
                    <p>{bioLength === 0 ? "You can only do your best, and boy am I trying. " : ""}</p>
                    <p>{bioLength === 1 ? "James Perey is an aspiring full stack engineer that has just got his wings from General Assembly." 
                + " He aims to merge his previous experience as an engineer to develop amazing solutions to those he deems worthy (i.e. whoever will pay him)" : ""}</p>
                <p>{bioLength === 2 ? "Having built my first computer when he was 17, James Perey is no stranger to complex, yet exciting problems hardware and software provide."
                +"This interest followed him  to forging a path to full stack engineering, and as such he aptly understands front-end, back-end, and all the inbetween-ends." : ""}</p>
                    </Card.Text>
                    <Button variant="dark" onClick={() => props.setBioChoice(0)}>Short & Sweet</Button>
                    <Button variant="dark" onClick={() => props.setBioChoice(1)}>Elevator</Button>
                    <Button variant="dark" onClick={() => props.setBioChoice(2)}>Lengthy</Button>
                </Card.Body>
            </Card>
        </div>
    )
}

export default HomePage;