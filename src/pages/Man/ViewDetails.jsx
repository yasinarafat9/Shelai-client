import { useLoaderData, useSearchParams, useParams, Link } from "react-router-dom";
// import ReactImageMagnify from 'react-image-magnify';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { BsBag } from "react-icons/bs";
import { FaStar } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';



import './ViewDetails.css'
import { Rating } from "@smastrom/react-rating";
const ViewDetails = () => {
    const items = useLoaderData()
    const { id } = useParams()
    console.log(id)

    const selectedItem = items.find(item => item._id == id)
    console.log("Show selectedItem", selectedItem)

    const { _id, title, gender, brand, price, size, color, description, product_img, rating } = selectedItem





    return (
        <div className="view-details">

            <div className="first-two-section ">

                <Carousel className="carousel-container" autoPlay={true}>
                    {
                        product_img.map(img => <div img={img}>

                            <img src={img} alt="" />

                        </div>)
                    }
                </Carousel>

                {/* </section> */}


                {/* Right Side TEXTS SECTION And Quantity  */}
                <div className=" texts-section ">
                    <h1>{selectedItem?.title}</h1>
                    <h3>Brand Name: {selectedItem?.brand}</h3>
                    <h3>Color: {selectedItem?.color}</h3>
                    {/* <h5>Size Chart: </h5>
                    <div className="flex">
                        {
                            selectedItem.size.map(size => <div size={size}>
                                <button type="" className="btn-size">{size}</button>
                            </div>)
                        }
                    </div> */}
                    <h2 className="my-2 text-">Price: <span>{selectedItem?.price}</span>  BDT</h2>

                    <div className="quantity-size-container ">
                        <button className="love"><FaRegHeart ></FaRegHeart></button>
                        <div className="size-container">
                            <p>Size</p>
                            <div>
                                <button>-</button>
                                <input type="text" value={"Choose your Size"} />
                                <button>+</button>
                            </div>
                        </div>
                        <div className="quantity-container">
                            <p>Quantity</p>
                            <div>
                                <button>-</button>
                                <input type="text" value={1} />
                                <button>+</button>
                            </div>
                        </div>

                    </div>
                    <br />
                    <div className="buttons">
                        <button className="btn-bag">Add to Bag</button>
                        <Link to='../address'> <button className="btn-order ">Order Now  </button></Link>

                        {/* <button className="flex justify-center"><BsBag className="text-3xl"></BsBag> Add to Bag</button> */}
                    </div>
                    <br />
                    <hr />
                    <br />
                    {/* <p>Description: {selectedItem?.description}</p> */}
                    {/*  this was review section  */}
                </div>
            </div>
            <br />




            <br />
            <section className="m-auto tabs-section">
                <Tabs>
                    <TabList className=" m-auto">
                        <Tab >Description</Tab>
                        <Tab >Reviews</Tab>

                    </TabList>

                    <TabPanel>
                        <h4 className="title">Product Description</h4>
                        <div className="description">
                            <p>Description: "Crafted with unparalleled precision and adorned with meticulous detail, the Royal Sapphire Elegance gown stands as a testament to timeless grace and opulence. Every stitch tells a story of unparalleled craftsmanship, weaving together tradition and innovation in a harmonious symphony of fabric and design</p>
                            <br />
                            <p>At its core lies a rich, velvety fabric, reminiscent of midnight skies adorned with a myriad of twinkling stars. The deep sapphire hue, akin to the rarest of gemstones, commands attention with its regal allure. Luxuriously soft to the touch, the fabric drapes elegantly, cascading in graceful folds that accentuate the wearer's silhouette with a whisper of ethereal beauty.
                            </p>
                            <br />
                            <p>Embroidered motifs dance across the gown's surface, each thread meticulously placed to create a tapestry of intricate patterns that speak of a bygone era of grandeur and sophistication. Delicate filigree of silver and gold thread glimmers under the soft glow of candlelight, casting enchanting shadows that seem to come alive with every movement.
                            </p>
                        </div>

                    </TabPanel>
                    <TabPanel>
                        <section className="customer-reviews">
                            <h4 className="title">Customer Reviews</h4>
                            {
                                rating.map(rate => <div rate={rate} >
                                    <div className="customer-card">

                                        <div className="customer-info">
                                            <img className="customer-img" src={rate?.photoURL} alt="" />
                                            <div>
                                                <h4>{rate?.displayName}</h4>
                                                <small>{rate?.email}</small>
                                            </div>
                                        </div>

                                        <div>
                                            {/* <Rating className="" style={{ maxWidth: 40 }} value={rate?.rating} /> */}
                                            <div className="stars">
                                                <FaStar className="star"></FaStar>
                                                <FaStar className="star"></FaStar>
                                                <FaStar className="star"></FaStar>
                                                <FaStar className="star"></FaStar>
                                                <FaStar className="star"></FaStar>
                                            </div>
                                            <p>{rate?.comment}</p>
                                            <div className="review-img">
                                                {
                                                    rate?.review_img?.map(reviewImg => <div reviewImg={reviewImg}
                                                        className="review-img-card">

                                                        <img src={reviewImg} alt="" />

                                                    </div>)
                                                }
                                            </div>
                                        </div>
                                    </div>

                                </div>)
                            }
                        </section>
                    </TabPanel>

                </Tabs>

            </section>
            {/* PAIR IT WITH */}
            <section className="pair-it-with-section ">
                <h2 className="text-center">Pair It With</h2>
                <div className="cards-container">

                    <div className="product-card">
                        <input type="checkbox" />
                        <img src="https://i.pinimg.com/564x/76/ba/44/76ba44dfee2e1ede200a88c449a6c562.jpg" alt="" />
                        <div className='texts-container'>
                            <h4> Old Skool Shoe</h4>
                            <p>Brand Name: Vans </p>
                            <h4>Price: <span>7000</span> BDT</h4>
                            <button >View Details </button>
                        </div>
                    </div>
                    <div className="product-card">
                        <input type="checkbox" />
                        <img src="https://i.pinimg.com/564x/56/78/bd/5678bdf9361dffbb932d143b333ff3e2.jpg" alt="" />
                        <div className='texts-container'>
                            <h4>{"Mens Solid Color Waffie".substring(0, 27)}</h4>
                            <p>Brand Name: Vans </p>
                            <h4>Price: <span>2800</span> BDT</h4>
                            <button >View Details </button>
                        </div>
                    </div>
                    <div className="product-card">
                        <input type="checkbox" />
                        <img src="https://i.pinimg.com/564x/22/77/0c/22770c98caae52165040e72c70b637ba.jpg" alt="" />
                        <div className='texts-container'>
                            <h4>{"Ray Ban Glasses".substring(0, 27)}</h4>
                            <p>Brand Name: Vans </p>
                            <h4>Price: <span>650</span> BDT</h4>
                            <button >View Details </button>
                        </div>
                    </div>
                    <div className="product-card">
                        <input type="checkbox" />
                        <img src="https://i.pinimg.com/564x/d0/36/24/d03624db15fb4896e3f32662e90b7b23.jpg" alt="" />
                        <div className='texts-container'>
                            <h4>{"Skagen Brown Watch".substring(0, 27)}</h4>
                            <p>Brand Name: Skagen </p>
                            <h4>Price: <span>950</span> BDT</h4>
                            <button >View Details </button>
                        </div>
                    </div>
                </div>
            </section>
        </div >
    );
};

export default ViewDetails;