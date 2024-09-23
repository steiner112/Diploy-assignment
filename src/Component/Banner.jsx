import React from 'react'
import '../ComponentCss/Banner.css';
import tick from "../assets/green-tick.svg"
import BannerImage from "../assets/Banner.json.json";
import Lottie from "lottie-react";


export default function Banner() {
  return (
    <>
      <main>
        <section id='banner'>
{/* text section  */}
          <div id='TextSectionLeft'>
            <div id='innerTextBOX' >
            <h1>Create and sell<br/>custom products</h1>

           <ul>
            <li><img src={tick} alt="right" />100% Free to use</li>
            <li><img src={tick} alt="right" />900+ High-Quality Products</li>
            <li><img src={tick} alt="right" />Largest global print Network</li>
           </ul>

            <div id='btnsectionInnerText'>
              <button id='StartBTN'>Start for Free</button>
              <button id='HOWbtn'>How it Works?</button>
            </div>
            <p>Trusted by over 8M sellers around the world</p>
            </div>
          </div>
{/* Gif section  */}
          <div id='GifSectionRight'>
            <div>
              <Lottie id='BannerImage' animationData={BannerImage} />
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
