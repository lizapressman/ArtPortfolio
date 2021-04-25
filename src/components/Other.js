import React from 'react';
import Typical from "react-typical";
import 'photoswipe/dist/photoswipe.css'
import 'photoswipe/dist/default-skin/default-skin.css'

import { Gallery, Item } from 'react-photoswipe-gallery'

const MyGallery = () => (
    <Gallery shareButton={false} zoomButton={false}>
        <Item
            original="images/portfolio/other/p1.jpg"
            thumbnail="images/portfolio/other/thumbnail/p1.jpg"
            width="1024"
            height="768"
        >
            {({ ref, open }) => (
                <img ref={ref} onClick={open} src="images/portfolio/other/thumbnail/p1.jpg" />
            )}
        </Item>
        <Item
            original="images/portfolio/other/p2.jpg"
            thumbnail="images/portfolio/other/thumbnail/p2.jpg"
            width="1024"
            height="768"
        >
            {({ ref, open }) => (
                <img ref={ref} onClick={open} src="images/portfolio/other/thumbnail/p2.jpg" />
            )}
        </Item>
        <Item
            original="images/portfolio/other/p3.jpg"
            thumbnail="images/portfolio/other/thumbnail/p3.jpg"
            width="1024"
            height="768"
        >
            {({ ref, open }) => (
                <img ref={ref} onClick={open} src="images/portfolio/other/thumbnail/p3.jpg" />
            )}
        </Item>
        <Item
            original="images/portfolio/other/p4.jpg"
            thumbnail="images/portfolio/other/thumbnail/p4.jpg"
            width="1024"
            height="768"
        >
            {({ ref, open }) => (
                <img ref={ref} onClick={open} src="images/portfolio/other/thumbnail/p4.jpg" />
            )}
        </Item>
        <Item
            original="images/portfolio/other/p5.jpg"
            thumbnail="images/portfolio/other/thumbnail/p5.jpg"
            width="1024"
            height="768"
        >
            {({ ref, open }) => (
                <img ref={ref} onClick={open} src="images/portfolio/other/thumbnail/p5.jpg" />
            )}
        </Item>
        <Item
            original="images/portfolio/other/p6.jpg"
            thumbnail="images/portfolio/other/thumbnail/p6.jpg"
            width="1024"
            height="768"
        >
            {({ ref, open }) => (
                <img ref={ref} onClick={open} src="images/portfolio/other/thumbnail/p6.jpg" />
            )}
        </Item>
        <Item
            original="images/portfolio/other/p7.jpg"
            thumbnail="images/portfolio/other/thumbnail/p7.jpg"
            width="1024"
            height="768"
        >
            {({ ref, open }) => (
                <img ref={ref} onClick={open} src="images/portfolio/other/thumbnail/p7.jpg" />
            )}
        </Item>
        <Item
            original="images/portfolio/other/p8.jpg"
            thumbnail="images/portfolio/other/thumbnail/p8.jpg"
            width="1024"
            height="768"
        >
            {({ ref, open }) => (
                <img ref={ref} onClick={open} src="images/portfolio/other/thumbnail/p8.jpg" />
            )}
        </Item>
        <Item
            original="images/portfolio/other/p9.jpg"
            thumbnail="images/portfolio/other/thumbnail/p9.jpg"
            width="1024"
            height="768"
        >
            {({ ref, open }) => (
                <img ref={ref} onClick={open} src="images/portfolio/other/thumbnail/p9.jpg" />
            )}
        </Item>
        <Item
            original="images/portfolio/other/p10.jpg"
            thumbnail="images/portfolio/other/thumbnail/p10.jpg"
            width="1024"
            height="768"
        >
            {({ ref, open }) => (
                <img ref={ref} onClick={open} src="images/portfolio/other/thumbnail/p10.jpg" />
            )}
        </Item>
        <Item
            original="images/portfolio/other/p11.jpg"
            thumbnail="images/portfolio/other/thumbnail/p11.jpg"
            width="1024"
            height="768"
        >
            {({ ref, open }) => (
                <img ref={ref} onClick={open} src="images/portfolio/other/thumbnail/p11.jpg" />
            )}
        </Item>
        <Item
            original="images/portfolio/other/p12.jpg"
            thumbnail="images/portfolio/other/thumbnail/p12.jpg"
            width="1024"
            height="768"
        >
            {({ ref, open }) => (
                <img ref={ref} onClick={open} src="images/portfolio/other/thumbnail/p12.jpg" />
            )}
        </Item>
        <Item
            original="images/portfolio/other/p13.jpg"
            thumbnail="images/portfolio/other/thumbnail/p13.jpg"
            width="1024"
            height="768"
        >
            {({ ref, open }) => (
                <img ref={ref} onClick={open} src="images/portfolio/other/thumbnail/p13.jpg" />
            )}
        </Item>
        <Item
            original="images/portfolio/other/p14.png"
            thumbnail="images/portfolio/other/thumbnail/p14.png"
            width="1024"
            height="768"
        >
            {({ ref, open }) => (
                <img ref={ref} onClick={open} src="images/portfolio/other/thumbnail/p14.png" />
            )}
        </Item>
        <Item
            original="images/portfolio/other/p15.jpg"
            thumbnail="images/portfolio/other/thumbnail/p15.jpg"
            width="1024"
            height="768"
        >
            {({ ref, open }) => (
                <img ref={ref} onClick={open} src="images/portfolio/other/thumbnail/p15.jpg" />
            )}
        </Item>
        <Item
            original="images/portfolio/other/p16.png"
            thumbnail="images/portfolio/other/thumbnail/p16.png"
            width="1024"
            height="768"
        >
            {({ ref, open }) => (
                <img ref={ref} onClick={open} src="images/portfolio/other/thumbnail/p16.png" />
            )}
        </Item>
        <Item
            original="images/portfolio/other/p17.png"
            thumbnail="images/portfolio/other/thumbnail/p17.png"
            width="1024"
            height="768"
        >
            {({ ref, open }) => (
                <img ref={ref} onClick={open} src="images/portfolio/other/thumbnail/p17.png" />
            )}
        </Item>
        <Item
            original="images/portfolio/other/p18.png"
            thumbnail="images/portfolio/other/thumbnail/p18.png"
            width="1024"
            height="768"
        >
            {({ ref, open }) => (
                <img ref={ref} onClick={open} src="images/portfolio/other/thumbnail/p18.png" />
            )}
        </Item>
        <Item
            original="images/portfolio/other/p19.jpg"
            thumbnail="images/portfolio/other/thumbnail/p19.jpg"
            width="1024"
            height="768"
        >
            {({ ref, open }) => (
                <img ref={ref} onClick={open} src="images/portfolio/other/thumbnail/p19.jpg" />
            )}
        </Item>
    </Gallery>
)

export const Other = () => {
    return (
        <div id="portfolio" style={{ marginTop: "50px" }}>
            <Typical className="section-title" style={{ color: "black" }} steps={["Miscellaneous Works", 1500]} wrapper="h1" />
            <br />
            <div style={{ margin: "auto", width: "90%" }}>
                <div style={{ textAlign: "center", marginBottom: "30px" }}>
                    <MyGallery />
                </div>
            </div>
        </div>
    )
}