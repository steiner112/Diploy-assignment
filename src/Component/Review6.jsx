import React from 'react'
import "../ComponentCss/Review6.css";
import male from "../assets/male.jpg"
import male2 from "../assets/male2.jpg"
import female from "../assets/female.jpg"
import female1 from "../assets/female1.jpg"
import stars from "../assets/stars.jpg"


export default function Review6() {
    return (
        <>
            <main id='mi2'>

                <div id='outer22'>
                    <div id='first'>
                        <h1>
                            Trusted by over 8M sellers around the world
                        </h1>
                        <p>
                            Whether you are just getting started or run an enterprise-level e-commerce business, we do everything we can to ensure a positive merchant experience.
                        </p>
                    </div>
                    <div id='scrollSection'>


                        {/* card .../  */}
                        <div className='card122'>

                            <div className='cardUpper'>
                                <img src={male} alt="male" />
                                <div className='tee'>
                                    <h5>Nikk</h5>
                                    <p>Store Link</p>
                                    <img src={stars} alt="star" />
                                </div>
                            </div>
                            <div className='cardLower'>
                                <p>As a customer, I had a fantastic experience using GetItNow! The website is easy to navigate, and I quickly found what I was looking for. Checkout was seamless, and delivery was faster than expected. Highly recommend for anyone looking for a smooth online shopping experience!</p>
                            </div>

                        </div>


                        {/* .../ cards other  */}

                        {/* card .../  */}
                        <div className='card122'>

                            <div className='cardUpper'>
                                <img src={female} alt="female" />
                                <div className='tee'>
                                    <h5>lucea</h5>
                                    <p>Store Link</p>
                                    <img src={stars} alt="star" />
                                </div>
                            </div>
                            <div className='cardLower'>
                                <p>As a customer, I had a fantastic experience using GetItNow! The website is easy to navigate, and I quickly found what I was looking for. Checkout was seamless, and delivery was faster than expected. Highly recommend for anyone looking for a smooth online shopping experience!</p>
                            </div>

                        </div>


                        {/* card .../  */}
                        <div className='card122'>

                            <div className='cardUpper'>
                                <img src={male2} alt="male" />
                                <div className='tee'>
                                    <h5>roger</h5>
                                    <p>Store Link</p>
                                    <img src={stars} alt="star" />
                                </div>
                            </div>
                            <div className='cardLower'>
                                <p>As a customer, I had a fantastic experience using GetItNow! The website is easy to navigate, and I quickly found what I was looking for. Checkout was seamless, and delivery was faster than expected. Highly recommend for anyone looking for a smooth online shopping experience!</p>
                            </div>

                        </div>


                        {/* card .../  */}
                        <div className='card122'>

                            <div className='cardUpper'>
                                <img src={female1} alt="male" />
                                <div className='tee'>
                                    <h5>trishh</h5>
                                    <p>Store Link</p>
                                    <img src={stars} alt="star" />
                                </div>
                            </div>
                            <div className='cardLower'>
                                <p>As a customer, I had a fantastic experience using GetItNow! The website is easy to navigate, and I quickly found what I was looking for. Checkout was seamless, and delivery was faster than expected. Highly recommend for anyone looking for a smooth online shopping experience!</p>
                            </div>

                        </div>
                    </div>
                   
                </div>

            </main>
        </>
    )
}
