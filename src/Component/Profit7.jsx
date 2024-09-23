import React, { useEffect } from 'react'
import "../ComponentCss/Profit7.css";
import Lottie from 'lottie-react';
import tree from "../assets/tree.json";
import Aos from 'aos';
import "aos/dist/aos.css";


export default function Profit7() {
    
  useEffect(() => {
    Aos.init({ duration: 700 });
  }, []);
    return (
        <>
            <main>
                <div id='outtr'>
                    <div id='text2221' data-aos="slide-right" >
                    <h1>Make Money, Risk-Free</h1>
                    <p>You pay for fulfillment only when you make a sale</p>
                    <div id='moneyBox'>
                        <div id='lineBox'>
                            <span><p>You sell a t-shirt</p><p>$30</p></span>
                            <span><p>You pay for its production</p><p>$12</p></span>
                        </div>
                        <span style={{color: "greenyellow",fontSize:"18px"}}><p >Your profit</p> <p>$18</p></span>
                    </div>
                    <button id='btn221'>Start selling</button>
                    <p>100% Free to use · 900+ Products · Largest print network</p>
                    </div>

                    <div id='imgMain' data-aos="slide-left">
                  <Lottie id="tree" animationData={tree} /> 

                    </div>
                </div>
            </main>
        </>
    )
}
