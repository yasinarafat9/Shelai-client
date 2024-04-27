import React from 'react';
import './Navbar.css';
import { Link, NavLink } from 'react-router-dom';
import { FaRegUser } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { BsBag } from "react-icons/bs";
import { IoIosSearch } from "react-icons/io";
import { FaBars } from "react-icons/fa";
import { FaBell } from "react-icons/fa";

import BagHoverOpen from './BagHoverOpen';
import WishlistHoverOpen from './WishlistHoverOpen';


const Navbar = () => {

    const Men = <>
        <div className='hover-to-open'>
            <div className='devider'>
                <div>
                    <ul>
                        <h4>Topwear</h4>
                        <ul>
                            <li><Link to="/" className='navlink'>T-Shirts</Link></li>
                            <li><Link to="/" className='navlink'>Casual Shirts</Link></li>
                            <li><Link to="/" className='navlink'>Formal Shirts</Link></li>
                            <li><Link to="/" className='navlink'>Sweatshirts</Link></li>
                            <li><Link to="/" className='navlink'>Sweaters</Link></li>
                            <li><Link to="/" className='navlink'>Jackets</Link></li>
                            <li><Link to="/" className='navlink'>Blazers&Coats</Link></li>
                            <li><Link to="/" className='navlink'>Suits</Link></li>
                            <li><Link to="/" className='navlink'>Rain Jackets</Link></li>
                        </ul>
                    </ul>
                    <br></br>
                    <ul>
                        <h4>Indian & Festive Wear</h4>
                        <li><Link to="/" className='navlink'>Kutas & Kurta Sets</Link></li>
                        <li><Link to="/" className='navlink'>Sherwanis</Link></li>
                        <li><Link to="/" className='navlink'>Nehru Jackets</Link></li>
                        <li><Link to="/" className='navlink'>Dhotis</Link></li>
                    </ul>
                </div>
                <div>
                    <ul>
                        <h4>Bottomwear</h4>
                        <li><Link to="/men/jeans" className='navlink'>Jeans</Link></li>
                        <li><Link to="/" className='navlink'>Casual Trousers</Link></li>
                        <li><Link to="/" className='navlink'>Formal Trousers</Link></li>
                        <li><Link to="/" className='navlink'>Shorts</Link></li>
                        <li><Link to="/" className='navlink'>Track Pants & Joggers</Link></li>
                    </ul>
                    <br></br>
                    <ul>
                        <h4>Innerwear & Sleepwear</h4>
                        <li><Link to="/" className='navlink'>Briefs & Trunks</Link></li>
                        <li><Link to="/" className='navlink'>Вохег</Link></li>
                        <li><Link to="/" className='navlink'>Vests</Link></li>
                        <li><Link to="/" className='navlink'>Sleepwear & Loungewear</Link></li>
                        <li><Link to="/" className='navlink'>Thermals</Link></li>
                    </ul>
                    <br />
                    <ul>
                        <h4>Plus Size</h4>
                    </ul>
                </div>
                <div>
                    <ul>
                        <h4>Footwear</h4>
                        <li><Link to="/" className='navlink'>Casual Shoes</Link></li>
                        <li><Link to="/" className='navlink'>Sports Shoes</Link></li>
                        <li><Link to="/" className='navlink'>Formal Shoes</Link></li>
                        <li><Link to="/" className='navlink'>Sneakers</Link></li>
                        <li><Link to="/" className='navlink'>Sandals & Floaters</Link></li>
                        <li><Link to="/" className='navlink'>Flip Flops Socks</Link></li>
                        <br />

                        <h4>Personal Care & Grooming</h4>
                        <br />
                        <h4>Sunglasses & Frames</h4>
                        <br />
                        <h4>Watches</h4>
                    </ul>
                </div>
                <div>
                    <ul>
                        <h4>Sports & Active Wear</h4>
                        <li><Link to="/" className='navlink'>Sports Shoes</Link></li>
                        <li><Link to="/" className='navlink'>Sports Sandals</Link></li>
                        <li><Link to="/" className='navlink'>Active T-Shirts</Link></li>
                        <li><Link to="/" className='navlink'>Track Pants & Shorts</Link></li>
                        <li><Link to="/" className='navlink'>Tracksuits</Link></li>
                        <li><Link to="/" className='navlink'>Jackets & Sweatshirts</Link></li>
                        <li><Link to="/" className='navlink'>Sports Accessories</Link></li>
                        <li><Link to="/" className='navlink'>Swimwear</Link></li>
                    </ul>
                    <br />
                    <ul>
                        <h4>Gadgets</h4>
                        <li><Link to="/" className='navlink'>Smart Wearables</Link></li>
                        <li><Link to="/" className='navlink'>Fitness Gadgets</Link></li>
                        <li><Link to="/" className='navlink'>Headphones</Link></li>
                        <li><Link to="/" className='navlink'>Speakers</Link></li>
                    </ul>
                </div>
                <div>
                    <ul>
                        <h4>Fashion Accessories</h4>
                        <li><Link to="/" className='navlink'>Wallets</Link></li>
                        <li><Link to="/" className='navlink'>Belts</Link></li>
                        <li><Link to="/" className='navlink'>Perfumes & Body Mists</Link></li>
                        <li><Link to="/" className='navlink'>Trimmers</Link></li>
                        <li><Link to="/" className='navlink'>Deodorants</Link></li>
                        <li><Link to="/" className='navlink'>Ties, Cufflinks & Pocket Squares</Link></li>
                        <li><Link to="/" className='navlink'>Accessory Gift Sets</Link></li>
                        <li><Link to="/" className='navlink'>Caps & Hats</Link></li>
                        <li><Link to="/" className='navlink'>Mufflers, Scarves & Gloves</Link></li>
                        <li><Link to="/" className='navlink'>Phone Cases</Link></li>
                        <li><Link to="/" className='navlink'>Rings & Wristwear</Link></li>
                        <li><Link to="/" className='navlink'>Helmets</Link></li>
                    </ul>
                    <br />
                    <ul>
                        <h4>Bags & Backpacks</h4>
                    </ul>
                    <br />
                    <ul>
                        <h4>Luggages & Trolleys</h4>
                    </ul>
                </div>
            </div>
        </div>
    </>
    const MenSm = <>
        <div className='hover-to-open'>
            <div className='devider'>
                <ul className='to-open'>
                    <h4>Topwear</h4>
                    <ul className='open'>
                        <li><Link to="/" className='navlink'>T-Shirts</Link></li>
                        <li><Link to="/" className='navlink'>Casual Shirts</Link></li>
                        <li><Link to="/" className='navlink'>Formal Shirts</Link></li>
                        <li><Link to="/" className='navlink'>Sweatshirts</Link></li>
                        <li><Link to="/" className='navlink'>Sweaters</Link></li>
                        <li><Link to="/" className='navlink'>Jackets</Link></li>
                        <li><Link to="/" className='navlink'>Blazers&Coats</Link></li>
                        <li><Link to="/" className='navlink'>Suits</Link></li>
                        <li><Link to="/" className='navlink'>Rain Jackets</Link></li>
                    </ul>
                </ul>
                <ul className='to-open'>
                    <h4>Indian & Festive Wear</h4>
                    <ul className='open'>
                        <li><Link to="/" className='navlink'>Kutas & Kurta Sets</Link></li>
                        <li><Link to="/" className='navlink'>Sherwanis</Link></li>
                        <li><Link to="/" className='navlink'>Nehru Jackets</Link></li>
                        <li><Link to="/" className='navlink'>Dhotis</Link></li>
                    </ul>
                </ul>


                <ul className='to-open'>
                    <h4>Bottomwear</h4>
                    <ul className="open">
                        <li><Link to="/men/jeans" className='navlink'>Jeans</Link></li>
                        <li><Link to="/" className='navlink'>Casual Trousers</Link></li>
                        <li><Link to="/" className='navlink'>Formal Trousers</Link></li>
                        <li><Link to="/" className='navlink'>Shorts</Link></li>
                        <li><Link to="/" className='navlink'>Track Pants & Joggers</Link></li>
                    </ul>
                </ul>

                <ul className='to-open'>
                    <h4>Innerwear & Sleepwear</h4>
                    <ul className="open">
                        <li><Link to="/" className='navlink'>Briefs & Trunks</Link></li>
                        <li><Link to="/" className='navlink'>Вохег</Link></li>
                        <li><Link to="/" className='navlink'>Vests</Link></li>
                        <li><Link to="/" className='navlink'>Sleepwear & Loungewear</Link></li>
                        <li><Link to="/" className='navlink'>Thermals</Link></li>
                    </ul>
                </ul>

                <ul className='to-open'>
                    <h4>Footwear</h4>
                    <ul className='open'>
                        <li><Link to="/" className='navlink'>Casual Shoes</Link></li>
                        <li><Link to="/" className='navlink'>Sports Shoes</Link></li>
                        <li><Link to="/" className='navlink'>Formal Shoes</Link></li>
                        <li><Link to="/" className='navlink'>Sneakers</Link></li>
                        <li><Link to="/" className='navlink'>Sandals & Floaters</Link></li>
                        <li><Link to="/" className='navlink'>Flip Flops Socks</Link></li>
                    </ul>
                </ul>

                <ul className='to-open'>
                    <h4>Sports & Active Wear</h4>
                    <ul className='open'>
                        <li><Link to="/" className='navlink'>Sports Shoes</Link></li>
                        <li><Link to="/" className='navlink'>Sports Sandals</Link></li>
                        <li><Link to="/" className='navlink'>Active T-Shirts</Link></li>
                        <li><Link to="/" className='navlink'>Track Pants & Shorts</Link></li>
                        <li><Link to="/" className='navlink'>Tracksuits</Link></li>
                        <li><Link to="/" className='navlink'>Jackets & Sweatshirts</Link></li>
                        <li><Link to="/" className='navlink'>Sports Accessories</Link></li>
                        <li><Link to="/" className='navlink'>Swimwear</Link></li>
                    </ul>
                </ul>
                <ul className='to-open'>
                    <h4>Gadgets</h4>
                    <ul className='open'>
                        <li><Link to="/" className='navlink'>Smart Wearables</Link></li>
                        <li><Link to="/" className='navlink'>Fitness Gadgets</Link></li>
                        <li><Link to="/" className='navlink'>Headphones</Link></li>
                        <li><Link to="/" className='navlink'>Speakers</Link></li>
                    </ul>
                </ul>
                <ul className='to-open'>
                    <h4>Fashion Accessories</h4>
                    <ul className='open'>
                        <li><Link to="/" className='navlink'>Wallets</Link></li>
                        <li><Link to="/" className='navlink'>Belts</Link></li>
                        <li><Link to="/" className='navlink'>Perfumes & Body Mists</Link></li>
                        <li><Link to="/" className='navlink'>Trimmers</Link></li>
                        <li><Link to="/" className='navlink'>Deodorants</Link></li>
                        <li><Link to="/" className='navlink'>Ties, Cufflinks & Pocket Squares</Link></li>
                        <li><Link to="/" className='navlink'>Accessory Gift Sets</Link></li>
                        <li><Link to="/" className='navlink'>Caps & Hats</Link></li>
                        <li><Link to="/" className='navlink'>Mufflers, Scarves & Gloves</Link></li>
                        <li><Link to="/" className='navlink'>Phone Cases</Link></li>
                        <li><Link to="/" className='navlink'>Rings & Wristwear</Link></li>
                        <li><Link to="/" className='navlink'>Helmets</Link></li>
                    </ul>
                </ul>
                <ul className='to-open'>
                    <h4>Bags & Backpacks</h4>
                    <ul className="open">
                        <li><Link to="/" className='navlink'>Coming Soon..</Link></li>
                    </ul>
                </ul>
                <ul className='to-open'>
                    <h4>Luggages & Trolleys</h4>
                    <ul className="open">
                        <li><Link to="/" className='navlink'>Coming Soon..</Link></li>
                    </ul>
                </ul>
                <ul className='to-open'>
                    <h4>Plus Size</h4>
                    <ul className="open">
                        <li><Link to="/" className='navlink'>Coming Soon..</Link></li>
                    </ul>
                </ul>
                <ul className='to-open'>
                    <h4>Personal Care & Grooming</h4>
                    <ul className="open">
                        <li><Link to="/" className='navlink'>Coming Soon..</Link></li>
                    </ul>
                </ul>
                <ul className='to-open'>
                    <h4>Sunglasses & Frames</h4>
                    <ul className="open">
                        <li><Link to="/" className='navlink'>Coming Soon..</Link></li>
                    </ul>
                </ul>
                <ul className='to-open'>
                    <h4>Watches</h4>
                    <ul className="open">
                        <li><Link to="/" className='navlink'>Coming Soon..</Link></li>
                    </ul>
                </ul>
            </div>
        </div>
    </>

    const WomenSm = <>
        <div className='hover-to-open'>
            <div className='devider women'>
                <ul className='to-open'>
                    <h4>Indian & Fusion Wear Kurtas & Suits</h4>
                    <ul className="open">
                        <li><Link to="/" className='navlink'>Kurtis, Tunics & Tops</Link></li>
                        <li><Link to="/" className='navlink'>Sarees</Link></li>
                        <li><Link to="/" className='navlink'>Ethnic Wear</Link></li>
                        <li><Link to="/" className='navlink'>Leggings, Salwars & Churidars</Link></li>
                        <li><Link to="/" className='navlink'>Skirts & Palecos</Link></li>
                        <li><Link to="/" className='navlink'>Dress Materials</Link></li>
                        <li><Link to="/" className='navlink'>Lehenga Cholis</Link></li>
                        <li><Link to="/" className='navlink'>Dupattas & Shawls Jackets</Link></li>
                    </ul>
                </ul>
                <ul className='to-open'>
                    <h4>Belts, Scarves & More</h4>
                    <ul className="open">
                        <li><Link to="/" className='navlink'>Coming Soon</Link></li>
                    </ul>
                </ul>
                <ul className='to-open'>
                    <h4>Watches & Wearables</h4>
                    <ul className="open">
                        <li><Link to="/" className='navlink'>Coming Soon</Link></li>
                    </ul>
                </ul>
                <ul className='to-open'>
                    <h4>Western Wear</h4>
                    <ul className="open">
                        <li><Link to="/" className='navlink'>Dresses</Link></li>
                        <li><Link to="/" className='navlink'>Tops</Link></li>
                        <li><Link to="/" className='navlink'>Tshirts</Link></li>
                        <li><Link to="/" className='navlink'>Jeans</Link></li>
                        <li><Link to="/" className='navlink'>Trousers & Capris</Link></li>
                        <li><Link to="/" className='navlink'>Shorts & Skirts</Link></li>
                        <li><Link to="/" className='navlink'>Co-ords</Link></li>
                        <li><Link to="/" className='navlink'>Playsuits</Link></li>
                        <li><Link to="/" className='navlink'>Jumpsuits</Link></li>
                        <li><Link to="/" className='navlink'>Shrugs</Link></li>
                        <li><Link to="/" className='navlink'>Sweaters & Sweatshirts</Link></li>
                        <li><Link to="/" className='navlink'>Jackets & Coats</Link></li>
                        <li><Link to="/" className='navlink'>Blazers & Weistcoats</Link></li>
                    </ul>
                </ul>
                <ul className='to-open'>
                    <h4>Plus Size</h4>
                    <ul className="open">
                        <li><Link to="/" className='navlink'>Coming Soon</Link></li>
                    </ul>
                </ul>
                <ul className='to-open'>
                    <h4>Maternity</h4>
                    <ul className="open">
                        <li><Link to="/" className='navlink'>Coming Soon</Link></li>
                    </ul>
                </ul>
                <ul className='to-open'>
                    <h4>Sunglasses & Frames</h4>
                    <ul className="open">
                        <li><Link to="/" className='navlink'>Coming Soon</Link></li>
                    </ul>
                </ul>
                <ul className='to-open'>
                    <h4>Footwear</h4>
                    <ul className="open">
                        <li><Link to="/" className='navlink'>Flats</Link></li>
                        <li><Link to="/" className='navlink'>Casual Shoes</Link></li>
                        <li><Link to="/" className='navlink'>Heels</Link></li>
                        <li><Link to="/" className='navlink'>Boots</Link></li>
                        <li><Link to="/" className='navlink'>Sports Shoes & Floaters</Link></li>
                    </ul>
                </ul>
                <ul className='to-open'>
                    <h4>Sports & Active Wear</h4>
                    <ul className="open">
                        <li><Link to="/" className='navlink'>Clothing</Link></li>
                        <li><Link to="/" className='navlink'>Footwear</Link></li>
                        <li><Link to="/" className='navlink'>Sports Accessories</Link></li>
                        <li><Link to="/" className='navlink'>Sports Equipment</Link></li>
                    </ul>
                </ul>
                <ul className='to-open'>
                    <h4>Lingerie & Sleepwear</h4>
                    <ul className="open">
                        <li><Link to="/" className='navlink'>Вгa</Link></li>
                        <li><Link to="/" className='navlink'>Briefs</Link></li>
                        <li><Link to="/" className='navlink'>Shapewear</Link></li>
                        <li><Link to="/" className='navlink'>Sleepwear & Loungewear</Link></li>
                        <li><Link to="/" className='navlink'>Swimwear</Link></li>
                        <li><Link to="/" className='navlink'>Camisoles & Thermals</Link></li>
                    </ul>
                </ul>
                <ul className='to-open'>
                    <h4>Beauty & Personal Care</h4>
                    <ul className="open">
                        <li><Link to="/" className='navlink'>Makeup</Link></li>
                        <li><Link to="/" className='navlink'>Skincare</Link></li>
                        <li><Link to="/" className='navlink'>Premium Beauty</Link></li>
                        <li><Link to="/" className='navlink'>Lipsticks Fragrances</Link></li>
                    </ul>
                </ul>
                <ul className='to-open'>
                    <h4>Gadgets</h4>
                    <ul className="open">
                        <li><Link to="/" className='navlink'>Smart Wearables</Link></li>
                        <li><Link to="/" className='navlink'>Fitness Gadgets</Link></li>
                        <li><Link to="/" className='navlink'>Headphones</Link></li>
                        <li><Link to="/" className='navlink'>Speakers</Link></li>
                    </ul>
                </ul>
                <ul className='to-open'>
                    <h4>Jewellery</h4>
                    <ul className="open">
                        <li><Link to="/" className='navlink'>Fashion Jewellery</Link></li>
                        <li><Link to="/" className='navlink'>Fine Jewellery</Link></li>
                        <li><Link to="/" className='navlink'>Earrings</Link></li>
                    </ul>
                </ul>
                <ul className='to-open'>
                    <h4> Backpacks</h4>
                    <ul className="open">
                        <li><Link to="/" className='navlink'>Coming Soon</Link></li>
                    </ul>
                </ul>

                <ul className='to-open'>
                    <h4>Handbags, Bags & Wallets</h4>
                    <ul className="open">
                        <li><Link to="/" className='navlink'>Coming Soon</Link></li>
                    </ul>
                </ul>
                <ul className='to-open'>
                    <h4>Luggages & Trolleys</h4>
                    <ul className="open">
                        <li><Link to="/" className='navlink'>Coming Soon</Link></li>
                    </ul>
                </ul>
            </div>
        </div>
    </>
    const Women = <>
        <div className='hover-to-open'>
            <div className='devider women'>
                <div>
                    <ul>
                        <h4>Indian & Fusion Wear Kurtas & Suits</h4>
                        <li><Link to="/" className='navlink'>Kurtis, Tunics & Tops</Link></li>
                        <li><Link to="/" className='navlink'>Sarees</Link></li>
                        <li><Link to="/" className='navlink'>Ethnic Wear</Link></li>
                        <li><Link to="/" className='navlink'>Leggings, Salwars & Churidars</Link></li>
                        <li><Link to="/" className='navlink'>Skirts & Palecos</Link></li>
                        <li><Link to="/" className='navlink'>Dress Materials</Link></li>
                        <li><Link to="/" className='navlink'>Lehenga Cholis</Link></li>
                        <li><Link to="/" className='navlink'>Dupattas & Shawls Jackets</Link></li>
                    </ul>

                    <ul>
                        <h4>Belts, Scarves & More</h4>
                    </ul>
                    <br />
                    <ul>
                        <h4>Watches & Wearables</h4>
                    </ul>
                </div>
                <div>
                    <ul>
                        <h4>Western Wear</h4>
                        <li><Link to="/" className='navlink'>Dresses</Link></li>
                        <li><Link to="/" className='navlink'>Tops</Link></li>
                        <li><Link to="/" className='navlink'>Tshirts</Link></li>
                        <li><Link to="/" className='navlink'>Jeans</Link></li>
                        <li><Link to="/" className='navlink'>Trousers & Capris</Link></li>
                        <li><Link to="/" className='navlink'>Shorts & Skirts</Link></li>
                        <li><Link to="/" className='navlink'>Co-ords</Link></li>
                        <li><Link to="/" className='navlink'>Playsuits</Link></li>
                        <li><Link to="/" className='navlink'>Jumpsuits</Link></li>
                        <li><Link to="/" className='navlink'>Shrugs</Link></li>
                        <li><Link to="/" className='navlink'>Sweaters & Sweatshirts</Link></li>
                        <li><Link to="/" className='navlink'>Jackets & Coats</Link></li>
                        <li><Link to="/" className='navlink'>Blazers & Weistcoats</Link></li>
                    </ul>
                    <br />
                    <ul>
                        <h4>Plus Size</h4>
                    </ul>
                </div>
                <div>
                    <ul>
                        <h4>Maternity</h4>
                    </ul>
                    <br />
                    <ul>
                        <h4>Sunglasses & Frames</h4>
                    </ul>
                    <br />
                    <ul>
                        <h4>Footwear</h4>
                        <li><Link to="/" className='navlink'>Flats</Link></li>
                        <li><Link to="/" className='navlink'>Casual Shoes</Link></li>
                        <li><Link to="/" className='navlink'>Heels</Link></li>
                        <li><Link to="/" className='navlink'>Boots</Link></li>
                        <li><Link to="/" className='navlink'>Sports Shoes & Floaters</Link></li>
                    </ul>
                    <br />
                    <ul>
                        <h4>Sports & Active Wear</h4>
                        <li><Link to="/" className='navlink'>Clothing</Link></li>
                        <li><Link to="/" className='navlink'>Footwear</Link></li>
                        <li><Link to="/" className='navlink'>Sports Accessories</Link></li>
                        <li><Link to="/" className='navlink'>Sports Equipment</Link></li>
                    </ul>
                </div>
                <div>
                    <ul>
                        <h4>Lingerie & Sleepwear</h4>
                        <li><Link to="/" className='navlink'>Вгa</Link></li>
                        <li><Link to="/" className='navlink'>Briefs</Link></li>
                        <li><Link to="/" className='navlink'>Shapewear</Link></li>
                        <li><Link to="/" className='navlink'>Sleepwear & Loungewear</Link></li>
                        <li><Link to="/" className='navlink'>Swimwear</Link></li>
                        <li><Link to="/" className='navlink'>Camisoles & Thermals</Link></li>
                    </ul>
                    <br />
                    <ul>
                        <h4>Beauty & Personal Care</h4>
                        <li><Link to="/" className='navlink'>Makeup</Link></li>
                        <li><Link to="/" className='navlink'>Skincare</Link></li>
                        <li><Link to="/" className='navlink'>Premium Beauty</Link></li>
                        <li><Link to="/" className='navlink'>Lipsticks Fragrances</Link></li>
                    </ul>
                </div>
                <div>
                    <ul>
                        <h4>Gadgets</h4>
                        <li><Link to="/" className='navlink'>Smart Wearables</Link></li>
                        <li><Link to="/" className='navlink'>Fitness Gadgets</Link></li>
                        <li><Link to="/" className='navlink'>Headphones</Link></li>
                        <li><Link to="/" className='navlink'>Speakers</Link></li>
                    </ul>
                    <br />
                    <ul>
                        <h4>Jewellery</h4>
                        <li><Link to="/" className='navlink'>Fashion Jewellery</Link></li>
                        <li><Link to="/" className='navlink'>Fine Jewellery</Link></li>
                        <li><Link to="/" className='navlink'>Earrings</Link></li>
                    </ul>
                    <br />
                    <ul>
                        <h4> Backpacks</h4>
                    </ul>
                    <br />
                    <ul>
                        <h4>Handbags, Bags & Wallets</h4>
                    </ul>
                    <br />
                    <ul>
                        <h4>Luggages & Trolleys</h4>
                    </ul>
                </div>
            </div>
        </div>
    </>



    return (
        <>
            {/* LARGE DISPLAY NAVBAR */}
            <nav className='nav-lg'>
                {/* <button className='fa-bar-btn'><FaBars className='fa-bars-icon' ></FaBars></button> */}
                <Link to="/" className='navlink'><h2 className='company-name'>Shelai</h2></Link>
                <ul>
                    <NavLink className="navlink" to="/"><li className='hover'>Men {Men}</li></NavLink>
                    <NavLink className="navlink" to="/"><li className='hover'>Women {Women}</li> </NavLink>
                    <NavLink className="navlink" to="/"><li>Kids</li></NavLink>
                    <NavLink className="navlink" to="/"><li>Brands</li></NavLink>
                    <NavLink className="navlink" to="/"><li>Beauty</li></NavLink>
                    <NavLink className="navlink" to="/"><li>Jewellery</li></NavLink>

                </ul>
                <div className='search-container'>
                    <input type="search" placeholder='Search Item Here' />
                    <button className='btn-search'><IoIosSearch className='search-icon'></IoIosSearch></button>
                </div>
                <div className='nav-icons'>
                    <button><NavLink to="/login" className="navlink">Login</NavLink></button>
                    <NavLink className="navlink" to="dashboard"> <FaBell className='icon'></FaBell> </NavLink>
                    <NavLink className="navlink" to="dashboard"> <FaRegUser className='icon'></FaRegUser> </NavLink>
                    <NavLink className="navlink wishlist-hover" to="/"> <FaRegHeart className='icon'></FaRegHeart><WishlistHoverOpen /></NavLink>
                    <NavLink className="navlink bag-hover" to="/">  <BsBag className='icon'></BsBag><BagHoverOpen /> </NavLink>
                </div>

            </nav>

            {/* MOBILE DISPLAY NAVBAR */}
            <nav className='nav-sm'>
                <div className='upper-part'>
                    <Link to="/" className='navlink'><h2 className='company-name'>Shelai</h2></Link>
                    <div className='nav-icons'>
                        <button><NavLink to="/login" className="navlink">Login</NavLink></button>
                        <NavLink className="navlink" to="dashboard"> <FaBell className='icon'></FaBell> </NavLink>
                        <NavLink className="navlink" to="/"> <FaRegUser></FaRegUser> </NavLink>
                        <NavLink className="navlink wishlist-hover" to="/"> <FaRegHeart></FaRegHeart><WishlistHoverOpen /></NavLink>
                        <NavLink className="navlink bag-hover" to="/"> <BsBag></BsBag><BagHoverOpen /></NavLink>
                    </div>

                </div>
                <div className='bottom-part'>
                    <button className='fa-bar-btn'><FaBars className='fa-bars-icon' ></FaBars>
                        <ul className='open-sm-nav'>
                            <NavLink className="navlink" to="/"><li className='hover'>Men {MenSm}</li></NavLink>
                            <NavLink className="navlink" to="/"><li className='hover'>Women {WomenSm}</li> </NavLink>
                            <NavLink className="navlink" to="/"><li className='hover'>Kids</li></NavLink>
                            <NavLink className="navlink" to="/"><li className='hover'>Brands</li></NavLink>
                            <NavLink className="navlink" to="/"><li className='hover'>Beauty</li></NavLink>
                            <NavLink className="navlink" to="/"><li className='hover'>Jewellery</li></NavLink>

                        </ul>
                    </button>
                    <div className='search-container'>
                        <input type="search" placeholder='Search Item Here' />
                        <button><IoIosSearch ></IoIosSearch></button>
                    </div>
                </div>



            </nav>
        </>
    );
};

export default Navbar;