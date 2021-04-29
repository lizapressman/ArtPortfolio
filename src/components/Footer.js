import React, { Component } from "react";

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
        "name": "resume",
        "url": "LizaPressmanResume.pdf",
        "class": "fas fa-file-pdf"
    },
    {
        "name": "instagram",
        "url": "https://www.instagram.com/lizapressman_art/",
        "class": "fab fa-instagram"
    }
];

class Footer extends Component {

    render() {
        var networks = social.map(function (network) {
            return (
                <span key={network.name} className="m-4" >
                    <a href={network.url} target="_blank" rel="noopener noreferrer">
                        <i className={network.class}></i>
                    </a>
                </span>
            );
        });


        return (
            <footer>
                <div className="col-md-12">
                    <div className="social-links">{networks}</div>

                    {/* <div className="copyright py-4 text-center"> */}
                    {/* <div className="container"> */}
                    <small>
                        Copyright &copy;{" "} 2021{" "}
                        {"Liza Pressman"}, all rights reserved
                            </small>
                    {/* </div> */}
                    {/* </div> */}
                </div>
            </footer>
        );
    }
}

export default Footer;
