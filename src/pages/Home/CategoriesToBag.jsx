import './TopCategoriesMenWomen.css'
import Shirt from '../../assets/Images/Home/CategoriesToBag/shirt.jpg'
import Pants from '../../assets/Images/Home/CategoriesToBag/pants.jpg'
import Shoe from '../../assets/Images/Home/CategoriesToBag/shoe.jpg'
import FullSleeve from '../../assets/Images/Home/CategoriesToBag/fullSleeve.jpg'
import Hoodie from '../../assets/Images/Home/CategoriesToBag/hoodie.jpg'
import Trousers from '../../assets/Images/Home/CategoriesToBag/trousers.jpg'
import Shorts from '../../assets/Images/Home/CategoriesToBag/Shorts.jpg'
import UnderGarments from '../../assets/Images/Home/CategoriesToBag/UnderGarments.jpg'
import Wallets from '../../assets/Images/Home/CategoriesToBag/Wallets.jpg'
import Purses from '../../assets/Images/Home/CategoriesToBag/Purses.jpg'
import Belts from '../../assets/Images/Home/CategoriesToBag/Belts.jpg'
import Bag from '../../assets/Images/Home/CategoriesToBag/Bag.jpg'
import Glasses from '../../assets/Images/Home/CategoriesToBag/Glasses.jpg'
import Hats from '../../assets/Images/Home/CategoriesToBag/Hats.jpg'
import OverCoat from '../../assets/Images/Home/CategoriesToBag/OverCoat.jpg'


const CategoriesToBag = () => {
    return (
        <div className='top-category-page' >
            <h1 >Categories To Bag</h1>
            <div className='Top-category-container'>
                <div className='category-card'>
                    <img src={FullSleeve} alt="" />
                    <h3>Full Sleeve</h3>
                </div>
                <div className='category-card'>
                    <img src={Shirt} alt="" />
                    <h3>T-Shirts</h3>
                </div>
                <div className='category-card'>
                    <img src={Pants} alt="" />
                    <h3>Pants</h3>
                </div>
                <div className='category-card'>
                    <img src={Trousers} alt="" />
                    <h3>Trousers</h3>
                </div>
                <div className='category-card'>
                    <img src={Shorts} alt="" />
                    <h3>Shorts</h3>
                </div>
                <div className='category-card'>
                    <img src={Hoodie} alt="" />
                    <h3>Hoodie</h3>
                </div>
                <div className='category-card'>
                    <img src="https://i.pinimg.com/564x/24/d3/fe/24d3fee5d316c27969a559fd36802247.jpg" alt="" />
                    <h3>Jacket</h3>
                </div>
                <div className='category-card'>
                    <img src={OverCoat} alt="" />
                    <h3>OverCoat</h3>
                </div>
                <div className='category-card'>
                    <img src={Shoe} alt="" />
                    <h3>Footwear</h3>
                </div>
                <div className='category-card'>
                    <img src={Wallets} alt="" />
                    <h3>Wallets</h3>
                </div>
                <div className='category-card'>
                    <img src={Purses} alt="" />
                    <h3>purses</h3>
                </div>
                <div className='category-card'>
                    <img src={Belts} alt="" />
                    <h3>Belts</h3>
                </div>
                <div className='category-card'>
                    <img src={Bag} alt="" />
                    <h3>Bag</h3>
                </div>
                <div className='category-card'>
                    <img src="https://i.pinimg.com/564x/f0/a4/58/f0a458b8be54881ee60829d40a9d2293.jpg" alt="" />
                    <h3>Watches</h3>
                </div>
                <div className='category-card'>
                    <img src="https://i.pinimg.com/564x/27/7f/47/277f47b959573fa274f68ee2c763d916.jpg" alt="" />
                    <h3>Perfume</h3>
                </div>


               
               
               
                <div className='category-card'>
                    <img src={UnderGarments} alt="" />
                    <h3>Under Garments</h3>
                </div>
               
                
               
                <div className='category-card'>
                    <img src={Glasses} alt="" />
                    <h3>Glasses</h3>
                </div>
                <div className='category-card'>
                    <img src={Hats} alt="" />
                    <h3>Hats</h3>
                </div>
               
            </div>
        </div>
    );
};

export default CategoriesToBag;