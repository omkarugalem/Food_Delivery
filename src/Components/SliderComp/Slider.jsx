import React from "react";
import "./slider.css";
const Slider1 = () => {
  return (
    <section id="sliderblock">
      <article>
        {/* <img src="main.jpg" alt="" /> */}
        <div id="block">
          <form>
            <div id="searchBlock">
              <input type="text" placeholder="Search your food here...." />
              <p id="serchicon">
                <i class="fas fa-map-marker-alt"></i>
              </p>
              <p id="arrow">
                {/* <i class="fas fa-arrow-right"></i> */}
                <i class="fas fa-search"></i>
              </p>
            </div>
          </form>
        </div>
      </article>
    </section>
  );
};

export default Slider1;
