import React from 'react'
import "../ComponentCss/Connecting_section4.css";
import shopify from "../assets/shopify.png";
import amazon from "../assets/amazon.png";
import netflix from "../assets/netflix.png";
import twitch from "../assets/twitch.png";
import dmd from "../assets/dmd.png";
import wix from "../assets/wix.png";

export default function Connecting_section4() {
  return (
    <>
    <main>
        <div id='boxx'>
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
