import "./SkillsPage.module.css";
import React from "react";
import { Row , Col} from "react-bootstrap";

const SkillsPage = props => {
    return (
        <div className="SkillsPage " >
            <div className= "languages">
                <Col xs={12}>
                <Row center="xs">
                   <Col xs={6}><h2>Languages</h2> </Col>
                </Row>
                </Col>
                <Row >
                    <Col><h4>Javascript</h4></Col>
                    <Col><h4>Python</h4></Col>
                    <Col><h4>HTML5</h4></Col>
                    <Col><h4>CSS3</h4></Col>
                    <Col><h4>Markdown</h4></Col>
                </Row>
            </div>
            <div className= "Frameworks-Libraries">
                <h2>Frameworks/Libraries</h2>
                <Row>
                <Col><h4>React</h4></Col>
                <Col><h4>Node.js</h4></Col>
                <Col><h4>django</h4></Col>
                <Col><h4>express.js</h4></Col>
                <Col><h4>jQuery</h4></Col>
                </Row>
                <Row>
                <Col><h4>Materialize</h4></Col>
                <Col><h4>Bootstrap</h4></Col>
                <Col><h4>GatsbyJS</h4></Col>
                </Row>
                
            </div>
            <div className= "Other">
                <h2>Other</h2>
                <Row>
                <Col><h4>AWS</h4></Col>
                <Col><h4>MongoDB</h4></Col>
                <Col><h4>PostgreSQL</h4></Col>
                <Col><h4>Procreate</h4></Col>
                <Col><h4>Lumafusion</h4></Col>
                </Row>
                <Row>
                <Col><h4>Revit</h4></Col>
                <Col><h4>IESVE</h4></Col>
                </Row>
                
            </div>
        </div>
    )
}

export default SkillsPage;