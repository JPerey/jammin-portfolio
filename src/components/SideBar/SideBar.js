import "./SideBar.css";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import JPlogo from "../images/jplogo.GIF";
import "bootstrap/dist/css/bootstrap.css";
import Resume from "../Resume/jamespereyresume.pdf";


const SideBar = props => {
    return (
        <div className="SideBar">
        <Navbar >
            
            <Nav fill className="flex-column">
                <Navbar.Brand as={Link} to="/" >
                <img
                    src={JPlogo}
                    width="300"
                    height="300"
                    rounded="true"
                    className="d-inline-block align-top"
                    alt="React Bootstrap logo"/>
            </Navbar.Brand>
                <hr/>
                <Nav.Link eventKey={1} as={Link} to="/projects">.Projects</Nav.Link>
                <hr/>
                <Nav.Link eventKey={2} as={Link} to="/skills">.Skills</Nav.Link>
                <hr/>
                <Nav.Link eventKey={3} as={Link} to="/art">.Art</Nav.Link>
                <hr/>
                <Nav.Link eventKey={4} as={Link} to="/contact">.Contact</Nav.Link>
                <hr/>
                <a href={Resume} download="james-perey-resume.pdf">.Resume</a>
                <div>
            <span>
                <a href="https://www.linkedin.com/in/jamjamperey/"><FontAwesomeIcon icon= {['fab', 'linkedin']}/></a>
                <a href="https://github.com/JPerey"><FontAwesomeIcon icon= {['fab', 'github']}/></a>
                <a href="https://jamjamperey.artstation.com/"><FontAwesomeIcon icon= {['fab', 'artstation']}/></a>
                <a href="https://www.instagram.com/pb.n.jam/"><FontAwesomeIcon icon= {['fab', 'instagram']}/></a>
            </span>
            </div>
            </Nav>
        </Navbar>
        </div>

    )

}

export default SideBar;