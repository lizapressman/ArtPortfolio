import React from 'react';
import Typical from "react-typical";
import { Icon } from '@iconify/react';
import bxPaint from '@iconify-icons/bx/bx-paint';

export const Header = () => {

    const HeaderTitleTypeAnimation = React.memo(() => {
        return (
            <div>
                <Typical className="title-styles" steps={[1200, "I'm a painter", 1000, "I'm a sculptor", 1000, "I'm a developer - ", 6600, "- PAINTER -"]} />
                <Typical className="title-styles" steps={[7000, "I even made this website!", 4100, "- SCULPTOR -"]} />
                <Typical className="title-styles" steps={[10000, "Click around a bit :)", 1800, "- DEVELOPER -"]} />
            </div >
        )
    }, (props, prevProp) => true);

    return (
        <header id="home" style={{ height: window.innerHeight - 70, display: 'block' }}>
            <div className="row aligner" style={{ height: '60%' }}>
                <div className="col-md-12">
                    <div>
                        <Icon icon={bxPaint} className="iconify header-icon" />
                        <br />
                        <h1 className="mb-0">
                            <Typical steps={["Hi, I'm Liza"]} wrapper="p" />
                        </h1>
                        <div className="title-container">
                            <HeaderTitleTypeAnimation />
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}


