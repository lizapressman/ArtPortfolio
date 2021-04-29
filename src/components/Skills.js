import React, { Component } from "react";

class Skills extends Component {

    render() {
        var sharedSkills = [
            {
                "name": "Java",
                "class": "devicon-java-plain",
            },
            {
                "name": "React",
                "class": "devicon-react-plain",
            },
            {
                "name": "JavaScript",
                "class": "devicon-javascript-plain",
            },
            {
                "name": "Python",
                "class": "devicon-python-plain",
            },
            {
                "name": "Springboot",
                "class": "devicon-spring-plain",
            },
            {
                "name": "C",
                "class": "devicon-c-plain",
            },
            {
                "name": "C++",
                "class": "devicon-cplusplus-plain",
            },
            {
                "name": "TypeScript",
                "class": "devicon-typescript-plain",
            },
            {
                "name": "MySql",
                "class": "devicon-mysql-plain",
            }
        ];

        var sectionName = " Tech Skills";
        var skills = sharedSkills.map(function (skills, i) {
            return (
                <li className="list-inline-item mx-3" key={i}>
                    <span>
                        <div className="text-center skills-tile">
                            <i className={skills.class} style={{ fontSize: "220%" }}>
                                <p
                                    className="text-center"
                                    style={{ fontSize: "30%", marginTop: "4px" }}
                                >
                                    {skills.name}
                                </p>
                            </i>
                        </div>
                    </span>
                </li>
            );
        });


        return (
            <section id="skills">
                <div className="col-md-12">
                    <div className="col-md-12">
                        <h1 className="section-title">
                            <span className="text-white">{sectionName}</span>
                        </h1>
                    </div>
                    <div className="col-md-12 text-center">
                        <ul className="list-inline mx-auto skill-icon">{skills}</ul>
                    </div>
                </div>
            </section>
        );
    }
}

export default Skills;