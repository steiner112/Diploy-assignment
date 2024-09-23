import React, { useEffect } from 'react'
import "../ComponentCss/Sales5banner.css"
import Aos from 'aos'
import "aos/dist/aos.css";


export default function Sales5banner() {
  useEffect(() => {
    Aos.init({ duration: 400 });
  }, [])
  return (
    <main id='outBoxx'>
      <div id='outer' data-aos="zoom-in"  data-aos-offset="200" 
              data-aos-easing="ease-in-sine" 
              data-aos-duration="600">
        <div><h1 id='outerText'>Are you a large business looking for custom solutions?</h1></div>
        <button>Talk to Sales</button>
      </div>
    </main>
  )
}
