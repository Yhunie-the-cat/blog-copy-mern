import React, { useState, useRef, useEffect } from "react";
import street from "./../../images/street.jpg";
import woman_in_pool from "./../../images/woman_in_pool.jpg";
import blonde from "./../../images/blonde.jpg";
import camera from "./../../images/camera.jpg";
import palm_leaf from "./../../images/palm_leaf.jpg";
import marble_table from "./../../images/marble_table.jpg";

export default function PhotosBot() {
  const [counter, setCounter] = useState(1);
  const [size, setSize] = useState(0);
  const [carouselImages, setCarouselImages] = useState([]);

  const firtClone = useRef();
  const lastClone = useRef();
  const carouselSlide = useRef();
  const prevButton = useRef();
  const nextButton = useRef();

  const time = 0.5;

  useEffect(() => {
    setSize(carouselSlide.current.children[0].clientWidth + 20);
    setCarouselImages(
      [...carouselSlide.current.children].filter(
        (item) => item.tagName === "IMG"
      )
    );
  }, [carouselSlide.current]);

  useEffect(() => {
    if (carouselSlide.current) {
      carouselSlide.current.style.transform = `translateX(-${
        size * counter
      }px)`;
    }
  });

  const nextButtonClick = () => {
    if (counter >= carouselImages.length) return;
    carouselSlide.current.style.transition = `transform ${time}s ease-in-out`;
    setCounter((prev) => prev + 1);
    carouselSlide.current.style.transform = `translateX(-${size * counter}px)`;
    nextButton.current.disabled = true;
    setTimeout(() => {
      nextButton.current.disabled = false;
    }, time * 1200);
  };

  const prevButtonClick = () => {
    if (counter <= 1) return;
    carouselSlide.current.style.transition = `transform ${time}s ease-in-out`;
    setCounter((prev) => prev - 1);
    carouselSlide.current.style.transform = `translateX(-${size * counter}px)`;
    prevButton.current.disabled = true;
    setTimeout(() => {
      prevButton.current.disabled = false;
    }, time * 1200);
  };

  const handleTransitionEnd = () => {
    if (carouselImages[counter] === lastClone.current) {
      carouselSlide.current.style.transition = "none";
      setCounter(carouselImages.length - 3);
      carouselSlide.current.style.transform = `translateX(-${
        size * counter
      }px)`;
    }

    if (carouselImages[counter] === firtClone.current) {
      carouselSlide.current.style.transition = "none";
      setCounter((prev) => carouselImages.length - prev);
      carouselSlide.current.style.transform = `translateX(-${
        size * counter
      }px)`;
    }
  };

  return (
    <div id="photos-bot">
      <div id="photos-bot-text-container">
        <h2>Gallery</h2>
        <p>
          Lorem ipsum dolor sit amet, consect etuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa.
        </p>
        <div></div>
      </div>

      <div id="photos-bot-sliding-gallery-container">
        <div
          id="photos-bot-sliding-gallery"
          ref={carouselSlide}
          onTransitionEnd={handleTransitionEnd}
        >
          <img src={palm_leaf} alt="palm_leaf" />
          <img src={marble_table} alt="marble_table" ref={lastClone} />
          <img src={street} alt="street" />
          <img src={woman_in_pool} alt="woman_in_pool" />
          <img src={blonde} alt="blonde" />
          <img src={camera} alt="camera" />
          <img src={palm_leaf} alt="palm_leaf" />
          <img src={marble_table} alt="marble_table" />
          <img src={street} alt="street" ref={firtClone} />
          <img src={woman_in_pool} alt="woman_in_pool" />
        </div>

        <div id="gallery-buttons">
          <button onClick={prevButtonClick} ref={prevButton}>
            prev
          </button>{" "}
          /{" "}
          <button onClick={nextButtonClick} ref={nextButton}>
            next
          </button>
        </div>
      </div>
    </div>
  );
}
