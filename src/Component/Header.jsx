import React from 'react';
import '../ComponentCss/Header.css'
import Down from "../assets/NavbarDown.svg";
import Logo from "../assets/Logo.gif";

export default function Header() {

    var num = 1
    function toggleMobileDropdown() {
        num += 1 ; 
        if (num === 2) {
            document.querySelector('#mobileDropdown').style.display = "block";
        } else if (num > 2) {
            document.querySelector('#mobileDropdown').style.display = "none";
            num = 1; 
        }
        
        
        document.querySelector('#line1').classList.toggle('line1');
        document.querySelector('#line2').classList.toggle('line2');
        document.querySelector('#line3').classList.toggle('line3');
    }
    
    return (
        <>

            {/* navbar pc */}
            <header>
                <nav>
                    <span id='Logo'><img src={Logo} alt="Logo" /><h1>GetItNow</h1></span>
                    <ul id='navbar'>
                        <li>Catalog</li>
                        <li id='dropDown-HowItWorks'>

                            How it Works <img id='downImgNavbar' src={Down} alt="down" />
                            {/* dropDown  */}
                            <ul className='Dropdown'>
                                <li>How GetItNow Works</li>
                                <li>Print On Demand</li>
                                <li>GetItNow Quality Promise</li>
                                <li>What to sell ?</li>
                            </ul>
                            {/* end */}

                        </li>
                        <li>Prizing</li>
                        <li>Blog</li>
                        <li id='dropDown-Servies' >
                            Services  <img id='downImgNavbar1' src={Down} alt="down" />
                            {/* dropdown1  */}
                            <ul className='Dropdown'>
                                <li></li>
                                <li></li>
                                <li></li>
                            </ul>
                            </li>
                                    {/* end */}
                        <li id='dropDown-Usecase' >

                            Use-cases  <img id='downImgNavbar2' src={Down} alt="down" />
                            {/* dropdown2  */}
                            <ul className='Dropdown'>
                                <li>Merch for Fans</li>
                                <li>Merch for eCommerce</li>
                                <li>Merch fro Enterprises</li>
                                <li>Grow Your Store</li>
                            </ul>
                            {/* end */}

                        </li>
                        <li id='dropDown-help' >

                            Need help?  <img id='downImgNavbar3' src={Down} alt="down" />
                            {/* dropdown3  */}
                            <ul className='Dropdown'>
                                <li>Help Center</li>
                                <li>Contect</li>
                                <li>My Requests</li>
                            </ul>
                            {/* end */}

                        </li>
                    </ul>

                    {/* //..............mobile Navbar ................ */}
                    <div id='LineBox' onClick={toggleMobileDropdown}>
                       <div id='line1'></div>
                       <div id='line2'></div>
                       <div id='line3'></div>
                    </div>

                    <ul id='mobileDropdown'>
                    
                            <li>Catelog</li>
                            <li id='n1'>How It Works <img id='downImgNavbar4' src={Down} alt="down" /></li>
                            <li>Prizing</li>
                            <li>Blog</li>
                            <li id='n2'>Services <img id='downImgNavbar5' src={Down} alt="down" /></li>
                            <li id='n3'>Use-Cases <img id='downImgNavbar6' src={Down} alt="down" /></li>
                            <li id='n4'>Need help? <img id='downImgNavbar7' src={Down} alt="down" /></li>
                       
                    </ul>
                    {/* login and signup button area  */}

                    <span id='login_signUp_Box'>
                        <button id='login'>Login</button>
                        <button id='sign-up'>Sign-Up</button>
                    </span>
                </nav>
            </header>


        </>
    )
}
