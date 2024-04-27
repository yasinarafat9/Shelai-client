import './Cart.css';
import CartCard from '../../components/CartCard';

const Cart = () => {
    return (
        <div className='cart-page'>
            <h1>Cart Page</h1>
           <CartCard></CartCard>
           <CartCard></CartCard>
           <CartCard></CartCard>
           <CartCard></CartCard>
        </div>
    );
};

export default Cart;