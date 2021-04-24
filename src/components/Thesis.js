import React from 'react';
import Typical from "react-typical";
import 'photoswipe/dist/photoswipe.css'
import 'photoswipe/dist/default-skin/default-skin.css'

import { Gallery, Item } from 'react-photoswipe-gallery'

const MyGallery = () => (
    <Gallery>
        <Item
            original="images/portfolio/thesis/thumbnail/p1.jpg"
            thumbnail="images/portfolio/thesis/thumbnail/p1.jpg"
            width="1024"
            height="768"
        >
            {({ ref, open }) => (
                <img ref={ref} onClick={open} src="images/portfolio/thesis/p1.jpg" />
            )}
        </Item>
        <Item
            original="images/portfolio/thesis/thumbnail/p2.jpg"
            thumbnail="images/portfolio/thesis/thumbnail/p2.jpg"
            width="1024"
            height="768"
        >
            {({ ref, open }) => (
                <img ref={ref} onClick={open} src="images/portfolio/thesis/p2.jpg" />
            )}
        </Item>
    </Gallery>
)

export const Thesis = () => {
    return (
        <div id="portfolio" style={{ marginTop: "7%" }}>
            <Typical className="section-title" style={{ color: "black" }} steps={["Senior Thesis Exhibition", 1500, "distort.", 1500]} wrapper="h1" />
            <div style={{ margin: "auto", width: "70%" }}>
                <div className="card">
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
                            My senior thesis exhibition distort showcases paintings of figures submerged in water. In my works, the water acts as a boundary between realism and abstraction, clarity and deformation. Space, distortion, and thresholds are all important concepts I explore as I dives into the meditative process of creating.
                        </span>
                    </div>
                </div>
            </div>
            <MyGallery></MyGallery>
        </div>
    )
}