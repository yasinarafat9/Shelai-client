import { Link } from 'react-router-dom';
import './ProductCard.css';

const ProductCard = (props) => {
    const item = props?.item;
    console.log("CARDD", props.item)

    return (
        <Link to={`/men/viewDetails/${item?._id}`} className='navlink'>
            <div className='product-card'>
                <img src={item?.product_img[0]} alt="" />
                <div className='texts-container'>
                    <h4>{item?.title.substring(0, 20)}...</h4>
                    <small>Brand Name: {item?.brand}</small>
                    <h4>Price: <span>{item?.price}</span> BDT</h4>
                    <button className='button-details' >View Details </button>
                    {/* <br /> */}
                </div>
            </div>
        </Link>
    );
};

export default ProductCard;