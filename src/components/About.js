import React, { Component } from "react";
import Typical from "react-typical";

const social = [
    {
        "name": "github",
        "url": "https://github.com/lizapressman",
        "class": "fab fa-github"
    },
    {
        "name": "linkedin",
        "url": "https://www.linkedin.com/in/lizapressman/",
        "class": "fab fa-linkedin-in"
    },
    {
        "name": "instagram",
        "url": "https://www.instagram.com/lizapressman_art/",
        "class": "fab fa-instagram"
    }
];

class About extends Component {

    render() {
        var networks = social.map(function (network) {
            return (
                // <span key={network.name} className="m-2" >
                <a href={network.url} target="_blank" rel="noopener noreferrer">
                    <i style={{
                        color: "black", padding: "20px", fontSize: "30px"
                    }} className={network.class}></i>
                </a>
                // </span>
            );
        });

        return (
            <div id="about" className="col-md-12" style={{ marginTop: "50px" }}>
                <br />
                <div className="row center mx-auto mb-5">
                    <div className="col-md-4 mb-5 center">
                        <div className="polaroid">
                            <span>
                                <img
                                    height="250px"
                                    src="/images/myProfile.jpg"
                                    alt="Avatar placeholder"
                                />
                                <br /><br />
                                <Typical steps={["HELLO :))", 1500, "I'M LIZA", 1500]} wrapper="h1" />
                                <div className="social-links">{networks}</div>
                            </span>

                        </div>
                    </div>

                    <div className="col-md-8 center">
                        <div className="col-md-12">
                            <div className="card" style={{ background: "#efe1bd" }}>
                                <div className="card-header" style={{ textAlign: "center" }}>
                                    <h1>ABOUT ME</h1>
                                </div>
                                <div
                                    className="card-body font-trebuchet text-justify ml-3 mr-3"
                                    style={{
                                        height: "auto",
                                        fontSize: "150%",
                                        lineHeight: "200%",
                                    }}
                                >
                                    <span style={{ paddingLeft: "24px" }}>
                                        I am currently a senior at at the University of Rochester (class of 2021) triple majoring in Computer Science, Mathematics, and Studio Arts.
                                        I have a CS concentration in Human Computer Interaction (HCI).
                                    </span>
                                    <br />
                                    <span style={{ paddingLeft: "24px" }}>
                                        After graduation I will be moving to Boston, MA to start my career as a backend software engineer with Datadog!
                                        You can view my past and present work experience <a href="/ArtPortfolio/#/experience">here</a> or take a look at my <a href="/LizaPressmanResume.pdf">resume</a>.
                                    </span>
                                    <br />
                                    <span style={{ paddingLeft: "24px" }}>
                                        I'm also an artist! Feel free to check out my <a href="/ArtPortfolio/#/art">work</a>.
                                        I do a lot of painting but love to play with random material as well.
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
