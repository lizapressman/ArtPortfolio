import React from 'react';
import Typical from "react-typical";
import 'photoswipe/dist/photoswipe.css'
import 'photoswipe/dist/default-skin/default-skin.css'

import { Gallery, Item } from 'react-photoswipe-gallery'
import ImageGallery from 'react-image-gallery';

const MyGallery = () => (
    <Gallery shareButton={false} zoomButton={false}>
        <Item
            original="images/portfolio/other/p1.jpg"
            thumbnail="images/portfolio/other/thumbnail/p1.jpg"
            width="1024"
            height="768"
        >
            {({ ref, open }) => (
                <img ref={ref} onClick={open} src="images/portfolio/other/thumbnail/p1.jpg" alt="" />
            )}
        </Item>
        <Item
            original="images/portfolio/other/p2.jpg"
            thumbnail="images/portfolio/other/thumbnail/p2.jpg"
            width="1024"
            height="768"
        >
            {({ ref, open }) => (
                <img ref={ref} onClick={open} src="images/portfolio/other/thumbnail/p2.jpg" alt="" />
            )}
        </Item>
        <Item
            original="images/portfolio/other/p3.jpg"
            thumbnail="images/portfolio/other/thumbnail/p3.jpg"
            width="1024"
            height="768"
        >
            {({ ref, open }) => (
                <img ref={ref} onClick={open} src="images/portfolio/other/thumbnail/p3.jpg" alt="" />
            )}
        </Item>
        <Item
            original="images/portfolio/other/p4.jpg"
            thumbnail="images/portfolio/other/thumbnail/p4.jpg"
            width="1024"
            height="768"
        >
            {({ ref, open }) => (
                <img ref={ref} onClick={open} src="images/portfolio/other/thumbnail/p4.jpg" alt="" />
            )}
        </Item>
        <Item
            original="images/portfolio/other/p5.jpg"
            thumbnail="images/portfolio/other/thumbnail/p5.jpg"
            width="1024"
            height="768"
        >
            {({ ref, open }) => (
                <img ref={ref} onClick={open} src="images/portfolio/other/thumbnail/p5.jpg" alt="" />
            )}
        </Item>
        <Item
            original="images/portfolio/other/p6.jpg"
            thumbnail="images/portfolio/other/thumbnail/p6.jpg"
            width="1024"
            height="768"
        >
            {({ ref, open }) => (
                <img ref={ref} onClick={open} src="images/portfolio/other/thumbnail/p6.jpg" alt="" />
            )}
        </Item>
        <Item
            original="images/portfolio/other/p7.jpg"
            thumbnail="images/portfolio/other/thumbnail/p7.jpg"
            width="1024"
            height="768"
        >
            {({ ref, open }) => (
                <img ref={ref} onClick={open} src="images/portfolio/other/thumbnail/p7.jpg" alt="" />
            )}
        </Item>
        <Item
            original="images/portfolio/other/p8.jpg"
            thumbnail="images/portfolio/other/thumbnail/p8.jpg"
            width="1024"
            height="768"
        >
            {({ ref, open }) => (
                <img ref={ref} onClick={open} src="images/portfolio/other/thumbnail/p8.jpg" alt="" />
            )}
        </Item>
        <Item
            original="images/portfolio/other/p9.jpg"
            thumbnail="images/portfolio/other/thumbnail/p9.jpg"
            width="1024"
            height="768"
        >
            {({ ref, open }) => (
                <img ref={ref} onClick={open} src="images/portfolio/other/thumbnail/p9.jpg" alt="" />
            )}
        </Item>
        <Item
            original="images/portfolio/other/p10.jpg"
            thumbnail="images/portfolio/other/thumbnail/p10.jpg"
            width="1024"
            height="768"
        >
            {({ ref, open }) => (
                <img ref={ref} onClick={open} src="images/portfolio/other/thumbnail/p10.jpg" alt="" />
            )}
        </Item>
        <Item
            original="images/portfolio/other/p11.jpg"
            thumbnail="images/portfolio/other/thumbnail/p11.jpg"
            width="1024"
            height="768"
        >
            {({ ref, open }) => (
                <img ref={ref} onClick={open} src="images/portfolio/other/thumbnail/p11.jpg" alt="" />
            )}
        </Item>
        <Item
            original="images/portfolio/other/p12.jpg"
            thumbnail="images/portfolio/other/thumbnail/p12.jpg"
            width="1024"
            height="768"
        >
            {({ ref, open }) => (
                <img ref={ref} onClick={open} src="images/portfolio/other/thumbnail/p12.jpg" alt="" />
            )}
        </Item>
        <Item
            original="images/portfolio/other/p13.jpg"
            thumbnail="images/portfolio/other/thumbnail/p13.jpg"
            width="1024"
            height="768"
        >
            {({ ref, open }) => (
                <img ref={ref} onClick={open} src="images/portfolio/other/thumbnail/p13.jpg" alt="" />
            )}
        </Item>
        <Item
            original="images/portfolio/other/p14.png"
            thumbnail="images/portfolio/other/thumbnail/p14.png"
            width="1024"
            height="768"
        >
            {({ ref, open }) => (
                <img ref={ref} onClick={open} src="images/portfolio/other/thumbnail/p14.png" alt="" />
            )}
        </Item>
        <Item
            original="images/portfolio/other/p15.jpg"
            thumbnail="images/portfolio/other/thumbnail/p15.jpg"
            width="1024"
            height="768"
        >
            {({ ref, open }) => (
                <img ref={ref} onClick={open} src="images/portfolio/other/thumbnail/p15.jpg" alt="" />
            )}
        </Item>
        <Item
            original="images/portfolio/other/p16.png"
            thumbnail="images/portfolio/other/thumbnail/p16.png"
            width="1024"
            height="768"
        >
            {({ ref, open }) => (
                <img ref={ref} onClick={open} src="images/portfolio/other/thumbnail/p16.png" alt="" />
            )}
        </Item>
        <Item
            original="images/portfolio/other/p17.png"
            thumbnail="images/portfolio/other/thumbnail/p17.png"
            width="1024"
            height="768"
        >
            {({ ref, open }) => (
                <img ref={ref} onClick={open} src="images/portfolio/other/thumbnail/p17.png" alt="" />
            )}
        </Item>
        <Item
            original="images/portfolio/other/p18.png"
            thumbnail="images/portfolio/other/thumbnail/p18.png"
            width="1024"
            height="768"
        >
            {({ ref, open }) => (
                <img ref={ref} onClick={open} src="images/portfolio/other/thumbnail/p18.png" alt="" />
            )}
        </Item>
        <Item
            original="images/portfolio/other/p19.jpg"
            thumbnail="images/portfolio/other/thumbnail/p19.jpg"
            width="1024"
            height="768"
        >
            {({ ref, open }) => (
                <img ref={ref} onClick={open} src="images/portfolio/other/thumbnail/p19.jpg" alt="" />
            )}
        </Item>
    </Gallery>
)

const images = [
    {
        original: "images/portfolio/other/p1.jpg",
        thumbnail: "images/portfolio/other/thumbnail/p1.jpg"
    },
    {
        original: "images/portfolio/other/p2.jpg",
        thumbnail: "images/portfolio/other/thumbnail/p2.jpg"
    },
    {
        original: "images/portfolio/other/p3.jpg",
        thumbnail: "images/portfolio/other/thumbnail/p3.jpg"
    },
    {
        original: "images/portfolio/other/p4.jpg",
        thumbnail: "images/portfolio/other/thumbnail/p4.jpg"
    },
    {
        original: "images/portfolio/other/p5.jpg",
        thumbnail: "images/portfolio/other/thumbnail/p5.jpg"
    },
    {
        original: "images/portfolio/other/p6.jpg",
        thumbnail: "images/portfolio/other/thumbnail/p6.jpg"
    },
    {
        original: "images/portfolio/other/p7.jpg",
        thumbnail: "images/portfolio/other/thumbnail/p7.jpg"
    },
    {
        original: "images/portfolio/other/p8.jpg",
        thumbnail: "images/portfolio/other/thumbnail/p8.jpg"
    },
    {
        original: "images/portfolio/other/p9.jpg",
        thumbnail: "images/portfolio/other/thumbnail/p9.jpg"
    },
    {
        original: "images/portfolio/other/p10.jpg",
        thumbnail: "images/portfolio/other/thumbnail/p10.jpg"
    },
    {
        original: "images/portfolio/other/p11.jpg",
        thumbnail: "images/portfolio/other/thumbnail/p11.jpg"
    },
    {
        original: "images/portfolio/other/p12.jpg",
        thumbnail: "images/portfolio/other/thumbnail/p12.jpg"
    },
    {
        original: "images/portfolio/other/p13.jpg",
        thumbnail: "images/portfolio/other/thumbnail/p13.jpg"
    },
    {
        original: "images/portfolio/other/p14.png",
        thumbnail: "images/portfolio/other/thumbnail/p14.png"
    },
    {
        original: "images/portfolio/other/p15.jpg",
        thumbnail: "images/portfolio/other/thumbnail/p15.jpg"
    },
    {
        original: "images/portfolio/other/p16.png",
        thumbnail: "images/portfolio/other/thumbnail/p16.png"
    },
    {
        original: "images/portfolio/other/p17.png",
        thumbnail: "images/portfolio/other/thumbnail/p17.png"
    },
    {
        original: "images/portfolio/other/p18.png",
        thumbnail: "images/portfolio/other/thumbnail/p18.png"
    },
    {
        original: "images/portfolio/other/p19.jpg",
        thumbnail: "images/portfolio/other/thumbnail/p19.jpg"
    }
];

export const Other = () => {
    return (
        <div id="portfolio" style={{ marginTop: "50px" }}>
            <br /><br />
            <div className="card-header" style={{ paddingBottom: "0px" }}>
                <Typical style={{ color: "black" }} steps={["Miscellaneous Works", 1500]} wrapper="h1" />
            </div>
            <br />
            <div style={{ margin: "auto", width: "90%" }}>
                <div className="biggallery" style={{ textAlign: "center", marginBottom: "30px" }}>
                    <MyGallery />
                </div>
                <div className="smallgallery" style={{ textAlign: "center", marginBottom: "30px" }}>
                    <ImageGallery items={images} thumbnailPosition={"right"} slideDuration={1000} slideInterval={5000} />
                </div>
            </div>
        </div>
    )
}