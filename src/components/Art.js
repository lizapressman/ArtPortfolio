import React, { Component } from "react";
import Typical from "react-typical";

class Art extends Component {
    render() {
        return (
            <div id="art" style={{ marginTop: "70px", marginBottom: "30px" }}>
                <div style={{ margin: "auto", width: "80%" }}>
                    <div className="card" style={{ background: "#efe1bd" }}>
                        <div className="card-header" style={{ paddingBottom: "0px" }}>
                            <h1>ABOUT ME <Typical steps={["... as an artist"]} /></h1>
                        </div>
                        <div
                            className="card-body font-trebuchet text-justify ml-3 mr-3"
                            style={{
                                height: "auto",
                                fontSize: "150%",
                                lineHeight: "200%",
                            }}
                        >
                            <span className="wave center">Bio</span>
                            <br />
                            <span style={{ paddingLeft: "24px" }}>
                                I grew up in the Bay Area, CA and will complete my degrees in Studio Arts, Computer Science, and Mathematics in May 2021 from the University of Rochester. Upon graduation, I will be relocating to Boston, MA to start my career as a Software Engineer. My work has been shown in multiple exhibitions at the University of Rochester’s Sage Art Center.
                            </span>
                            <br /><br />
                            <span className="wave center">Statement</span>
                            <br />
                            <span style={{ paddingLeft: "24px" }}>
                                My work often addresses my personal experiences and journeys growing up in the Bay Area, California and currently living in Rochester, NY. I have always struggled to convey my thoughts and feelings through words so, from a young age, I used art as an alternative way to express myself.
                            </span>
                            <br />
                            <span style={{ paddingLeft: "24px" }}>
                                My senior thesis exhibition distort showcases paintings of figures submerged in water. In my works, the water acts as a boundary between realism and abstraction, clarity and deformation. Space, distortion, and thresholds are all important concepts I explore as I dive into the meditative process of creating.
                            </span>
                            <br />
                            <span style={{ paddingLeft: "24px" }}>
                                Much of my past work is inspired by found objects with the themes often reflecting the places and items I’ve explored. In that work, I play with the importance of material and how the medium and marks relate to the different stories I am trying to tell. This relation of material to meaning is the driving force behind much of my past works and still inspires my current explorations as I shift my interest towards painted form.
                            </span>
                            <br /><br />
                            <span key="cv" className="m-4 social-links center">
                                CV:&nbsp;
                                <a href="/lizapressman_cv.pdf" target="_blank" rel="noopener noreferrer">
                                    <i style={{ color: "black" }} className="fas fa-file-pdf"></i>
                                </a>
                                <span style={{ paddingLeft: "24px" }}></span>
                            </span>
                        </div>
                    </div>
                </div>

                <div
                    className="col-lg-12"
                    style={{
                        cursor: "pointer",
                        marginTop: "20px",
                        background: "#70abaf"
                    }}
                >
                    {/* <div className="card" style={{ background: "#70abaf" }}> */}
                    <h1 className="section-title">EXHIBITIONS</h1>

                    <div className="row center mx-auto">
                        <div className="col-lg-4 center">
                            <a href="/ArtPortfolio/#/thesis" rel="noopener noreferrer">
                                <div className="polaroid">
                                    <span>
                                        <img
                                            height="290px"
                                            src="/images/portfolio/thesis/p4.jpg"
                                            alt="Avatar placeholder"
                                        />
                                        <br /><br />
                                        <h1>DISTORT</h1>
                                    </span>
                                </div>
                            </a>
                        </div>

                        <div className="col-lg-4 center">
                            <a href="/ArtPortfolio/#/memories" rel="noopener noreferrer">
                                <div className="polaroid">
                                    <span>
                                        <img
                                            height="290px"
                                            src="/images/portfolio/memories/single.jpg"
                                            alt="Avatar placeholder"
                                        />
                                        <br /><br />
                                        <h1>MEM</h1>
                                    </span>
                                </div>
                            </a>
                        </div>

                        <div className="col-lg-4 center">
                            <a href="/ArtPortfolio/#/other" rel="noopener noreferrer">
                                <div className="polaroid">
                                    <span>
                                        <img
                                            height="290px"
                                            src="/images/portfolio/other/p1.jpg"
                                            alt="Avatar placeholder"
                                        />
                                        <br /><br />
                                        <h1>MISCELLANEOUS</h1>
                                    </span>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
                {/* </div> */}

            </div >

        );
    }
}

export default Art;
