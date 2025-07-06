// src/components/Gallery.jsx
import React from "react";

// Step 1: Import images from src/assets
import img1 from "../assets/img1.webp";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.jpg";
import img4 from "../assets/img4.jpg";
import img5 from "../assets/img5.jpg";
import img6 from "../assets/img6.jpg";
import img7 from "../assets/img7.jpg";
import img8 from "../assets/img8.jpg";

const Gallery = () => {
  // Step 2: Store image references in an array
  const gallery = [img1, img2, img3, img4, img7, img8, img5, img6];

  return (
    <section className="gallery">
      <h1 className="gallery-title">BETTER BEATS BEST</h1>
      <div className="images">
        <div>
          {gallery.slice(0, 3).map((element, index) => (
            <img key={index} src={element} alt={`gallery-${index}`} />
          ))}
        </div>
        <div>
          {gallery.slice(3, 6).map((element, index) => (
            <img key={index + 3} src={element} alt={`gallery-${index + 3}`} />
          ))}
        </div>
        <div>
          {gallery.slice(6, 9).map((element, index) => (
            <img key={index + 6} src={element} alt={`gallery-${index + 6}`} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
