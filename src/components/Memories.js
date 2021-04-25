import React from 'react';
import Typical from "react-typical";
import 'photoswipe/dist/photoswipe.css'
import 'photoswipe/dist/default-skin/default-skin.css'

import { Gallery, Item } from 'react-photoswipe-gallery'

const MyGallery = () => (
    <Gallery shareButton={false} zoomButton={false}>
        <Item
            original="images/portfolio/memories/p1.jpg"
            thumbnail="images/portfolio/memories/thumbnail/p1.jpg"
            width="1024"
            height="768"
        >
            {({ ref, open }) => (
                <img ref={ref} onClick={open} src="images/portfolio/memories/thumbnail/p1.jpg" />
            )}
        </Item>
        <Item
            original="images/portfolio/memories/p2.jpg"
            thumbnail="images/portfolio/memories/thumbnail/p2.jpg"
            width="1024"
            height="768"
        >
            {({ ref, open }) => (
                <img ref={ref} onClick={open} src="images/portfolio/memories/thumbnail/p2.jpg" />
            )}
        </Item>
        <Item
            original="images/portfolio/memories/p3.jpg"
            thumbnail="images/portfolio/memories/thumbnail/p3.jpg"
            width="1024"
            height="768"
        >
            {({ ref, open }) => (
                <img ref={ref} onClick={open} src="images/portfolio/memories/thumbnail/p3.jpg" />
            )}
        </Item>
        <Item
            original="images/portfolio/memories/p4.jpg"
            thumbnail="images/portfolio/memories/thumbnail/p4.jpg"
            width="1024"
            height="768"
        >
            {({ ref, open }) => (
                <img ref={ref} onClick={open} src="images/portfolio/memories/thumbnail/p4.jpg" />
            )}
        </Item>
        <Item
            original="images/portfolio/memories/p5.jpg"
            thumbnail="images/portfolio/memories/thumbnail/p5.jpg"
            width="1024"
            height="768"
        >
            {({ ref, open }) => (
                <img ref={ref} onClick={open} src="images/portfolio/memories/thumbnail/p5.jpg" />
            )}
        </Item>
        <Item
            original="images/portfolio/memories/p6.jpg"
            thumbnail="images/portfolio/memories/thumbnail/p6.jpg"
            width="1024"
            height="768"
        >
            {({ ref, open }) => (
                <img ref={ref} onClick={open} src="images/portfolio/memories/thumbnail/p6.jpg" />
            )}
        </Item>
    </Gallery>
)

export const Memories = () => {
    return (
        <div id="portfolio" style={{ marginTop: "50px" }}>
            <Typical className="section-title" style={{ color: "black" }} steps={["Layered Paintings", 1500, "mem.", 1500]} wrapper="h1" />
            <br />
            <div style={{ margin: "auto", width: "80%" }}>
                <div className="card" style={{ background: "#efe1bd" }}>
                    <div
                        className="card-body font-trebuchet text-justify ml-3 mr-3"
                        style={{
                            height: "auto",
                            fontSize: "100%",
                            lineHeight: "200%",
                        }}
                    >
                        <span>
                            The body of work seen here is a culmination of final pieces from my first semester senior studio course. I wanted to focus on very personal memories. Specifically I narrowed down my work to a very exact “recipe” which has consisted of choosing a friend, finding a physical photograph that reminds me of them, rendering it with acrylic paint, and then asking that friend for written words that describe themselves. Finally, I am able to piece all of these components together to create the digital collaged works that can be seen here.
                        </span>
                    </div>
                </div>
                <br />
                <div style={{ textAlign: "center", marginBottom: "30px" }}>
                    <MyGallery />
                </div>
            </div>
        </div>
    )
}