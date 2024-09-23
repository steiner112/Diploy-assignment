import React, { useEffect } from 'react';
import '../ComponentCss/Banner2.css';
import Lottie from "lottie-react";
import BannerImage2 from '../assets/Map.json';
import right from '../assets/right.svg';
import Aos from 'aos';
import "aos/dist/aos.css";



export default function Banner2() {

  
  useEffect(() => {
    Aos.init({ duration: 600 });
  }, []);

  return (
    <>
      <main id='boxOuter'>
      {/* <div id='boxOuter'> */}
        <div id='inBox' data-aos="zoom-in-left"  data-aos-offset="200" 
              data-aos-easing="ease-in-sine" 
              data-aos-duration="600">
          <div id='imgSection' >
          <Lottie id='Banner2Image' animationData={BannerImage2} />
          </div>
          <div id='TextSection'>
            <h1>Easily add your design to a wide range of products</h1>
            <p>With our free design tools, you can easily add your custom designs to t-shirts, mugs, phone cases, and hundreds of other products.</p>
            <h6>All products <img src={right} alt="click to go" /></h6>
          </div>
        </div>
      {/* </div> */}
    </main>
    </>
  )
}
