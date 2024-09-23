import React from 'react'
import "../ComponentCss/footer.css"
import insta from "../assets/insta-svgrepo-com.svg"
import status from "../assets/status-svgrepo-com.svg"
import video from "../assets/video-svgrepo-com.svg"


export default function Footer() {
    return (
        <footer>
            <div id='outer232'>
                <div id='level1'>

                    <img src={insta} alt="icon" />
                    <img src={status} alt="icon" />
                    <img src={video} alt="icon" />


                </div>

                <div id='level2'>

                    <ul>
                        <li className='bold'>Integrations</li>
                        <li>Shopify</li>
                        <li>Etsy</li>
                        <li>eBay</li>
                        <li>Amazon</li>
                        <li>TikTok Shop</li>
                        <li>PrestaShop</li>
                        <li>BigCommerce</li>
                        <li>Wix</li>
                        <li>WooCommerce</li>
                        <li>Squarespace</li>
                        <li>getItNow API</li>
                        <li>getItNow Pop-Up Store</li>
                        <li>Shutterstock</li>
                    </ul>


                    <ul>
                        <li className='bold'>Discover</li>
                        <li>Blog</li>
                        <li>Guides</li>
                        <li>Products</li>
                        <li>Etsy print-on-demand</li>
                        <li>Shopify print-on-demand</li>
                        <li>Woocommerce print-on-demand</li>
                        <li>Wix print-on-demand</li>
                        <li>Squarespace print-on-demand</li>
                        <li>Make Your Own Shirt</li>
                    </ul>


                    <ul>
                        <li className='bold'>Start selling</li>
                        <li>Custom Hoodies</li>
                        <li>Custom Mugs</li>
                        <li>Custom Socks</li>
                        <li>Custom Backpacks</li>
                        <li>Custom Branding</li>
                        <li>Sell on Etsy</li>
                        <li>Sell on Social Media</li>
                        <li>Free T-shirt Designs</li>
                    </ul>

                    <ul>
                        <li className='bold'>getItNow</li>

                        <li>Experts Program</li>
                        <li>Printify Express Delivery</li>
                        <li>Become a Partner</li>
                        <li>About</li>
                        <li>Printify Quality Promise</li>
                        <li>Jobs</li>
                        <li>Webinars</li>
                    </ul>
                    </div> 
                    <div id='level3'>
                        <ul>
                            <li>Intellectual Property Policy</li>
                            <li>Terms of Service </li>
                            <li>Privacy Policy</li>
                            <li>Security</li>
                        </ul>
                       <div> @2024 getItNow, anurag verma all right reservd</div>

                   </div>
                   </div>
        </footer>
    )
}
