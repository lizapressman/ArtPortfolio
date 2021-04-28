import React from 'react';
import Typical from "react-typical";

export const Header = () => {

    const HeaderTitleTypeAnimation = React.memo(() => {
        return <Typical className="title-styles" steps={["ENGINEER", 1500, "ARTIST", 1500, "DEVELOPER", 1500, "DESIGNER", 1500]} loop={Infinity} />
    }, (props, prevProp) => true);

    return (
        <header id="header" style={{ height: window.innerHeight - 50, display: 'block' }}>
            <div className="row aligner" style={{ height: '50%' }}>
                <div className="col-md-12">
                    <div>
                        <div className="polaroid header-polaroid">
                            <span>
                                <img
                                    height="300px"
                                    src="/images/header.jpg"
                                    alt="Avatar placeholder"
                                />
                            </span>
                        </div>
                        <Typical steps={["HEY, I'M LIZA!", 1500]} wrapper="h1" />
                        <div>
                            <HeaderTitleTypeAnimation />
                        </div>
                    </div>
                </div>
            </div>
        </header >
    );
}


