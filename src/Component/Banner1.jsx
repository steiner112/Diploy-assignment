import React, { useEffect } from 'react';
import "../ComponentCss/Banner1.css";
import Money from "../assets/money.jpg";
import Mobile from "../assets/mobile.jpg";
import banker from "../assets/banker.jpg";
import Aos from 'aos';
import 'aos/dist/aos.css'; 

export default function Banner1() {



  useEffect(() => {
    Aos.init({ duration: 500 });
  }, []);

  return (
    <>
      <main>
        <div data-aos="fade-zoom-in" 
              data-aos-offset="200" 
              data-aos-easing="ease-in-sine" 
              data-aos-duration="600"  id='outerPart'>
          <div id='box1' data-aos="fade-in">
            <img
              src={Money}
              alt="img"

            />
            <h3>Higher Profits</h3>
            <p>We offer some of the lowest prices in the industry because print providers continuously compete to win your business.</p>
          </div>

          <div id='box2' data-aos="fade-in">
            <img src={banker} alt="img" />
            <h3>Robust Scaling</h3>
            <p>Easily handle peak holiday seasons, with our wide network of partners and automatic routing functionality.</p>
          </div>

          <div id='box3' data-aos="fade-in">
            <img src={Mobile} alt="img" />
            <h3>Best Selection</h3>
            <p>With 900+ products and top quality brands, you can choose the best products for your business.</p>
          </div>
        </div>
      </main>
    </>
  );
}
