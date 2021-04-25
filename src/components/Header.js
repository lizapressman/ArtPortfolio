import React from 'react';
import Typical from "react-typical";
import { Icon } from '@iconify/react';
import bxPaint from '@iconify-icons/bx/bx-paint';


export const Header = () => {

    // const [checked, setChecked] = useState(false);
    // const [theme, setTheme] = useState("dark");

    // function onThemeSwitchChange() {
    //     setChecked(!checked);
    //     if (theme === "dark")
    //         setTheme("light");
    //     else
    //         setTheme("dark");
    // }

    const HeaderTitleTypeAnimation = React.memo(() => {
        return <Typical className="title-styles" steps={["SENIOR STUDIO ART MAJOR", 1500, "PAINTER", 1500, "SCULPTOR", 1500, "DEVELOPER", 1500]} loop={50} />
    }, (props, prevProp) => true);

    return (
        <header id="home" style={{ height: window.innerHeight - 70, display: 'block' }}>
            <div className="row aligner" style={{ height: '100%' }}>
                <div className="col-md-12">
                    <div>
                        <Icon icon={bxPaint} className="iconify header-icon" />
                        <br />
                        <h1 className="mb-0">
                            <Typical steps={["LIZA PRESSMAN"]} wrapper="p" />
                        </h1>
                        <div className="title-container">
                            <HeaderTitleTypeAnimation />
                        </div>
                        {/* <Switch
                            checked={checked}
                            onChange={onThemeSwitchChange}
                            offColor="#baaa80"
                            onColor="#353535"
                            className="react-switch mx-auto"
                            width={90}
                            height={40}
                            uncheckedIcon={
                                <span
                                    className="iconify"
                                    data-icon="twemoji:crescent-moon"
                                    data-inline="false"
                                    style={{
                                        display: "block",
                                        height: "100%",
                                        fontSize: 25,
                                        textAlign: "end",
                                        marginLeft: "20px",
                                        color: "#353239",
                                    }}
                                ></span>
                            }
                            checkedIcon={
                                <span
                                    className="iconify"
                                    data-icon="noto-v1:sun"
                                    data-inline="false"
                                    style={{
                                        display: "block",
                                        height: "100%",
                                        fontSize: 25,
                                        textAlign: "end",
                                        marginLeft: "10px",
                                        color: "#353239",
                                    }}
                                ></span>
                            }
                            id="icon-switch"
                        /> */}
                    </div>
                </div>
            </div>
        </header>
    );
}


