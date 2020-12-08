import React from "react";
import { Link } from "react-router-dom";
import woman_in_pool from "./../../images/woman_in_pool.jpg";
import marble_table from "./../../images/marble_table.jpg";

export default function MidSectionB() {
  return (
    <div id="mid-section-b">
      <div id="mid-section-b-link-container">
        <h2>Favorite posts</h2>
        <Link to="/blog">View all blogpost</Link>
      </div>

      <div id="mid-section-b-content">
        <div>
          <img src={woman_in_pool} alt="woman_sitting_in_pool" />
          <p>Travel</p>
          <Link to="/">
            The best ways to enjoy the last summer days of this year
          </Link>
        </div>

        <div>
          <img src={marble_table} alt="marble_table" />
          <p>Lifestyle</p>
          <Link to="/">
            5 hip restaurants in California that I love for a dinner date
          </Link>
        </div>
      </div>
    </div>
  );
}
