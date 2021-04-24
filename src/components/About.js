import React, { Component } from "react";
import Typical from "react-typical";

class About extends Component {
    render() {
        return (
            <div id="about" className="col-md-12" style={{ marginTop: "7%" }}>
                {/* <h1 style={{ color: "black" }}>
                    <span>ABOUT</span>
                </h1> */}
                <br />
                <div className="row center mx-auto mb-5">
                    <div className="col-md-4 mb-5 center">
                        <div className="polaroid">
                            <span style={{ cursor: "auto" }}>
                                <img
                                    height="250px"
                                    src="images/myProfile.jpg"
                                    alt="Avatar placeholder"
                                />
                                <br /><br />
                                <Typical steps={["HELLO :))", 1500, "I'M LIZA", 1500]} wrapper="h1" />
                            </span>
                        </div>
                    </div>

                    <div className="col-md-8 center">
                        <div className="col-md-12">
                            <div className="card">
                                <div className="card-header">
                                </div>
                                <div
                                    className="card-body font-trebuchet text-justify ml-3 mr-3"
                                    style={{
                                        height: "auto",
                                        fontSize: "132%",
                                        lineHeight: "200%",
                                    }}
                                >
                                    <span className="wave">Artist Bio</span>
                                    <br />
                                    <span style={{ paddingLeft: "24px" }}>
                                        Liza Pressman grew up in the Bay Area, CA. She will complete her degrees in Studio Arts, Computer Science, and Mathematics in May 2021 from the University of Rochester. Upon graduation, she will be relocating to Boston, MA to start her career as a Software Engineer. Pressman’s work has been shown in multiple exhibitions at the University of Rochester’s Sage Art Center.
                                    </span>
                                    <br /><br />
                                    <span className="wave">Artist Statement</span>
                                    <br />
                                    <span style={{ paddingLeft: "24px" }}>
                                        Liza Pressman’s work primarily addresses her personal experiences and journeys growing up in the Bay Area, California and currently living in Rochester, NY. She has always struggled to convey her thoughts and feelings through words so, from a young age, she used art as an alternative way to express herself.
                                    </span>
                                    <br />
                                    <span style={{ paddingLeft: "24px" }}>
                                        Her senior thesis exhibition distort showcases paintings of figures submerged in water. In her works, the water acts as a boundary between realism and abstraction, clarity and deformation. Space, distortion, and thresholds are all important concepts she explores as she dives into the meditative process of creating.
                                    </span>
                                    <br />
                                    <span style={{ paddingLeft: "24px" }}>
                                        Much of her past work is inspired by found objects with the themes often reflecting the places and items she explores. In that work, she plays with the importance of material and how the medium and marks relate to the different stories she is trying to tell. This relation of material to meaning is the driving force behind much of her past works and still inspires her current explorations as she explores her interest in painted form.
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        );
    }
}

export default About;
