import React from "react";
import street from "./../../images/street.jpg";
import woman_in_pool from "./../../images/woman_in_pool.jpg";
import blonde from "./../../images/blonde.jpg";
import camera from "./../../images/camera.jpg";
import palm_leaf from "./../../images/palm_leaf.jpg";
import marble_table from "./../../images/marble_table.jpg";

export default function PhotosBot() {
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

      <div id="photos-bot-sliding-gallery">
        <img src={street} alt="street" />
        <img src={woman_in_pool} alt="woman_in_pool" />
        <img src={blonde} alt="blonde" />
        <img src={camera} alt="camera" />
        <img src={palm_leaf} alt="palm_leaf" />
        <img src={marble_table} alt="marble_table" />

        <div id="gallery-buttons">
          <button>prev</button> / <button>next</button>
        </div>
      </div>
    </div>
  );
}
