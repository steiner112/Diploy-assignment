import React, { useEffect } from 'react'
import "../ComponentCss/Connecting_section4.css";
import shopify from "../assets/shopify.png";
import amazon from "../assets/amazon.png";
import netflix from "../assets/netflix.png";
import twitch from "../assets/twitch.png";
import dmd from "../assets/dmd.png";
import wix from "../assets/wix.png";
import Aos from 'aos';
import "aos/dist/aos.css";





export default function Connecting_section4() {
  
  useEffect(() => {
    Aos.init({ duration: 600 });
  }, []);

  return (
    <>
    <main>
        <div id='boxx'  data-aos="slide-left"  data-aos-offset="200" 
              data-aos-easing="ease-in-sine" 
              data-aos-duration="600">
            <h1>Connect your store</h1>
            <p>Printify easily integrates with major e-commerce platforms and marketplacesd</p>
            <div id='inside'>
                <div id='bx1'><img  src={shopify} alt="icon" /></div>
                <div id='bx2'><img  src={amazon} alt="amazon" /></div>
                <div id='bx3'><img  src={netflix} alt="netflix" /></div>
                <div id='bx4'><img  src={twitch} alt="twtich" /></div>
                <div id='bx5'><img  src={dmd} alt="dmd" /></div>
                <div id='bx6'><img  src={wix} alt="wix" /></div>
            </div>
        </div>
    </main> 
    </>
  )
}
