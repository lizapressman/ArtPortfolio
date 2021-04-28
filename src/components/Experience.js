import React, { useState } from "react";

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

    const closeAll = () => {
        setIsDatadogShown(false);
        setIsDoctorPlanShown(false);
        setIsTargetShown(false);
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
                    src="/logos/datadog.svg"
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
                    src="/logos/target.png"
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
                    src="/logos/doctorplan.jpeg"
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
                    <div className="card-header" style={{ textAlign: "center" }}>
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
                        {isDatadogShown && (
                            <span style={{ textAlign: "left" }}>
                                <h1>Datadog</h1>
                                <p>Working on the Java APM team</p>
                            </span>
                        )
                        }
                        {isTargetShown && (
                            <span style={{ textAlign: "left" }}>
                                <h1>Target</h1>
                                <p>Working on the Purchase Orders Team developing with Java, Springboot, jOOQ, and React</p>
                                <ul>
                                    <li>Writing React components for internal Admin UI</li>
                                    <li>Writing PostgreSQL queries within Java Springboot backend and exposing them on rest endpoints</li>
                                    <li>Writing Java Springboot functional and unit tests</li>
                                </ul>
                            </span>
                        )
                        }
                        {isDoctorPlanShown && (
                            <span style={{ textAlign: "left" }}>
                                <h1>DoctorPlan</h1>
                                <p>Worked primarily on doctor facing tools</p>
                                <ul>
                                    <li>Used Java to gather and summarize patient data and optimize visual display for surgeons’ use</li>
                                    <li>Used Javascript to convert data to natural language</li>
                                    <li>Used Vue.js to develop a questionnaire web application</li>
                                </ul>
                            </span>
                        )
                        }
                    </div>
                </div>
            </div>
            <br />
            <div id="experience" className="col-md-12 center" style={{ marginTop: "0px", marginBottom: "30px" }}>
                <div className="card" style={{ background: "#efe1bd" }}>
                    <div className="card-header" style={{ textAlign: "center" }}>
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
                        <span>
                            <a href="https://www.github.com/lizapressman/PersonalWebsite" target="_blank" rel="noopener noreferrer">
                                <i style={{
                                    color: "black", fontSize: "18px/24px", display: "inline"
                                }} className="fab fa-github"></i>
                                {' '} Personal Website
                            </a>

                            <p>Personal portfolio site written in React using Typescript and custom CSS</p>
                            <div className="language-tag">React</div>
                            <div className="language-tag">Javascript</div>
                            <div className="language-tag">CSS</div>
                        </span>

                        <span>
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
                            <div className="language-tag">Flask</div>
                        </span>

                        <span>
                            <a href="https://github.com/Mayshinlyan/TherapyJournalling" target="_blank" rel="noopener noreferrer">
                                <i style={{
                                    color: "black", fontSize: "18px/24px", display: "inline"
                                }} className="fab fa-github"></i>
                                {' '} Therapy Journaling Application
                            </a>

                            <p>Implementation of Connect Four using a minimax algorithm along with a heuristic function and alpha-beta pruning (with fixed depth cutoff)</p>
                            <div className="language-tag">MERN</div>
                        </span>

                        <span>
                            <a href="https://github.com/lizapressman/ConnectFour" target="_blank" rel="noopener noreferrer">
                                <i style={{
                                    color: "black", fontSize: "18px/24px", display: "inline"
                                }} className="fab fa-github"></i>
                                {' '} Connect Four AI
                            </a>
                            <p>Implementation of Connect Four using a minimax algorithm along with a heuristic function and alpha-beta pruning (with fixed depth cutoff)</p>
                            <div className="language-tag">Java</div>
                        </span>
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
