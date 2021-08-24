import "./SkillsPage.css";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faArchive, faCameraRetro, faFilePowerpoint,
    faImages, faBuilding, faCropAlt, faPencilAlt, faCogs, faGlassMartiniAlt,
    faICursor } from '@fortawesome/free-solid-svg-icons'
//import { Row , Col} from "react-bootstrap";

const SkillsPage = props => {
    return (
        <div className="SkillsPage " >
            <table className="languagestable">
                <thead>
                    <tr>
                        <th colspan="5">
                            Languages
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><FontAwesomeIcon size={"3x"} icon= {['fab', 'js']}/></td>
                        <td><FontAwesomeIcon size={"3x"} icon= {['fab', 'python']}/></td>
                        <td><FontAwesomeIcon size={"3x"} icon= {['fab', 'java']}/></td>
                        <td><FontAwesomeIcon size={"3x"} icon= {['fab', 'html5']}/></td>
                        <td><FontAwesomeIcon size={"3x"} icon= {['fab', 'css3']}/></td>
                        <td><FontAwesomeIcon size={"3x"} icon= {['fab', 'markdown']}/></td>
                    </tr>
                    <tr>
                        <td>Javascript</td>
                        <td>Python</td>
                        <td>Java</td>
                        <td>HTML5</td>
                        <td>CSS3</td>
                        <td>MarkDown</td>
                    </tr>
                </tbody>
            </table>

            <table className="frameworkstable">
                <thead>
                    <tr>
                        <th colspan="5">
                            Frameworks & Libraries
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><FontAwesomeIcon size={"3x"} icon= {['fab', 'react']}/></td>
                        <td><FontAwesomeIcon size={"3x"} icon= {['fab', 'node']}/></td>
                        <td><FontAwesomeIcon size={"3x"} icon= {['fab', 'whmcs']}/></td>
                        <td><FontAwesomeIcon size={"3x"} icon= { faCogs }/></td>
                        <td><FontAwesomeIcon size={"3x"} icon= { faICursor}/></td>
                        <td><FontAwesomeIcon size={"3x"} icon= { faPencilAlt }/></td>
                        <td><FontAwesomeIcon size={"3x"} icon= {['fab', 'bootstrap']}/></td>
                        <td><FontAwesomeIcon size={"3x"} icon= { faGlassMartiniAlt}/></td>
                    </tr>
                    <tr>
                        <td>React</td>
                        <td>Node.js</td>
                        <td>Django</td>
                        <td>express.js</td>
                        <td>jQuery</td>
                        <td>Materialize</td>
                        <td>Bootstrap</td>
                        <td>Gatsby.js</td>
                    </tr>
                </tbody>
            </table>

            <table className="othertable">
                <thead>
                    <tr>
                        <th colspan="5">
                            Other
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><FontAwesomeIcon size={"3x"} icon= {['fab', 'aws']}/></td>
                        <td><FontAwesomeIcon size={"3x"} icon= {['fab', 'mdb']}/></td>
                        <td><FontAwesomeIcon size={"3x"} icon= { faArchive }/></td>
                        <td><FontAwesomeIcon size={"3x"} icon= { faCameraRetro }/></td>
                        <td><FontAwesomeIcon size={"3x"} icon= { faCropAlt }/></td>
                        <td><FontAwesomeIcon size={"3x"} icon= { faFilePowerpoint }/></td>
                        <td><FontAwesomeIcon size={"3x"} icon= { faBuilding }/></td>
                        <td><FontAwesomeIcon size={"3x"} icon= { faImages }/></td>
                        
                    </tr>
                    <tr>
                        <td>AWS</td>
                        <td>MongoDB</td>
                        <td>PostgreSQL</td>
                        <td>Procreate</td>
                        <td>LumaFusion</td>
                        <td>Photoshop</td>
                        <td>Revit</td>
                        <td>IESVE</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default SkillsPage;