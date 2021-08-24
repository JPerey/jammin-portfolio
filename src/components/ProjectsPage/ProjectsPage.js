import "./ProjectsPage.css";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import Button from "react-bootstrap/Button";
import moovsm from "../images/moov-sm.png";
import scpsm from "../images/scp-sm.png";
import tarotsm from "../images/tarot-sm.png";
import heropickersm from "../images/heropicker-sm.png";

const ProjectsPage = props => {
    return (
        <div className="projectspage">
            
            <CardGroup>
            <Card bg="secondary" text="light">
                <Card.Img variant="top" src={ moovsm }/>
                <Card.Body>
                <Card.Title>Moov App</Card.Title>
                <Card.Text>
                    Designed mobile first - this app aims to help users visualize 
                    how their furniture will look in their home by placing furniture 
                    on floorplans and letting the users rearrange to fit.
                </Card.Text>
                <Button variant="dark" href="https://cfc-moov.herokuapp.com/">See Live Demo</Button>
                </Card.Body>
                <Card.Footer>
                <small className="text-light">Last updated August 23, 2021</small>
                </Card.Footer>
            </Card>
            <Card bg="secondary" text="light">
                <Card.Img variant="top" src={ scpsm } />
                <Card.Body>
                <Card.Title>SCP Collector</Card.Title>
                <Card.Text>
                    Collection project to demonstrate CRUD & one-to-many/many-to-many relationships. 
                    A collection app that allows users to add SCP stories sorted by author.
                </Card.Text>
                <Button variant="dark" href="https://scp-collector-1.herokuapp.com/">See Live Demo</Button>
                </Card.Body>
                <Card.Footer>
                <small className="text-light">Last updated July 20, 2021</small>
                </Card.Footer>
            </Card>
            <Card bg="secondary" text="light">
                <Card.Img variant="top" src={ tarotsm } />
                <Card.Body>
                <Card.Title>Tarot Card Diary</Card.Title>
                <Card.Text>
                    Diary app that allows users to get their tarot card 
                    reading done, and save the reading. Once the day is over, the user can update
                    the reading and explain if it was accurate or not.
                </Card.Text>
                <Button variant="dark" href="https://project-2-tarot-diary.herokuapp.com/">See Live Demo</Button>
                </Card.Body>
                <Card.Footer>
                <small className="text-light">Last updated May 4, 2021</small>
                </Card.Footer>
            </Card>
            <Card bg="secondary" text="light">
                <Card.Img variant="top" src={ heropickersm } />
                <Card.Body>
                <Card.Title>Dota 2 Hero Picker</Card.Title>
                <Card.Text>
                    App that helps uncertain players of the steam game, DOTA 2,
                    choose a team of 5 heroes. The app uses several algorithms to determine
                    a "balanced" team or "random" team, based on what the user wants.
                </Card.Text>
                <Button variant="dark" href="https://zen-bhabha-0c70cb.netlify.app/">See Live Demo</Button>
                </Card.Body>
                <Card.Footer>
                <small className="text-light">Last updated March 23, 2021</small>
                </Card.Footer>
            </Card>
            </CardGroup>
        </div>
    )
}

export default ProjectsPage;