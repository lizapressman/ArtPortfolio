import React from 'react';
import Typical from "react-typical";
import 'photoswipe/dist/photoswipe.css'
import 'photoswipe/dist/default-skin/default-skin.css'

import { Gallery, Item } from 'react-photoswipe-gallery'

const MyGallery = () => (
    <Gallery shareButton={false} zoomButton={false}>
        <Item
            original="images/portfolio/thesis/p4.jpg"
            thumbnail="images/portfolio/thesis/thumbnail/p4.jpg"
            width="1024"
            height="768"
            title="Liza Pressman <br /> stretched, 2021 <br /> acrylic on unstretched canvas"
        >
            {({ ref, open }) => (
                <img ref={ref} onClick={open} src="images/portfolio/thesis/thumbnail/p4.jpg" />
            )}
        </Item>
        <Item
            original="images/portfolio/thesis/p1.jpg"
            thumbnail="images/portfolio/thesis/thumbnail/p1.jpg"
            width="1024"
            height="768"
            title="Liza Pressman <br /> bobble, 2021 <br /> acrylic on unstretched canvas"
        >
            {({ ref, open }) => (
                <img ref={ref} onClick={open} src="images/portfolio/thesis/thumbnail/p1.jpg" />
            )}
        </Item>
        <Item
            original="images/portfolio/thesis/p5.jpg"
            thumbnail="images/portfolio/thesis/thumbnail/p5.jpg"
            width="1024"
            height="768"
            title="Liza Pressman <br /> space, 2021 <br /> acrylic on unstretched canvas"
        >
            {({ ref, open }) => (
                <img ref={ref} onClick={open} src="images/portfolio/thesis/thumbnail/p5.jpg" />
            )}
        </Item>
        <Item
            original="images/portfolio/thesis/p2.jpg"
            thumbnail="images/portfolio/thesis/thumbnail/p2.jpg"
            width="1024"
            height="768"
            title="Liza Pressman <br /> shallow, 2021 <br /> acrylic on unstretched canvas"
        >
            {({ ref, open }) => (
                <img ref={ref} onClick={open} src="images/portfolio/thesis/thumbnail/p2.jpg" />
            )}
        </Item>
        <Item
            original="images/portfolio/thesis/p3.jpg"
            thumbnail="images/portfolio/thesis/thumbnail/p3.jpg"
            width="1024"
            height="768"
            title="Liza Pressman <br /> beneath, 2021 <br /> acrylic on unstretched canvas"
        >
            {({ ref, open }) => (
                <img ref={ref} onClick={open} src="images/portfolio/thesis/thumbnail/p3.jpg" />
            )}
        </Item>

    </Gallery>
)

export const Thesis = () => {
    return (
        <div id="portfolio" style={{ marginTop: "50px" }}>
            <Typical className="section-title" style={{ color: "black" }} steps={["Senior Thesis Exhibition", 1500, "distort.", 1500]} wrapper="h1" />
            <div style={{ margin: "auto", width: "80%" }}>
                <div className="card" >
                    <div className="card-header">
                    </div>
                    <div
                        className="card-body font-trebuchet text-justify ml-3 mr-3"
                        style={{
                            height: "auto",
                            fontSize: "100%",
                            lineHeight: "200%",
                        }}
                    >
                        <span>
                            My senior thesis exhibition "distort." showcases paintings of figures submerged in water. In my works, the water acts as a boundary between realism and abstraction, clarity and deformation. Space, distortion, and thresholds are all important concepts I explore as I dives into the meditative process of creating.
                        </span>
                    </div>
                </div>
                <div style={{ textAlign: "center", marginBottom: "100px" }}>
                    <MyGallery />
                </div>
            </div>
        </div>
    )
}