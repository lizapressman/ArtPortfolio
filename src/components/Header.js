import React from "react";
import Typical from "react-typical";

export const Header = () => {
  const HeaderTitleTypeAnimation = React.memo(
    () => {
      return (
        <div>
          <Typical
            className="title-styles"
            steps={[1300, "SOFTWARE ENGINEER AT DATADOG", 1500]}
            loop={Infinity}
          />
          <Typical
            className="title-styles"
            steps={[3200, "PAINTER IN MY FREE TIME"]}
            loop={Infinity}
          />
        </div>
      );
    },
    (props, prevProp) => true
  );

  return (
    <header
      id="header"
      style={{ height: window.innerHeight - 70, display: "block" }}
    >
      <div className="row aligner" style={{ height: "50%" }}>
        <div>
          <div className="polaroid header-polaroid">
            <span style={{ borderRadius: "50%", background: "#70abaf" }}>
              <img
                style={{ borderRadius: "50%" }}
                height="250px"
                src="images/animation.gif"
                alt="Avatar placeholder"
              />
            </span>
          </div>
          <Typical steps={["Hey, I'm Liza!", 1500]} wrapper="h1" />
          <HeaderTitleTypeAnimation />
        </div>
      </div>
    </header>
  );
};
