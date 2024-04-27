import './Footer.css'
import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook } from "react-icons/fa";
import { FaFacebookMessenger } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";



const Footer = () => {
    return (
        <div className='footer-section'>
            <footer className="footer-container">
                <ul className=''>
                    <h4 className="">Registered Office</h4>
                    <li><Link to="#" className="navlink">Floor 8 level </Link></li>
                    <li><Link to="#" className="navlink">1/A Jashimuddin Ave,</Link></li>
                    <li><Link to="#" className="navlink">Rak Tower</Link></li>
                    <li><Link to="#" className="navlink">Uttora  Dhaka 1230</Link></li>
                </ul>
                <ul className=''>
                    <h4 className="">Customer care </h4>
                    <li><Link to="#" className="navlink">01615764414</Link></li>
                    <li><Link to="#" className="navlink">091457644414</Link></li>
                    <li><Link to="#" className="navlink">www.august.com</Link></li>
                </ul>
                <ul className=''>
                    <h4 className="">Supporting partner </h4>
                    <li><Link to="#" className="navlink">Brac trustee Ltd</Link></li>
                    <li><Link to="#" className="navlink">Transcom company</Link></li>
                    <li><Link to="#" className="navlink">Deshbondhu corporation</Link></li>
                </ul>

                <ul className=''>
                    <h4 className="">CUSTOMER POLICIES</h4>
                    <li><Link to="#" className="navlink">Contact Us</Link></li>
                    <li><Link to="#" className="navlink">FAQ</Link></li>
                    <li><Link to="#" className="navlink">T&C</Link></li>
                    <li><Link to="#" className="navlink">Terms Of Use</Link></li>
                    <li><Link to="#" className="navlink">Track Orders</Link></li>
                    <li><Link to="#" className="navlink">Shipping</Link></li>
                    <li><Link to="#" className="navlink">Cancellation</Link></li>
                    <li><Link to="#" className="navlink">Returns</Link></li>
                    <li><Link to="#" className="navlink">Privacy policy</Link></li>
                    <li><Link to="#" className="navlink">Grievance Officer</Link></li>
                </ul>
                <ul className='social'>
                    <h4 className="">Social Media</h4>
                    <ul className='social-icons'>
                        <li className=''><Link to="#" className='navlink'><FaFacebook></FaFacebook></Link></li>
                        <li className=''><Link to="#" className='navlink'><FaFacebookMessenger></FaFacebookMessenger></Link></li>
                        <li className=''><Link to="#" className='navlink'><FaInstagram></FaInstagram></Link></li>
                        <li className=''><Link to="#" className='navlink'><FaTwitter></FaTwitter></Link></li>
                        <li className=''><Link to="#" className='navlink'><FaLinkedin></FaLinkedin></Link></li>
                        <li className=''><Link to="#" className='navlink'></Link><FaYoutube></FaYoutube></li>
                    </ul>
                    <br />
                    <form className='input-container'>
                        <h4 className="">Newsletter</h4>
                        <div className="">

                            <div className="join">
                                <input type="text" placeholder="username@site.com" className="" />

                            </div>
                            <textarea type="text" className='' placeholder='Share us Your Thought' />
                            <div className='text-right'>
                                <button className=" bg-[#6b9139]  p-2 px-5 text-center rounded-xl mt-2 mr-2">Submit</button>
                            </div>
                        </div>
                    </form>
                </ul>
                <ul className='download-app'>
                    <h4 >Download Our App</h4>
                    <div >
                        <li><a href="/" tabIndex="0"><img className='' src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Google_Play_Store_badge_EN.svg/2560px-Google_Play_Store_badge_EN.svg.png" alt="bn45" /></a></li>
                        <li><a href="/" tabIndex="0"><img className='' src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg" alt="bn45" /></a></li>
                    </div>

                </ul>
            </footer>

            <div className='copywrite'>
                <p >Copyright © 2024 - All right reserved by ACME Industries Ltd</p>
            </div>
        </div>
    );
};

export default Footer;