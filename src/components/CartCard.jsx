import './CartCard.css';

const CartCard = () => {
    return (
        <div className='cart-card'>
            <div className='wide-sm-card'>
                <button className='button-cancel'>X</button>
                <img src="https://i.pinimg.com/564x/52/9a/65/529a659e952ef12416631157be78299c.jpg" alt="" />
                <div className=''>
                    <div><h4>T-Shirt Black Solid Color</h4>
                        <p>Brand Name: Unknown</p></div>

                    <div>
                        <div className="quantity-size-container ">
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
                    </div>
                    <h4>Price: 700 BDT</h4>
                    <div className='price-btn'>
                        <button className='btn-wide-sm-view'>View Details</button>
                        <button className='btn-wide-sm-order'>Order Now</button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default CartCard;