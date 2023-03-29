import React, { useState } from "react";
import Modal from 'react-bootstrap/Modal'

export const Experience = () => {
    const [isDatadogShown, setIsDatadogShown] = useState(false);
    const [isTargetShown, setIsTargetShown] = useState(false);
    const [isDoctorPlanShown, setIsDoctorPlanShown] = useState(false);

    const expandDatadog = () => {
        setIsDatadogShown(!isDatadogShown)
    }

    const expandTarget = () => {
        setIsTargetShown(!isTargetShown)
    }

    const expandDoctorPlan = () => {
        setIsDoctorPlanShown(!isDoctorPlanShown)
    }

    const Datadog = () => {
        return (
            <span className="experience-polaroid" onClick={() => {
                setIsDoctorPlanShown(false);
                setIsTargetShown(false);
                expandDatadog();
            }}>
                <img
                    height="150px"
                    src="logos/datadog.svg"
                    alt="Avatar placeholder"
                />
                <br />
                <h1>Datadog</h1>
            </span>
        )
    }

    const Target = () => {
        return (
            <span className="experience-polaroid" onClick={() => {
                setIsDatadogShown(false);
                setIsDoctorPlanShown(false);
                expandTarget();
            }}>
                <img
                    height="150px"
                    src="logos/target.png"
                    alt="Avatar placeholder"
                />
                <br />
                <h1>Target</h1>
            </span>
        )
    }

    const DoctorPlan = () => {
        return (
            <span className="experience-polaroid" onClick={() => {
                setIsDatadogShown(false);
                setIsTargetShown(false);
                expandDoctorPlan();
            }}>
                <img
                    height="150px"
                    src="logos/doctorplan.jpeg"
                    alt="Avatar placeholder"
                />
                <br />
                <h1>DoctorPlan</h1>
            </span>
        )
    }

    return (
        <>
            <div id="experience" className="col-md-12 center" style={{ marginTop: "100px", paddingBottom: "0px" }}>
                <div className="card" style={{ background: "#efe1bd" }}>
                    <div className="card-header">
                        <h1>WORK EXPERIENCE</h1>
                    </div>
                    <div
                        className="card-body font-trebuchet polaroid"
                        style={{
                            height: "auto",
                            fontSize: "150%",
                            lineHeight: "200%",
                            textAlign: "center"
                        }}
                    >
                        <Datadog />
                        <Target />
                        <DoctorPlan />
                        <br />

                        <Modal
                            show={isDatadogShown}
                            onHide={() => setIsDatadogShown(false)}
                            size="lg"
                            aria-labelledby="contained-modal-title-vcenter"
                            centered
                        >
                            <Modal.Header closeButton>
                                <Modal.Title id="example-custom-modal-styling-title">
                                    Datadog | <b>Serverless App</b>
                                </Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <p><b>Software Engineer II</b> | DEC 2022 - PRESENT</p>
                                <p><b>Software Engineer I</b> | JUN 2021 - DEC 2022</p>
                                {/* <p><b>Devex squad</b></p> */}
                                <div style={{ textAlign: "center" }}>
                                    <div className="language-tag">React</div>
                                    <div className="language-tag">Typescript</div>
                                    <div className="language-tag">Python</div>
                                </div>
                            </Modal.Body>
                        </Modal>

                        <Modal
                            show={isTargetShown}
                            onHide={() => setIsTargetShown(false)}
                            size="lg"
                            aria-labelledby="contained-modal-title-vcenter"
                            centered
                        >
                            <Modal.Header closeButton>
                                <Modal.Title id="example-custom-modal-styling-title">
                                    Target | <b>Software Engineering Intern</b>
                                </Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <p>Worked on the Purchase Orders Team developing with Java, Springboot, jOOQ, and React</p>
                                <ul>
                                    <li>Wrote React components for internal Admin UI</li>
                                    <li>Implemented PostgreSQL queries within Java Springboot back- end and exposed them on rest endpoints</li>
                                    <li>Executed Java Springboot functional and unit tests</li>
                                </ul>
                                <div style={{ textAlign: "center" }}>
                                    <div className="language-tag">Java</div>
                                    <div className="language-tag">Springboot</div>
                                    <div className="language-tag">jOOQ</div>
                                    <div className="language-tag">React</div>
                                </div>
                            </Modal.Body>
                        </Modal>

                        <Modal
                            show={isDoctorPlanShown}
                            onHide={() => setIsDoctorPlanShown(false)}
                            size="lg"
                            aria-labelledby="contained-modal-title-vcenter"
                            centered
                        >
                            <Modal.Header closeButton>
                                <Modal.Title id="example-custom-modal-styling-title">
                                    DoctorPlan | <b>Software Engineering Intern</b>
                                </Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <p>Worked primarily on doctor facing tools</p>
                                <ul>
                                    <li>Used Java to gather and summarize patient data and optimize visual display for surgeons’ use</li>
                                    <li>Used Javascript to convert data to natural language</li>
                                    <li>Used Vue.js to develop a questionnaire web application</li>
                                </ul>
                                <div style={{ textAlign: "center" }}>
                                    <div className="language-tag">Java</div>
                                    <div className="language-tag">Javascript</div>
                                    <div className="language-tag">Vue.js</div>
                                </div>
                            </Modal.Body>
                        </Modal>
                    </div>
                </div>
            </div>
            <br />
            <div id="experience" className="col-md-12 center main-projects" style={{ marginTop: "0px", margin: "auto", width: "95%" }}>

                <div className="card" style={{ background: "#efe1bd", marginBottom: "50px" }}>
                    <div className="card-header">
                        <h1>PROJECTS</h1>
                    </div>
                    <div
                        className="card-body font-trebuchet polaroid"
                        style={{
                            height: "auto",
                            fontSize: "150%",
                            lineHeight: "200%",
                            textAlign: "center"
                        }}
                    >
                        <div className="project">
                            <a href="https://www.github.com/lizapressman/PersonalWebsite" target="_blank" rel="noopener noreferrer">
                                <i style={{
                                    color: "black", fontSize: "18px/24px", display: "inline"
                                }} className="fab fa-github"></i>
                                {' '} Personal Website
                            </a>

                            <p>Personal portfolio site written in React using Javascript and custom CSS</p>
                            <div className="language-tag">React</div>
                            <div className="language-tag">Javascript</div>
                            <div className="language-tag">CSS</div>
                        </div>

                        <div className="project">
                            <a href="https://github.com/lizapressman/ResumeToWebsiteWebsite" target="_blank" rel="noopener noreferrer">
                                <i style={{
                                    color: "black", fontSize: "18px/24px", display: "inline"
                                }} className="fab fa-github"></i>
                                {' '} Resume To Website UI
                            </a>
                            <br />
                            <a href="https://github.com/lizapressman/ResumeToWebsite" target="_blank" rel="noopener noreferrer">
                                <i style={{
                                    color: "black", fontSize: "18px/24px", display: "inline"
                                }} className="fab fa-github"></i>
                                {' '} Resume To Website Backend
                            </a>

                            <p>React website that takes user inputted resume and parses it using Python backend to publish resulting HTML portfolio site</p>
                            <div className="language-tag">Python</div>
                            <div className="language-tag">React</div>
                            <div className="language-tag">Typescript</div>
                            <div className="language-tag">Flask</div>
                        </div>

                        <div className="project">
                            <a href="https://github.com/Mayshinlyan/TherapyJournalling" target="_blank" rel="noopener noreferrer">
                                <i style={{
                                    color: "black", fontSize: "18px/24px", display: "inline"
                                }} className="fab fa-github"></i>
                                {' '} Therapy Journaling Application
                            </a>

                            <p>Application using MERN stack for personalized journaling with automated feedback based on mood &amp; text analysis</p>
                            <div className="language-tag">MERN</div>
                        </div>

                        <div className="project">
                            <a href="https://github.com/lizapressman/ConnectFour" target="_blank" rel="noopener noreferrer">
                                <i style={{
                                    color: "black", fontSize: "18px/24px", display: "inline"
                                }} className="fab fa-github"></i>
                                {' '} Connect Four AI
                            </a>
                            <p>Implementation of Connect Four using a minimax algorithm along with a heuristic function and alpha-beta pruning (with fixed depth cutoff)</p>
                            <div className="language-tag">Java</div>
                        </div>
                        <br />
                    </div>
                </div>
            </div>
        </>
    )
}


// class Experience extends Component {

//     render() {
//         return (
//             <div id="experience" className="col-md-12 center" style={{ marginTop: "100px" }}>
//                 <div className="card" style={{ background: "#efe1bd" }}>
//                     <div className="card-header" style={{ textAlign: "center" }}>
//                         <h1>EXPERIENCE</h1>
//                     </div>
//                     <div className="polaroid experience-polaroid">
//                         <span className="experience-polaroid" >
//                             <img
//                                 height="150px"
//                                 src="/logos/datadog.svg"
//                                 alt="Avatar placeholder"
//                             />
//                             <br /><br />
//                             <h1>Datadog</h1>
//                         </span>
//                         <span className="experience-polaroid">
//                             <img
//                                 height="150px"
//                                 src="/logos/target.png"
//                                 alt="Avatar placeholder"
//                             />
//                             <br /><br />
//                             <h1>Target</h1>
//                         </span>
//                         <span className="experience-polaroid">
//                             <img
//                                 height="150px"
//                                 src="/logos/doctorplan.jpeg"
//                                 alt="Avatar placeholder"
//                             />
//                             <br /><br />
//                             <h1>DoctorPlan</h1>
//                         </span>
//                     </div>
//                 </div>
//             </div>
//         );
//     }
// }

export default Experience;
