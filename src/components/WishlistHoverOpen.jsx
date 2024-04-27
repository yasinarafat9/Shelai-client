import './WishlistHoverOpen.css';

const WishlistHoverOpen = () => {
    return (
        <div className='wishlist-hover-open'>
            <h4 className='title'>My WIshlist</h4>
            <div className='wide-sm-card'>
                <button className='button-cancel'>X</button>
                <img src="https://i.pinimg.com/564x/52/9a/65/529a659e952ef12416631157be78299c.jpg" alt="" />
                <div className='texts-container'>
                    <h4>T-Shirt Black Solid Color</h4>
                    <p>Brand Name: Unknown</p>
                    <h4>Price: 700 BDT</h4>
                    <div className='price-btn'>
                        <button className='btn-wide-sm-view'>View Details</button>
                        <button className='btn-wide-sm-order'>Order Now</button>
                    </div>
                </div>
            </div>
            <div className='wide-sm-card'>
                <button className='button-cancel'>X</button>
                <img src="https://i.pinimg.com/564x/27/3b/06/273b06b3c4b62fa5992048b78e1c8ebf.jpg" alt="" />
                <div className='texts-container'>
                    <h4>T-Shirt Black Solid Color</h4>
                    <p>Brand Name: Unknown</p>
                    <h4>Price: 700 BDT</h4>
                    <div className='price-btn'>
                        <button className='btn-wide-sm-view'>View Details</button>
                        <button className='btn-wide-sm-order'>Order Now</button>
                    </div>
                </div>
            </div>
            <div className='wide-sm-card'>
                <button className='button-cancel'>X</button>
                <img src="https://i.pinimg.com/564x/10/b5/59/10b5596b56c330b559b602cac16be96e.jpg" alt="" />
                <div className='texts-container'>
                    <h4>Jeans Pant Black Solid Color</h4>
                    <p>Brand Name: Unknown</p>
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

export default WishlistHoverOpen;