import "./SideBar.css";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import JPlogo from "../images/jplogo.png";
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
                <Nav.Link variant="dark" eventKey={1} as={Link} to="/about">.About</Nav.Link>
                <hr/>
                <Nav.Link eventKey={2} as={Link} to="/projects">.Projects</Nav.Link>
                <hr/>
                <Nav.Link eventKey={3} as={Link} to="/skills">.Skills</Nav.Link>
                <hr/>
                <Nav.Link eventKey={4} as={Link} to="/art">.Art</Nav.Link>
                <hr/>
                <Nav.Link eventKey={5} as={Link} to="/contact">.Contact</Nav.Link>
                <hr/>
                <a href={Resume} download="james-perey-resume.pdf">.Resume</a>
                <div>
            <span className="fas fa-camera"></span>
            </div>
            </Nav>
        </Navbar>
        </div>

    )

}

export default SideBar;