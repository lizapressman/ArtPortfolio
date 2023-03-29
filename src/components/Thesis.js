import React from "react";
import Typical from "react-typical";
import "photoswipe/dist/photoswipe.css";
import "photoswipe/dist/default-skin/default-skin.css";

import { Gallery, Item } from "react-photoswipe-gallery";
import ImageGallery from "react-image-gallery";

const MyGallery = () => (
  <Gallery shareButton={false} zoomButton={false}>
    <Item
      original="images/portfolio/thesis/p4.jpg"
      thumbnail="images/portfolio/thesis/thumbnail/p4.jpg"
      width="1024"
      height="768"
      title="Liza Pressman<br /><em>stretched</em>, 2021<br />Acrylic on unstretched canvas"
    >
      {({ ref, open }) => (
        <img
          ref={ref}
          onClick={open}
          src="images/portfolio/thesis/thumbnail/p4.jpg"
          alt=""
        />
      )}
    </Item>
    <Item
      original="images/portfolio/thesis/p1.jpg"
      thumbnail="images/portfolio/thesis/thumbnail/p1.jpg"
      width="1024"
      height="768"
      title="Liza Pressman<br /><em>bobble</em>, 2021<br />Acrylic on unstretched canvas"
    >
      {({ ref, open }) => (
        <img
          ref={ref}
          onClick={open}
          src="images/portfolio/thesis/thumbnail/p1.jpg"
          alt=""
        />
      )}
    </Item>
    <Item
      original="images/portfolio/thesis/p5.jpg"
      thumbnail="images/portfolio/thesis/thumbnail/p5.jpg"
      width="1024"
      height="768"
      title="Liza Pressman<br /><em>space</em>, 2021<br />Acrylic on unstretched canvas"
    >
      {({ ref, open }) => (
        <img
          ref={ref}
          onClick={open}
          src="images/portfolio/thesis/thumbnail/p5.jpg"
          alt=""
        />
      )}
    </Item>
    <Item
      original="images/portfolio/thesis/p2.jpg"
      thumbnail="images/portfolio/thesis/thumbnail/p2.jpg"
      width="1024"
      height="768"
      title="Liza Pressman<br /><em>shallow</em>, 2021<br />Acrylic on unstretched canvas"
    >
      {({ ref, open }) => (
        <img
          ref={ref}
          onClick={open}
          src="images/portfolio/thesis/thumbnail/p2.jpg"
          alt=""
        />
      )}
    </Item>
    <Item
      original="images/portfolio/thesis/p3.jpg"
      thumbnail="images/portfolio/thesis/thumbnail/p3.jpg"
      width="1024"
      height="768"
      title="Liza Pressman<br /><em>beneath</em>, 2021<br />Acrylic on unstretched canvas"
    >
      {({ ref, open }) => (
        <img
          ref={ref}
          onClick={open}
          src="images/portfolio/thesis/thumbnail/p3.jpg"
          alt=""
        />
      )}
    </Item>
  </Gallery>
);

const images = [
  {
    original: "images/portfolio/thesis/p4.jpg",
    thumbnail: "images/portfolio/thesis/thumbnail/p4.jpg",
  },
  {
    original: "images/portfolio/thesis/p1.jpg",
    thumbnail: "images/portfolio/thesis/thumbnail/p1.jpg",
  },
  {
    original: "images/portfolio/thesis/p5.jpg",
    thumbnail: "images/portfolio/thesis/thumbnail/p5.jpg",
  },
  {
    original: "images/portfolio/thesis/p2.jpg",
    thumbnail: "images/portfolio/thesis/thumbnail/p2.jpg",
  },
  {
    original: "images/portfolio/thesis/p3.jpg",
    thumbnail: "images/portfolio/thesis/thumbnail/p3.jpg",
  },
];

export const Thesis = () => {
  return (
    <div id="portfolio" style={{ marginTop: "50px" }}>
      <br />
      <br />
      <div style={{ margin: "auto", width: "80%" }}>
        <div className="card" style={{ background: "#efe1bd" }}>
          <div className="card-header" style={{ paddingBottom: "0px" }}>
            <h1>
              <Typical
                style={{ color: "black" }}
                steps={["Senior Thesis Exhibition", 1500, "distort.", 1500]}
              />
            </h1>
          </div>
          <div
            className="card-body font-trebuchet text-justify ml-3 mr-3"
            style={{
              height: "auto",
              fontSize: "150%",
              lineHeight: "200%",
            }}
          >
            <span>
              My senior thesis exhibition "distort." showcases paintings of
              figures submerged in water. In my works, the water acts as a
              boundary between realism and abstraction, clarity and deformation.
              Space, distortion, and thresholds are all important concepts I
              explore as I dive into the meditative process of creating.
            </span>
          </div>
        </div>
        <br />
        <div
          className="biggallery"
          style={{ textAlign: "center", marginBottom: "30px" }}
        >
          <MyGallery />
        </div>
        <div
          className="smallgallery"
          style={{ textAlign: "center", marginBottom: "30px" }}
        >
          <ImageGallery
            items={images}
            showThumbnails={false}
            slideDuration={1000}
            slideInterval={5000}
          />
        </div>
      </div>
    </div>
  );
};
