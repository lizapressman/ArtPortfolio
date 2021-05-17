import React, { useRef } from 'react';
import Typical from "react-typical";
import 'photoswipe/dist/photoswipe.css'
import 'photoswipe/dist/default-skin/default-skin.css'

import { Gallery, Item } from 'react-photoswipe-gallery'
import ImageGallery from 'react-image-gallery';

const MyGallery = () => (
    <Gallery shareButton={false} zoomButton={false}>
        <div className="row center" >
            <div style={{ margin: "5px" }}>
                <Item
                    original="images/portfolio/thesis/p4.jpg"
                    thumbnail="images/portfolio/thesis/thumbnail/p4.jpg"
                    width="1024"
                    height="768"
                    title="Liza Pressman<br /><em>stretched</em>, 2021<br />Acrylic on unstretched canvas"
                >
                    {({ ref, open }) => (
                        <img style={{ cursor: "pointer", margin: "5px" }} ref={ref} onClick={open} src="images/portfolio/thesis/thumbnail/p4.jpg" alt="" width="100%" />
                    )}
                </Item>
                <br />
                <span className="art-label">Liza Pressman<br /><em>stretched</em>, 2021<br />Acrylic on unstretched canvas</span>
            </div>
            <div style={{ margin: "5px" }}>
                <Item
                    original="images/portfolio/thesis/p1.jpg"
                    thumbnail="images/portfolio/thesis/thumbnail/p1.jpg"
                    width="1024"
                    height="768"
                    title="Liza Pressman<br /><em>bobble</em>, 2021<br />Acrylic on unstretched canvas"
                >
                    {({ ref, open }) => (
                        <img style={{ cursor: "pointer", margin: "5px" }} ref={ref} onClick={open} src="images/portfolio/thesis/thumbnail/p1.jpg" alt="" width="100%" />
                    )}
                </Item>
                <br />
                <span className="art-label">Liza Pressman<br /><em>bobble</em>, 2021<br />Acrylic on unstretched canvas</span>
            </div>
        </div>
        <div className="row center" >
            <div style={{ margin: "5px" }}>
                <Item
                    original="images/portfolio/thesis/p5.jpg"
                    thumbnail="images/portfolio/thesis/thumbnail/p5.jpg"
                    width="1024"
                    height="768"
                    title="Liza Pressman<br /><em>space</em>, 2021<br />Acrylic on unstretched canvas"
                >
                    {({ ref, open }) => (
                        <img style={{ cursor: "pointer", margin: "5px" }} ref={ref} onClick={open} src="images/portfolio/thesis/thumbnail/p5.jpg" alt="" width="100%" />
                    )}
                </Item>
                <br />
                <span className="art-label">Liza Pressman<br /><em>space</em>, 2021<br />Acrylic on unstretched canvas</span>
            </div>
            <div style={{ margin: "5px" }}>
                <Item
                    original="images/portfolio/thesis/p2.jpg"
                    thumbnail="images/portfolio/thesis/thumbnail/p2.jpg"
                    width="1024"
                    height="768"
                    title="Liza Pressman<br /><em>shallow</em>, 2021<br />Acrylic on unstretched canvas"
                >
                    {({ ref, open }) => (
                        <img style={{ cursor: "pointer", margin: "5px" }} ref={ref} onClick={open} src="images/portfolio/thesis/thumbnail/p2.jpg" alt="" width="100%" />
                    )}
                </Item>
                <br />
                <span className="art-label">Liza Pressman<br /><em>shallow</em>, 2021<br />Acrylic on unstretched canvas</span>
            </div>
            <div style={{ margin: "5px" }}>
                <Item
                    original="images/portfolio/thesis/p3.jpg"
                    thumbnail="images/portfolio/thesis/thumbnail/p3.jpg"
                    width="1024"
                    height="768"
                    title="Liza Pressman<br /><em>beneath</em>, 2021<br />Acrylic on unstretched canvas"
                >
                    {({ ref, open }) => (
                        <img style={{ cursor: "pointer" }} ref={ref} onClick={open} src="images/portfolio/thesis/thumbnail/p3.jpg" alt="" width="100%" />
                    )}
                </Item>
                <br />
                <span className="art-label">Liza Pressman<br /><em>beneath</em>, 2021<br />Acrylic on unstretched canvas</span>
            </div>
        </div >
    </Gallery >
)

const images = [
    {
        original: "images/portfolio/thesis/p4.jpg",
        thumbnail: "images/portfolio/thesis/thumbnail/p4.jpg",
        thumbnailLabel: "stretched",
    },
    {
        original: "images/portfolio/thesis/p1.jpg",
        thumbnail: "images/portfolio/thesis/thumbnail/p1.jpg",
        thumbnailLabel: "bobble",
    },
    {
        original: "images/portfolio/thesis/p5.jpg",
        thumbnail: "images/portfolio/thesis/thumbnail/p5.jpg",
        thumbnailLabel: "space",
    },
    {
        original: "images/portfolio/thesis/p2.jpg",
        thumbnail: "images/portfolio/thesis/thumbnail/p2.jpg",
        thumbnailLabel: "shallow",
    },
    {
        original: "images/portfolio/thesis/p3.jpg",
        thumbnail: "images/portfolio/thesis/thumbnail/p3.jpg",
        thumbnailLabel: "beneath",
    },
];

export const ThesisForClass = () => {

    return (
        <div id="portfolio" style={{ marginTop: "50px" }}>
            <br /><br />
            <div style={{ margin: "auto", width: "90%" }}>
                <div className="card" style={{ background: "#efe1bd" }}>
                    <div className="card-header" style={{ paddingBottom: "0px" }}>
                        <h1><Typical style={{ color: "black" }} steps={["Senior Thesis Exhibition", 1500, "distort.", 1500]} /></h1>
                    </div>
                    <div
                        className="card-body font-trebuchet text-justify ml-3 mr-3"
                        style={{
                            height: "auto",
                            fontSize: "150%",
                            lineHeight: "200%",
                        }}
                    >
                        <span style={{ paddingLeft: "24px" }}>
                            My senior thesis exhibition "distort." showcases paintings of figures submerged in water. In my works, the water acts as a boundary between realism and abstraction, clarity and deformation. Space, distortion, and thresholds are all important concepts I explore as I dive into the meditative process of creating.
                        </span>
                    </div>
                </div>
                <br />

                <div className="card" style={{ background: "#70abaf" }}>
                    <div className="card-header" style={{ paddingBottom: "0px", backgroundColor: "#70abaf !important" }}>
                    </div>
                    <div
                        className="card-body font-trebuchet text-justify ml-3 mr-3"
                        style={{
                            height: "auto",
                            fontSize: "150%",
                            lineHeight: "200%",
                        }}
                    >
                        <div className="biggallery" style={{ textAlign: "center" }}>
                            <MyGallery />
                        </div>
                        <div className="smallgallery" style={{ textAlign: "center", marginBottom: "30px" }}>
                            <ImageGallery items={images} thumbnailPosition={"right"} slideDuration={1000} slideInterval={5000} />
                        </div>
                    </div>
                </div>

                <br />
                <div className="card" style={{ background: "#efe1bd" }}>
                    <div className="card-header" style={{ paddingBottom: "0px" }}>
                        <h1>Thesis Statement</h1>
                    </div>
                    <div
                        className="card-body font-trebuchet text-justify ml-3 mr-3"
                        style={{
                            height: "auto",
                            fontSize: "150%",
                            lineHeight: "200%",
                        }}
                    >
                        <span style={{ paddingLeft: "24px" }}>
                            Last semester I focused on <a href="/ArtPortfolio/#/memories">layered paintings</a> which I liked and wanted to explore further but in a less obvious sense. This is what drew me to painting figures submerged in water. I really like how the water acts as a layer or a threshold between reality and the distorted view of reality that comes with the distortion effect of the water. This distortion is what initially drew me into the theme of water but as I created, I realized how important the meditative process of creating was for me. With all the stress over the last year, I wanted to restore peace through the act of painting. Water to me is extremely peaceful and I wanted that to come across in my paintings. I’m hoping the audience is able to extrapolate this calmness as well as see the exploration of boundaries between realism and abstraction in liminal spaces.
                            </span>
                        <br />
                        <span style={{ paddingLeft: "24px" }}>
                            If you’ve gotten a chance to check out my paintings in Sage you’d know all of them are acrylic on loose canvas which I chose because I love the way the unstretched canvas almost mimics the movement of the water when it ripples and buckles. It’s a bit hard to get this effect through the computer but this was an important component of the work for me as well.
                        </span>
                        <br /><br />
                        <div style={{ textAlign: "center" }}>
                            <Gallery shareButton={false} zoomButton={false}>
                                <div className="row center" >
                                    <div>
                                        <Item
                                            original="images/portfolio/thesis/exhibition.jpg"
                                            thumbnail="images/portfolio/thesis/exhibition.jpg"
                                            width="1024"
                                            height="768"
                                            title="<i>SOLOS:</i>&nbsp;A Group Exhibition<br />Sage Art center, Rochester, NY"
                                        >
                                            {({ ref, open }) => (
                                                <img style={{ cursor: "pointer", display: "block", margin: "auto" }} ref={ref} onClick={open} src="images/portfolio/thesis/exhibition.jpg" alt="" width="80%" />
                                            )}
                                        </Item>
                                        <br />
                                        <span className="language-tag"><i>SOLOS:</i>&nbsp;A Group Exhibition<br />Sage Art center, Rochester, NY</span>

                                    </div>
                                </div>
                            </Gallery>
                        </div>
                    </div>
                </div>

                <br />

                <div className="card" style={{ background: "#70abaf" }}>
                    <div className="card-header" style={{ paddingBottom: "0px", backgroundColor: "#70abaf !important" }}>
                        <h1>Further Exploration</h1>
                    </div>
                    <div
                        className="card-body font-trebuchet text-justify ml-3 mr-3"
                        style={{
                            height: "auto",
                            fontSize: "150%",
                            lineHeight: "200%",
                        }}
                    >
                        <span style={{ paddingLeft: "24px" }}>
                            While the primary work for my senior thesis focused on figures in water, I have started and will continue exploring water as a general concept.
                            Following installation of our group exhibition in Sage, I continued working with the theme of water but in a different way.
                            Below is a couple snaps of my newest abstract water painting titled <em>void</em>.
                        </span>
                        <br /><br />
                        <div style={{ textAlign: "center" }}>
                            <Gallery shareButton={false} zoomButton={false}>
                                <div className="row center" >
                                    <div style={{ margin: "5px" }}>
                                        <Item
                                            original="images/portfolio/thesis/p6.jpg"
                                            thumbnail="images/portfolio/thesis/p6.jpg"
                                            width="1024"
                                            height="768"
                                            title="Liza Pressman<br /><em>void</em>, 2021<br />Acrylic on canvas"
                                        >
                                            {({ ref, open }) => (
                                                <img style={{ cursor: "pointer", margin: "5px" }} ref={ref} onClick={open} src="images/portfolio/thesis/thumbnail/p6.jpg" width="100%" alt="" />
                                            )}
                                        </Item>
                                        <br />
                                        <span className="art-label">Liza Pressman<br /><em>void</em>, 2021<br />Acrylic on canvas</span>
                                    </div>
                                    <div style={{ margin: "5px" }}>
                                        <Item
                                            original="images/portfolio/thesis/p7.jpg"
                                            thumbnail="images/portfolio/thesis/p7.jpg"
                                            width="1024"
                                            height="768"
                                            title="Liza Pressman<br /><em>void</em>, 2021<br />Acrylic on canvas"
                                        >
                                            {({ ref, open }) => (
                                                <img style={{ cursor: "pointer", margin: "5px" }} ref={ref} onClick={open} src="images/portfolio/thesis/thumbnail/p7.jpg" width="100%" alt="" />
                                            )}
                                        </Item>
                                        <br />
                                        <span className="art-label">Liza Pressman<br /><em>void</em>, 2021<br />Acrylic on canvas</span>
                                    </div>
                                </div>
                            </Gallery>
                        </div>
                    </div>
                </div>

            </div>
        </div >
    )
}