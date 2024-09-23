import React, { useEffect, useRef } from 'react';
import '../ComponentCss/Slider3.css';
import image1 from "../assets/custom.png";
import image2 from "../assets/fulfillment.png";
import image3 from "../assets/order.png";
import right1 from "../assets/right-svgrepo-com.svg";
import left1 from "../assets/left-svgrepo-com.svg";
import Aos from 'aos';
import "aos/dist/aos.css";



export default function Slider3() {

  useEffect(() => {
    Aos.init({ duration: 700 });
  }, []);


  const outBoxRef = useRef(null);

  const scrollRight = () => {
    if (outBoxRef.current) {
      outBoxRef.current.scrollLeft += 320;
    }
  };

  const scrollLeft = () => {
    if (outBoxRef.current) {
      outBoxRef.current.scrollLeft -= 320; 
    }
  };

  return (
    <>
      <main id='MainBox'>
        <img id='left12' src={left1} alt="left" onClick={scrollLeft} className="arrow" />
        <div id='outBox' ref={outBoxRef} data-aos="flip-down" >
          <div>
            <img src={image1} alt="custom" />
            <h6>CREATE</h6>
            <h4>custom products</h4>
            <p>Easily add your designs to a wide range of products using our free tools</p>
          </div>

          <div>
            <img src={image3} alt="sell" />
            <h6>SELL</h6>
            <h4>on your terms</h4>
            <p>You choose the products, sale price, and where to sell</p>
          </div>

          <div>
            <img src={image2} alt="fulfill" />
            <h6>WE HANDLE</h6>
            <h4>fulfillment</h4>
            <p>Once an order is placed, we automatically handle all the printing and delivery logistics</p>
          </div>
        </div>
        <img id='right12'  src={right1} alt="right" onClick={scrollRight} className="arrow" />

      </main>
    </>
  );
}
